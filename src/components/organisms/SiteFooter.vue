<script setup lang="ts">
import TextLink from '@/components/atoms/TextLink.vue'
import { site } from '@/data/site'
</script>

<template>
  <footer class="border-t border-dashed border-border">
    <div
      class="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-8 sm:px-6 lg:px-8"
    >
      <p class="text-mono-meta text-foreground-subtle">© 2026 {{ site.domain }}</p>
      <p class="text-mono-meta text-foreground-subtle">powered by coffee</p>
      <TextLink href="#top" tone="quiet" class="text-mono-meta">
        back to top
        <span aria-hidden="true">↑</span>
      </TextLink>
    </div>
  </footer>
</template>
