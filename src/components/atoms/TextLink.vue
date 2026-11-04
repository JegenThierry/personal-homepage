<script setup lang="ts">
withDefaults(
  defineProps<{
    href: string
    external?: boolean
    tone?: 'quiet' | 'muted'
  }>(),
  { external: false, tone: 'muted' },
)
</script>

<template>
  <a
    :href="href"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
    class="underline decoration-border decoration-dashed underline-offset-4 transition-colors hover:text-brand-secondary hover:decoration-brand-secondary"
    :class="tone === 'muted' ? 'text-foreground-muted' : 'text-inherit'"
  >
    <slot />
  </a>
</template>
