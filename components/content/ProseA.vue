<template>
    <!-- use NuxtLink to prevent hydration error -->
    <NuxtLink v-if="isYoutubeLink">
        <iframe :src="embedSource" frameborder="0" allowfullscreen />
    </NuxtLink>
    <NuxtLink v-else :href="href" target="_blank">
        <slot />
    </NuxtLink>
</template>
  
<script setup lang="ts">

const { href } = defineProps({
    href: {
        type: String,
        default: ''
    }
})
const isYoutubeLink = href.match(/^https:\/\/www\.youtube\.com\/watch\?(v=[0-9a-zA-Z_]*)\&?/)

let embedSource = ''

if (isYoutubeLink) {
    isYoutubeLink.forEach((match) => {
        const regExpMatchArray = match.match(/v=(.*)$/);
        if (regExpMatchArray) {
            const videoId = regExpMatchArray[1];
            embedSource = `https://www.youtube-nocookie.com/embed/${videoId}`
        }
    });
}
</script>