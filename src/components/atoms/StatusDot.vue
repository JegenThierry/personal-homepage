<script setup lang="ts">
defineProps<{
  label?: string
}>()
</script>

<template>
  <span class="inline-flex items-center gap-2">
    <span class="relative flex h-2 w-2" aria-hidden="true">
      <span
        class="absolute inline-flex h-full w-full bg-brand-primary opacity-60 motion-safe:animate-ping"
      />
      <span class="relative inline-flex h-2 w-2 bg-brand-primary" />
    </span>
    <span v-if="label" class="font-mono text-xs uppercase tracking-widest text-foreground-muted">
      {{ label }}
    </span>
  </span>
</template>
