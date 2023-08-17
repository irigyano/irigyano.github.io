<template>
    <button class="relative h-9 rounded-full bg-current" @click="toggleDark()">
        <div class="flex justify-around items-center w-20">
            <angelSvg class="h-6"></angelSvg>
            <devilSvg class="h-6"></devilSvg>
        </div>
        <div :class="{ 'translate-x-11': !isDarkScheme }"
            class="duration-300 absolute top-0 rounded-full h-9 w-9 text-heading bg-current hover:opacity-100">
        </div>
    </button>
</template>
<script setup>
import devilSvg from '~/assets/icons/devil-svgrepo-com.svg'
import angelSvg from '~/assets/icons/angel-svgrepo-com.svg'
const isDarkScheme = ref()

onMounted(() => {
    isDarkScheme.value = document.documentElement.classList.contains('dark')
    const observer = new MutationObserver((mutationRecord) => {
        for (let mutation of mutationRecord) {
            if (mutation.target.className === 'dark') return isDarkScheme.value = true
            return isDarkScheme.value = false
        }
    });
    observer.observe(document.documentElement, { attributes: true })
})

function toggleDark() {
    const htmlClass = document.documentElement.classList
    if (htmlClass.contains('dark')) {
        return htmlClass.remove('dark')
    }
    return htmlClass.add('dark')
}
</script>