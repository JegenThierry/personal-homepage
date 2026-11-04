<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>

<template>
  <span
    class="border border-border bg-background/60 px-2 py-0.5 font-mono text-[0.6875rem] uppercase tracking-widest text-foreground-muted"
  >
    {{ label }}
  </span>
</template>
