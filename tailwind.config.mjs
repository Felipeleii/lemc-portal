/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'lemc-blue': '#1e3a5f',
        'lemc-green': '#2d7d4f',
        'lemc-gold': '#f0a500',
      },
    },
  },
  plugins: [],
}
