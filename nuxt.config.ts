export default defineNuxtConfig({
  css: [
    '@/assets/css/styles.css',
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})