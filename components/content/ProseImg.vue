<template>
    <div class="my-8 text-center">
        <img class="m-0" :src="refinedSrc" :alt="alt" :width="width" :height="height">
        <a v-if="src.startsWith('http')" :href="src" class="text-sm underline">圖片來源</a>
    </div>
</template>
  
<script setup lang="ts">
import { withTrailingSlash, withLeadingSlash, joinURL } from 'ufo'
import { useRuntimeConfig, computed } from '#imports'

const props = defineProps({
    src: {
        type: String,
        default: ''
    },
    alt: {
        type: String,
        default: ''
    },
    width: {
        type: [String, Number],
        default: 500
    },
    height: {
        type: [String, Number],
        default: 500
    }
})

const refinedSrc = computed(() => {
    if (props.src?.startsWith('/') && !props.src.startsWith('//')) {
        const _base = withLeadingSlash(withTrailingSlash(useRuntimeConfig().app.baseURL))
        if (_base !== '/' && !props.src.startsWith(_base)) {
            return joinURL(_base, props.src)
        }
    }
    return props.src
})
</script>