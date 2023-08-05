<template>
  <nav class="py-4 flex">
    <NuxtLink to="/" class="pl-2 text-4xl font-extrabold text-heading">
      Look Back</NuxtLink>
    <div class="flex-1 flex justify-end">
      <button @click="toggleDark()" class="pr-2">
        <div v-if="isDarkScheme === true">Dark</div>
        <div v-if="isDarkScheme === false">Light</div>
      </button>
    </div>
  </nav>
</template>
<script setup>
const isDarkScheme = ref(undefined)

onMounted(() => {
  const htmlDom = document.documentElement
  isDarkScheme.value = htmlDom.classList.contains('dark')

  const observer = new MutationObserver((mutationRecord) => {
    for (let mutation of mutationRecord) {
      if (mutation.target.className === 'dark') return isDarkScheme.value = true
      return isDarkScheme.value = false
    }
  });
  observer.observe(htmlDom, { attributes: true })
})

function toggleDark() {
  const htmlClass = document.documentElement.classList
  if (htmlClass.contains('dark')) {
    return htmlClass.remove('dark')
  }
  return htmlClass.add('dark')
}
</script>