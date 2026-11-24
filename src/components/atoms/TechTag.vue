<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>

<template>
  <span
    class="border border-border bg-background/60 px-2 py-0.5 text-mono-tag text-foreground-muted"
  >
    {{ label }}
  </span>
</template>
