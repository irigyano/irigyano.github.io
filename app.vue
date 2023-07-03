<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
useHead({
  titleTemplate: (title) => `${title} - Aaron Hsieh`,
  bodyAttrs: { class: "bg-white dark:bg-black text-black dark:text-white" },
});
</script>
