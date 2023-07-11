// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: { baseURL: "/aaronhs/" },
  modules: ["nuxt-content-assets", "@nuxt/content", "@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      "Noto Sans": true,
      // "Noto Sans TC": true,
      // "Noto Sans JP": true,
    },
  },
  content: {
    markdown: {
      anchorLinks: false,
    },
    navigation: {
      fields: ["publishedAt", "description"],
    },
    highlight: {
      theme: "monokai",
    },
  },
  css: ["~/assets/css/main.css"],
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
