<script setup lang="ts">
defineProps<{
  label?: string
}>()
</script>

<template>
  <span class="inline-flex items-center gap-2">
    <span class="relative flex h-2 w-2" aria-hidden="true">
      <span
        class="absolute inline-flex h-full w-full animate-ping light:bg-indigo-500 opacity-60 dark:bg-indigo-300"
      />
      <span class="relative inline-flex h-2 w-2 light:bg-indigo-500 dark:bg-indigo-300" />
    </span>
    <span v-if="label" class="text-sm uppercase tracking-widest light:text-zinc-600 dark:text-zinc-400">
      {{ label }}
    </span>
  </span>
</template>
