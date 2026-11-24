<script setup lang="ts">
defineProps<{
  label?: string
}>()
</script>

<template>
  <span class="inline-flex items-center gap-2">
    <span class="inline-flex h-2 w-2 bg-brand-primary" aria-hidden="true" />
    <span v-if="label" class="text-mono-meta text-foreground-muted">
      {{ label }}
    </span>
  </span>
</template>
