// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-font-loader'],
  css: ['~/assets/css/main.css'],
  fontLoader: {
    local: [
      {
        src: '/fonts/SF-Pro/SFPRODISPLAYREGULAR.woff',
        family: 'sf pro display',
        weight: '400',
        class: 'sf-pro-display',
      },
      {
        src: '/fonts/SF-Pro/SFPRODISPLAYMEDIUM.woff',
        family: 'sf pro display',
        weight: '500',
        class: 'sf-pro-display-medium',
      },
      {
        src: '/fonts/SF-Pro/SFPRODISPLAYBOLD.woff',
        family: 'sf pro display',
        weight: '700',
        class: 'sf-pro-display-bold',
      },
    ],
  },
});
