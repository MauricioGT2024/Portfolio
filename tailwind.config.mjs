/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class', // Habilita el modo oscuro basado en clases
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        secondary: '#8B5CF6',
        dark: {
          bg: '#0F172A',
          text: '#E2E8F0'
        },
        light: {
          bg: '#FFFFFF',
          text: '#1E293B'
        }
      }
    }
  },
  plugins: [],
}