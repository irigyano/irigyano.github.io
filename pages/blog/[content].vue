<template>
  <section class="animate-slide-in p-2 flex">
    <ContentDoc>
      <template v-slot="{ doc }">
        <main class="w-full flex-1">
          <h1 class="text-3xl font-semibold text-red-400 dark:text-blue-500">
            {{ doc.title }}
          </h1>
          <p class="my-1 text-xs opacity-80">
            {{ doc.editedAt ? "編輯於 " + doc.editedAt : doc.publishedAt }}
          </p>
          <article
            class="prose-base prose-img:mx-auto prose-img:rounded prose-a:text-red-300 prose-a:dark:text-blue-400 prose-h2:font-extrabold prose-h3:font-bold
            prose-pre:bg-neutral-700 prose-pre:overflow-x-scroll prose-pre:scrollbar-thin prose-blockquote:italic prose-blockquote:w-fit prose-blockquote:border-l-4 prose-blockquote:pr-4 
            prose-blockquote:bg-zinc-300 prose-blockquote:dark:bg-zinc-700 prose-blockquote:border-zinc-700 prose-blockquote:dark:border-zinc-300">
            <p>
              {{ doc.description }}
            </p>
            <ContentRenderer id="nuxt-content" :value="doc" />
          </article>
          <GiscusComment />
        </main>
        <div class="flex justify-center">
          <TableOfContents class="w-max" :toc="doc.body.toc.links" :activeToc="activeTocId" />
          <button @click="() => { backToTop() }" class="fixed bottom-20 border-2 border-current rounded-full p-2">
            <rocketSvg class="h-10"></rocketSvg>
          </button>
        </div>
      </template>
      <template #not-found>{{ navigateTo("/") }} </template>
    </ContentDoc>
  </section>
</template>

<script setup lang="ts">
import rocketSvg from '~/assets/icons/rocket-svgrepo-com.svg'
const activeTocId: Ref<string | null> = ref(null)
const observer: Ref<IntersectionObserver | null> = ref(null)

onMounted(() => {
  observer.value = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute('id')
      if (entry.isIntersecting) {
        activeTocId.value = id
      }
    })
  }, { rootMargin: "0px 0px -80% 0px" })

  document.querySelectorAll('#nuxt-content h2[id], #nuxt-content h3[id]').forEach((section) => {
    observer.value?.observe(section)
  })
})

onUnmounted(() => {
  observer.value?.disconnect()
})

function backToTop() {
  window.scrollTo({ top: 0 })
}
</script>
