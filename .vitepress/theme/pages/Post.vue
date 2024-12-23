<script setup lang="ts">
import { useData, useRoute } from "vitepress";
import DateComponent from "../components/Date.vue";
import { formatDate } from "../../utils.js";
const { frontmatter } = useData();
const {
  data: { lastUpdated },
} = useRoute();
</script>

<template>
  <article>
    <header class="pb-4">
      <h1 class="text-[32px] leading-10 font-bold">
        {{ frontmatter.title }}
      </h1>
      <div class="text-sm pb-2">
        <!-- <span> Published At </span> -->
        <DateComponent :date="formatDate(frontmatter.date)" />
        <!-- UpdatedAt, tooltip -->
        <!-- <DateComponent
            :date="formatDate(new Date(lastUpdated as number).toISOString())"
          /> -->
      </div>
      <span v-if="frontmatter.description">{{ frontmatter.description }}</span>
    </header>
    <!-- Content is a special tag from VitePress -->
    <Content class="vp-doc" />
  </article>
</template>
