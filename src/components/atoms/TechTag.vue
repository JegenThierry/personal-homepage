<script setup lang="ts">
import type { Technologies } from '@/data/technologies'

defineProps<{
  label: Technologies
}>()
</script>

<template>
  <span
    class="border border-border px-2 py-0.5 text-xs uppercase tracking-widest text-foreground-muted"
  >
    {{ label }}
  </span>
</template>
