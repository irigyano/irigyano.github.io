export default defineNuxtConfig({
  app: {
    baseURL: "/aaronhs/",
    head: {
      script: [
        {
          children:
            'window.matchMedia("(prefers-color-scheme: dark)").matches&&document.documentElement.classList.add("dark");',
        },
      ],
    },
  },
  modules: ["nuxt-content-assets", "@nuxt/content", "@nuxtjs/google-fonts"],
  ssr: false,
  googleFonts: {
    families: {
      "Noto Sans": true,
    },
  },
  content: {
    markdown: {
      anchorLinks: false,
    },
    navigation: {
      fields: ["publishedAt", "state", "description"],
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
