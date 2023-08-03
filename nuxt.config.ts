export default defineNuxtConfig({
  app: {
    baseURL: "/aaronhs/",
    head: {
      script: [
        {
          children:
            '!function(){let e=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,t=localStorage.getItem("color-scheme")||"auto";("dark"===t||e&&"light"!==t)&&document.documentElement.classList.toggle("dark",!0)}();',
        },
      ],
    },
  },
  modules: ["nuxt-content-assets", "@nuxt/content", "@nuxtjs/google-fonts"],
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
