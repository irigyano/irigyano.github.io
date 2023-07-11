<template>
  <main class="animate-slide-in p-2">
    <ContentDoc>
      <template v-slot="{ doc }">
        <h1 class="text-4xl font-semibold text-red-400 dark:text-blue-500">
          {{ doc.title }}
        </h1>
        <p class="my-1 text-xs opacity-80">
          {{ doc.publishedAt }}
        </p>
        <article
          class="prose-base prose-img:mx-auto prose-img:rounded prose-a:text-red-300 prose-a:dark:text-blue-400
        prose-pre:bg-neutral-700 prose-pre:overflow-x-scroll prose-blockquote:italic prose-blockquote:w-fit prose-blockquote:border-l-4 prose-blockquote:pr-4 
        prose-blockquote:bg-zinc-300 prose-blockquote:dark:bg-zinc-700 prose-blockquote:border-zinc-700 prose-blockquote:dark:border-zinc-300">
          <p>
            {{ doc.description }}
          </p>
          <ContentRenderer :value="doc" />
        </article>
        <GiscusComment />
      </template>
      <template #not-found>{{ navigateTo("/") }} </template>
    </ContentDoc>
  </main>
</template>

