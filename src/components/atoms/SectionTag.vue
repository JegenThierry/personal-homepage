<script setup lang="ts">
defineProps<{
  number: string
  label: string
}>()
</script>

<template>
  <p class="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest">
    <span class="text-brand-primary">{{ number }}</span>
    <span aria-hidden="true" class="text-border">//</span>
    <span class="text-foreground-muted">{{ label }}</span>
  </p>
</template>
