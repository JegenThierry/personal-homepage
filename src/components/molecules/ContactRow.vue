<script setup lang="ts">
import type { SocialLink } from '@/data/site'
import { buildMailto } from '@/utils/email'

defineProps<{
  link: SocialLink
}>()

const isMailLink = (link: SocialLink) => link.href.startsWith('mailto:')

const resolveHref = (link: SocialLink) =>
  isMailLink(link) && link.parts ? buildMailto(link.parts) : link.href
</script>

<template>
  <a
    :href="resolveHref(link)"
    :target="isMailLink(link) ? undefined : '_blank'"
    :rel="isMailLink(link) ? undefined : 'noopener noreferrer'"
    class="group flex items-center justify-between gap-4 border-b border-dashed border-border px-5 py-4 last:border-b-0 sm:px-6"
  >
    <span class="flex items-center gap-4">
      <span
        class="w-20 shrink-0 font-mono text-xs uppercase tracking-widest text-foreground-subtle"
      >
        {{ link.label }}
      </span>
      <span class="text-base text-foreground transition-colors group-hover:text-brand-secondary">
        {{ link.handle }}
      </span>
    </span>
    <span
      aria-hidden="true"
      class="font-mono text-sm leading-none text-foreground-subtle transition-colors group-hover:text-brand-primary"
    >
      -&gt;
    </span>
  </a>
</template>
