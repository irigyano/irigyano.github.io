import { defineConfig } from "vitepress";

export default defineConfig({
  title: "widetime",
  titleTemplate: ":title - widetime",
  description: "irigyano's personal website.",
  lang: "zh-TW",
  appearance: "force-dark",
  cleanUrls: true,
  srcExclude: ["**/README.md"],
  lastUpdated: true,
});
