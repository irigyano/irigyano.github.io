<script setup lang="ts">
import { useData, useRoute } from "vitepress";
import Date from "../components/Date.vue";
import { formatDate } from "../../utils.js";
const { frontmatter } = useData();
</script>

<template>
  <article>
    <header>
      <h1 class="text-[32px] leading-10 font-bold">
        {{ frontmatter.title }}
      </h1>
      <Date :date="formatDate(frontmatter.date)" />
    </header>
    <!-- Content is a special tag from VitePress -->
    <Content class="vp-doc" />
  </article>
</template>
