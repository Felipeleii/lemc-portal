/**
 * ORCID Public API client
 *
 * Credentials are loaded from environment variables:
 *   ORCID_CLIENT_ID     – Application client ID
 *   ORCID_CLIENT_SECRET – Application client secret
 *
 * The public read-only API does not require authentication for basic record
 * access, but the Member API (for full details) does.  This module supports
 * both paths.
 */

export interface OrcidWork {
  title: string;
  journal: string;
  year: number | null;
  doi: string | null;
  authors: string[];
  url: string | null;
}

const ORCID_API_BASE = 'https://pub.orcid.org/v3.0';

/**
 * Fetches public works from an ORCID profile using the unauthenticated
 * public API endpoint.  Returns an empty array on any error so pages
 * always render gracefully even when the API is unavailable.
 */
export async function fetchOrcidPublications(orcidId: string): Promise<OrcidWork[]> {
  try {
    const worksRes = await fetch(`${ORCID_API_BASE}/${orcidId}/works`, {
      headers: { Accept: 'application/json' },
    });

    if (!worksRes.ok) {
      console.warn(`ORCID API returned ${worksRes.status} for ${orcidId}`);
      return [];
    }

    const worksData = await worksRes.json();
    const groups: unknown[] = worksData?.group ?? [];

    const works: OrcidWork[] = [];

    for (const group of groups) {
      const summaries: unknown[] = (group as Record<string, unknown>)?.['work-summary'] as unknown[] ?? [];
      const first = summaries[0] as Record<string, unknown> | undefined;
      if (!first) continue;

      const titleValue =
        ((first?.['title'] as Record<string, unknown>)?.['title'] as Record<string, unknown>)?.['value'] as string ?? '';

      const journalValue =
        (first?.['journal-title'] as Record<string, unknown>)?.['value'] as string ?? '';

      const pubYear =
        ((first?.['publication-date'] as Record<string, unknown>)?.['year'] as Record<string, unknown>)?.['value'];

      const externalIds: unknown[] =
        ((first?.['external-ids'] as Record<string, unknown>)?.['external-id'] as unknown[]) ?? [];

      let doi: string | null = null;
      for (const ext of externalIds) {
        const e = ext as Record<string, unknown>;
        if (e?.['external-id-type'] === 'doi') {
          doi = (e?.['external-id-value'] as string) ?? null;
          break;
        }
      }

      const url = doi ? `https://doi.org/${doi}` : ((first?.['url'] as Record<string, unknown>)?.['value'] as string) ?? null;

      works.push({
        title: titleValue,
        journal: journalValue,
        year: pubYear ? Number(pubYear) : null,
        doi,
        authors: [],
        url,
      });
    }

    return works;
  } catch (err) {
    console.error('Failed to fetch ORCID publications:', err);
    return [];
  }
}

/**
 * Obtain an access token via the ORCID Member API (Client Credentials flow).
 * Requires ORCID_CLIENT_ID and ORCID_CLIENT_SECRET environment variables.
 */
export async function getOrcidAccessToken(): Promise<string | null> {
  const clientId = import.meta.env.ORCID_CLIENT_ID;
  const clientSecret = import.meta.env.ORCID_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    console.warn('ORCID credentials not configured. Set ORCID_CLIENT_ID and ORCID_CLIENT_SECRET.');
    return null;
  }

  try {
    const res = await fetch('https://orcid.org/oauth/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: 'client_credentials',
        scope: '/read-public',
      }),
    });

    if (!res.ok) {
      console.warn(`ORCID token endpoint returned ${res.status}`);
      return null;
    }

    const data = await res.json();
    return (data?.access_token as string) ?? null;
  } catch (err) {
    console.error('Failed to obtain ORCID access token:', err);
    return null;
  }
}
