<script setup lang="ts">
import type { SocialLink } from '@/data/site'

defineProps<{
  link: SocialLink
}>()
</script>

<template>
  <a
    :href="link.href"
    target="_blank"
    rel="noopener noreferrer"
    class="group flex items-center justify-between gap-4 border-b border-dashed border-border py-5 transition-colors last:border-b-0 hover:bg-surface"
  >
    <span class="flex items-baseline gap-4">
      <span class="w-24 shrink-0 text-xs uppercase tracking-widest text-foreground-subtle">
        {{ link.label }}
      </span>
      <span
        class="text-lg text-foreground-muted transition-colors group-hover:text-brand-secondary sm:text-xl"
      >
        {{ link.handle }}
      </span>
    </span>
    <span
      aria-hidden="true"
      class="text-foreground-subtle transition-all group-hover:translate-x-1 group-hover:text-brand-primary"
    >
      -&gt;
    </span>
  </a>
</template>
