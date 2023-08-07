<template>
    <button @click="toggleDark()">
        <div>{{ isDarkScheme ? 'Dark' : 'Light' }}</div>
    </button>
</template>
<script setup>
const isDarkScheme = ref(document.documentElement.classList.contains('dark'))

onMounted(() => {
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