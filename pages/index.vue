<template>
  <ContentNavigation v-slot="{ navigation }">
    <main class="animate-slide-in flex flex-col gap-10 p-2">
      <div v-for="link of navigation[0].children.sort(
        (blog1, blog2) =>
          new Date(blog2.publishedAt).getTime() -
          new Date(blog1.publishedAt).getTime()
      )">
        <NuxtLink class="text-4xl font-semibold text-red-500 dark:text-blue-500 hover:opacity-70 duration-300"
          :key="link._path" :to="link._path">
          {{ link.title }}
        </NuxtLink>
        <div class="w-fit my-1 text-sm opacity-30">
          {{ link.publishedAt }}
        </div>
        <p class="text-sm font-medium max-w-full w-max truncate">
          {{ link.description }}
        </p>
      </div>
    </main>
  </ContentNavigation>
</template>

<script setup>
useHead({ title: "Look Back" });
</script>
