// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
    ssr: false, // Disable ssr, by default its enabled
  modules: ['nuxt-headlessui', '@nuxtjs/tailwindcss'],
  headlessui: {
    prefix: 'Headless'
  },
  css: ["~/assets/css/tailwind.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})