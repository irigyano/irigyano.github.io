<template>
    <!-- SSR causing flick -->
    <button alt="toggle-darkmode" class="relative" @click="toggleDark()">
        <devilSvg v-if="isDarkScheme" class="h-10"></devilSvg>
        <angelSvg v-if="!isDarkScheme" class="h-10"></angelSvg>
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
    if (htmlClass.contains('dark')) return htmlClass.remove('dark')
    return htmlClass.add('dark')
}
</script>