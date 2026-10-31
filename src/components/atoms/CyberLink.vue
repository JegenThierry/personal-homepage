<script lang="ts" setup>
defineProps<{ href: string }>()
</script>

<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    class="group inline-flex items-center gap-1 text-foreground-muted transition-all duration-200 hover:text-brand-secondary"
  >
    <span aria-hidden="true" class="text-brand-secondary">[</span>
    <span class="underline-offset-4 group-hover:underline"><slot /></span>
    <span aria-hidden="true" class="text-brand-secondary">]</span>
  </a>
</template>
