<script setup lang="ts">
defineProps<{
  number: string
  label: string
}>()
</script>

<template>
  <p class="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest">
    <span class="light:text-indigo-600 dark:text-indigo-300">{{ number }}</span>
    <span aria-hidden="true" class="light:text-zinc-400 dark:text-zinc-700">//</span>
    <span class="light:text-zinc-700 dark:text-zinc-300">{{ label }}</span>
  </p>
</template>
