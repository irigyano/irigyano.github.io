<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
useHead({
  titleTemplate: (title) => `${title} - Aaron Hsieh`,
  meta: [{ name: 'description', content: "Aaron Hsieh 的部落格，紀錄轉職 Web 前端的職涯發展及日常。" }],
  htmlAttrs: { lang: "zh-tw" },
  bodyAttrs: { class: "bg-white dark:bg-black text-[#555555] dark:text-[#bbbbbb]" },
});
</script>
