<script setup lang="ts">
withDefaults(
  defineProps<{
    grid?: boolean
    glow?: boolean
  }>(),
  { grid: true, glow: false },
)
</script>

<template>
  <div aria-hidden="true" class="pointer-events-none absolute inset-0 overflow-hidden">
    <div
      v-if="grid"
      class="absolute inset-0 bg-size-[16px_16px] bg-[linear-gradient(to_right,var(--color-grid)_1px,transparent_1px),linear-gradient(var(--color-grid)_1px,transparent_1px)] mask-[linear-gradient(to_bottom,black,transparent_85%)]"
    />
    <div
      v-if="glow"
      class="absolute -top-24 right-0 h-64 w-64 bg-[radial-gradient(circle,var(--color-glow-top),transparent_70%)]"
    />
  </div>
</template>
