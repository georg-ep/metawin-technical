export default defineNuxtConfig({
  css: [
    '@/assets/css/styles.css',
  ],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      // Make sure the website is not being indexed or followed by robots
      meta: [{ name: 'robots', content: 'noindex,nofollow' }],
    }
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})