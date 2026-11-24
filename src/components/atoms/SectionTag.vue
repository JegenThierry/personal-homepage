<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>

<template>
  <p class="flex items-center gap-2 text-mono-meta font-medium">
    <span aria-hidden="true" class="text-brand-primary">//</span>
    <span class="text-foreground-subtle">{{ label }}</span>
  </p>
</template>
