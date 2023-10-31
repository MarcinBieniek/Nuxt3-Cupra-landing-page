// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: "src/",
  ssr: false,
  devtools: { enabled: true },
  css: ['@/assets/css/main.scss', 'animate.css/animate.min.css'],
  modules: ['nuxt-swiper', 'nuxt-icon', '@nuxt/image'],
  image: {
    dir: 'assets/images'
  },
})
