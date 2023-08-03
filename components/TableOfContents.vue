<template>
    <aside class="hidden lg:block sticky h-fit top-10">
        <ul class="flex flex-col pl-2 space-y-1">
            <li :class="{ 'text-blue-500': activeToc === link.id }" v-for="link of  tocData" :key="link.id">
                <a :href="`#${link.id}`">{{ link.text }}</a>
            </li>
        </ul>
    </aside>
</template>
<script setup>
import { toRaw } from "vue";
const { toc, activeToc } = defineProps(["toc", "activeToc"]);
const tocData = toRaw(toc);
</script>
