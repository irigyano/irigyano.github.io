<template>
    <aside class="hidden lg:block sticky h-fit top-20">
        <ul class="flex flex-col pl-4">
            <li class="pl-2 flex flex-col" v-for="link of  tocData" :key="link.id">
                <a class="hover:text-heading border-l-2 border-current pl-2 leading-7" @click="() => activeToc = link.id"
                    :class="{ 'text-heading': activeToc === link.id }" :href="`#${link.id}`">{{
                        link.text
                    }}</a>
                <a class="hover:text-heading border-l-2 border-current pl-4 text-sm leading-6"
                    @click="() => activeToc = child.id" :class="{ 'text-heading': activeToc === child.id }"
                    v-for="child of link?.children" :href="`#${child.id}`">{{ child.text }}</a>
            </li>
        </ul>
    </aside>
</template>
<script setup>
import { toRaw } from "vue";
let { toc, activeToc } = defineProps(["toc", "activeToc"]);
const tocData = toRaw(toc);
</script>
