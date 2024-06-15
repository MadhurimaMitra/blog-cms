// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@nuxt/content'
  ],
  app: {
    head: {
      script: [
        {hid: 'FontAwesome', src: 'https://kit.fontawesome.com/f64425d366.js'}
      ]
    }
  }
})
