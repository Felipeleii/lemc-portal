export const languages = {
  en: 'English',
  pt: 'Português',
};

export const defaultLang = 'en';

export const ui = {
  en: {
    'nav.research': 'Research',
    'nav.publications': 'Publications',
    'nav.news': 'News',
    'nav.team': 'Team',
    'nav.home': 'Home',
    'hero.title': 'LEMC / ALERTA',
    'hero.subtitle':
      'Laboratory of Emerging and Resistome in Clinical Microbiology · Alert Network for Antimicrobial Resistance',
    'hero.description':
      'We develop translational research in clinical microbiology, focusing on antimicrobial resistance, molecular epidemiology, and innovative diagnostics at UNIFESP.',
    'hero.cta.research': 'Our Research',
    'hero.cta.publications': 'Publications',
    'section.aries.title': 'Project ARIES',
    'section.aries.subtitle': 'Antimicrobial Resistance Identification & Epidemiological Surveillance',
    'section.aries.description':
      'ARIES is our flagship surveillance project tracking antimicrobial resistance patterns across clinical settings in Brazil, contributing to national and global AMR action plans.',
    'section.aries.cta': 'Learn More',
    'section.recent_pubs': 'Recent Publications',
    'section.recent_news': 'Latest News',
    'section.view_all': 'View All',
    'publications.title': 'Publications',
    'publications.subtitle': 'Peer-reviewed research from the LEMC/ALERTA team',
    'publications.orcid_sync': 'Synced via ORCID API',
    'publications.doi': 'DOI',
    'publications.year': 'Year',
    'research.title': 'Research',
    'research.subtitle': 'Our scientific focus areas',
    'news.title': 'News & Events',
    'news.subtitle': 'Conferences, achievements and updates',
    'team.title': 'Our Team',
    'team.subtitle': 'Researchers, clinicians, and students at LEMC/ALERTA',
    'team.role.pi': 'Principal Investigator',
    'team.role.researcher': 'Researcher',
    'team.role.student': 'Graduate Student',
    'footer.affiliation': 'Department of Medicine · Federal University of São Paulo (UNIFESP)',
    'footer.rights': 'All rights reserved.',
  },
  pt: {
    'nav.research': 'Pesquisa',
    'nav.publications': 'Publicações',
    'nav.news': 'Notícias',
    'nav.team': 'Equipe',
    'nav.home': 'Início',
    'hero.title': 'LEMC / ALERTA',
    'hero.subtitle':
      'Laboratório de Emergentes e Resistoma em Microbiologia Clínica · Rede de Alerta para Resistência Antimicrobiana',
    'hero.description':
      'Desenvolvemos pesquisa translacional em microbiologia clínica, com foco em resistência antimicrobiana, epidemiologia molecular e diagnósticos inovadores na UNIFESP.',
    'hero.cta.research': 'Nossa Pesquisa',
    'hero.cta.publications': 'Publicações',
    'section.aries.title': 'Projeto ARIES',
    'section.aries.subtitle': 'Identificação de Resistência Antimicrobiana e Vigilância Epidemiológica',
    'section.aries.description':
      'O ARIES é nosso principal projeto de vigilância, rastreando padrões de resistência antimicrobiana em ambientes clínicos no Brasil, contribuindo para os planos de ação nacionais e globais contra a RAM.',
    'section.aries.cta': 'Saiba Mais',
    'section.recent_pubs': 'Publicações Recentes',
    'section.recent_news': 'Últimas Notícias',
    'section.view_all': 'Ver Todas',
    'publications.title': 'Publicações',
    'publications.subtitle': 'Pesquisas revisadas por pares da equipe LEMC/ALERTA',
    'publications.orcid_sync': 'Sincronizado via API do ORCID',
    'publications.doi': 'DOI',
    'publications.year': 'Ano',
    'research.title': 'Pesquisa',
    'research.subtitle': 'Nossas áreas de foco científico',
    'news.title': 'Notícias e Eventos',
    'news.subtitle': 'Conferências, conquistas e atualizações',
    'team.title': 'Nossa Equipe',
    'team.subtitle': 'Pesquisadores, clínicos e estudantes do LEMC/ALERTA',
    'team.role.pi': 'Investigador Principal',
    'team.role.researcher': 'Pesquisador(a)',
    'team.role.student': 'Pós-graduando(a)',
    'footer.affiliation': 'Departamento de Medicina · Universidade Federal de São Paulo (UNIFESP)',
    'footer.rights': 'Todos os direitos reservados.',
  },
} as const;

export type Lang = keyof typeof ui;
export type UiKey = keyof (typeof ui)[typeof defaultLang];
