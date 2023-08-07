<template>
  <nav class="py-4 flex">
    <NuxtLink to="/" class="pl-2 text-4xl font-extrabold text-heading">
      Look Back</NuxtLink>
    <div class="flex-1 flex justify-end pr-2">
      <ClientOnly>
        <DarkModeToggle />
      </ClientOnly>
    </div>
  </nav>
</template>
