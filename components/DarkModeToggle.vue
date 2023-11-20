<template>
    <button alt="toggle-darkmode" class="relative flex" @click="toggleDark()">
        <angelSvg class="h-10 absolute dark:scale-0"></angelSvg>
        <devilSvg class="h-10 absolute scale-0 dark:scale-100"></devilSvg>
    </button>
</template>
<script setup>
import devilSvg from '~/assets/icons/devil-svgrepo-com.svg'
import angelSvg from '~/assets/icons/angel-svgrepo-com.svg'

function toggleDark() {
    const htmlClass = document.documentElement.classList
    if (htmlClass.contains('dark')) return htmlClass.remove('dark')
    return htmlClass.add('dark')
}
</script>