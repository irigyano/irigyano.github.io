<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - pepeNotes` : 'pepeNotes';
  },
  htmlAttrs: { lang: "zh-tw" },
  bodyAttrs: { class: "bg-white dark:bg-black text-[#555555] dark:text-[#bbbbbb] duration-300 scrollbar-thin scrollbar-thumb-[#9393938c] hover:scrollbar-thumb-[#ef4444] dark:hover:scrollbar-thumb-[#2563eb]" },
});

onMounted(() => {
  const htmlClass = document.documentElement.classList
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    if (e.matches) return htmlClass.add('dark')
    return htmlClass.remove('dark')
  });
})
</script>