<template>
  <nav :class="{ '-translate-y-20': hideNavbar }"
    class="py-4 flex items-center sticky top-0 z-10 bg-white dark:bg-black duration-300">
    <NuxtLink to="/" class="pl-2 text-4xl font-extrabold text-heading">
      Look Back</NuxtLink>
    <div class="flex-1 flex justify-end pr-2">
      <ClientOnly>
        <DarkModeToggle />
      </ClientOnly>
    </div>
  </nav>
</template>
<script setup>
const prevPos = ref(0)
const hideNavbar = ref(false)

onMounted(() => {
  document.addEventListener('scroll', () => {
    const currPos = window.scrollY
    if (currPos > prevPos.value) {
      hideNavbar.value = true
    } else {
      hideNavbar.value = false
    }
    prevPos.value = currPos
  })
})
</script>