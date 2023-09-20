<template>
  <ContentNavigation v-slot="{ navigation }">
    <main class="animate-slide-in flex flex-col gap-10 p-2">
      <div v-for="link of navigation[0].children.filter((blog) => blog.state !== 'Hidden').sort(
        (blog1, blog2) => {
          // what is this hacky thing kek
          if (blog1.state === 'Pinned') return -1
          if (blog2.state === 'Pinned') return 1
          return (
            new Date(blog2.publishedAt).getTime() -
            new Date(blog1.publishedAt).getTime()
          )
        }
      )">
        <NuxtLink class="text-3xl font-semibold text-heading" :key="link._path" :to="link._path">
          {{ link.title }}
        </NuxtLink>
        <div class="w-fit my-1 text-sm opacity-30">
          {{ link.state === 'Pinned' ? link.state : link.publishedAt }}
        </div>
        <p class="text-sm font-medium max-w-full w-max truncate">
          {{ link.description }}
        </p>
      </div>
    </main>
  </ContentNavigation>
</template>

<script setup>
useHead({ title: "IT depends" });
</script>
