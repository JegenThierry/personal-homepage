<script lang="ts" setup>
defineProps<{ href: string }>()
</script>

<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    class="group inline-flex items-center gap-1 light:text-zinc-700 transition-all duration-200 light:hover:text-rose-700 dark:text-zinc-300 dark:hover:text-rose-200"
  >
    <span
      aria-hidden="true"
      class="light:text-rose-700 light:group-hover:text-rose-700 dark:text-rose-200 dark:group-hover:text-rose-200"
      >[</span
    >
    <span class="underline-offset-4 group-hover:underline"><slot /></span>
    <span
      aria-hidden="true"
      class="light:text-rose-700 light:group-hover:text-rose-700 dark:text-rose-200 dark:group-hover:text-rose-200"
      >]</span
    >
  </a>
</template>
