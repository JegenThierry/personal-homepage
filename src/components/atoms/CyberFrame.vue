<script setup lang="ts">
const corners = [
  '-top-px -left-px border-t border-l',
  '-top-px -right-px border-t border-r',
  '-bottom-px -left-px border-b border-l',
  '-bottom-px -right-px border-b border-r',
]
</script>

<template>
  <div class="relative border border-border">
    <span
      v-for="corner in corners"
      :key="corner"
      aria-hidden="true"
      class="pointer-events-none absolute h-3 w-3 border-brand-primary"
      :class="corner"
    />
    <slot />
  </div>
</template>
