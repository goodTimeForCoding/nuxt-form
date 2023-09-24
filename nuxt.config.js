export default {
  head: {
    title: 'nuxt-form',
    htmlAttrs: {
      lang: 'ru',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: ['normalize.css', './assets/styles/global.scss'],

  plugins: ['./plugins/vuePhoneNumberInput.js'],

  components: true,
  buildModules: [],
  modules: [
    '@nuxtjs/axios',
    'nuxt-webfontloader',
    '@nuxtjs/style-resources',
    '@nuxtjs/recaptcha',
  ],

  webfontloader: {
    events: false,
    google: {
      families: ['Montserrat:500,700:cyrillic&display=swap'],
    },
    timeout: 5000,
  },

  styleResources: {
    scss: [
      './assets/styles/mini.scss',
      './assets/styles/settings.scss',
      './assets/styles/breakpoint.scss',
      './assets/styles/variables.scss',
    ],
  },

  axios: {
    baseURL: process.env.API_URL,
  },

  recaptcha: {
    hideBadge: true,
    mode: 'enterprise',
    siteKey: process.env.RECAPTCHA_SITE_KEY,
    version: 3,
  },
};
