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

  plugins: [
    './plugins/vuePhoneNumberInput.js',
    './plugins/vueSelect.js',
    { src: './plugins/veeValidate.js', ssr: true },
  ],

  components: true,
  buildModules: [],
  modules: [
    '@nuxtjs/axios',
    'nuxt-webfontloader',
    '@nuxtjs/style-resources',
    '@nuxtjs/toast',
    '@nuxtjs/recaptcha',
  ],

  build: {
    transpile: ['vee-validate/dist/rules'],
  },

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
    ],
  },

  axios: {
    baseURL: process.env.API_URL,
  },

  toast: {
    position: 'top-right',
    duration: 10000,
  },

  recaptcha: {
    hideBadge: true,
    mode: 'enterprise',
    siteKey: process.env.RECAPTCHA_SITE_KEY,
    version: 3,
  },
};
