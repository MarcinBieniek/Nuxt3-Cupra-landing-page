// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: "src/",
  ssr: false,
  devtools: { enabled: true },
  css: ['@/assets/scss/main.scss', 'animate.css/animate.min.css'],
  modules: ['nuxt-icons', '@nuxt/image', 'nuxt-swiper'],
  image: {
    dir: 'assets/images'
  }
})
