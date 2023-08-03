<template>
  <nav class="py-4 flex">
    <NuxtLink to="/" class="pl-2 text-4xl font-extrabold text-heading">
      Look Back</NuxtLink>
    <div class="flex-1 flex justify-end">
      <button @click="toggleDark()" class="pr-2">toggle</button>
    </div>
  </nav>
</template>
<script setup>
function toggleDark() {
  const htmlClass = document.documentElement.classList
  if (htmlClass.contains('dark')) {
    return htmlClass.remove('dark')
  }
  return htmlClass.add('dark')
}
</script>