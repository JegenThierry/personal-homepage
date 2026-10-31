<script setup lang="ts">
import { site } from '@/data/site'
</script>

<template>
  <footer class="border-t border-dashed border-border">
    <div
      class="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-8 sm:px-6 lg:px-8"
    >
      <p class="text-xs uppercase tracking-widest text-foreground-subtle">
        © 2026 {{ site.domain }}
      </p>
      <p class="text-xs uppercase tracking-widest text-foreground-subtle">powered by coffee ☕</p>
      <a
        href="#top"
        class="text-xs uppercase tracking-widest text-foreground-muted transition-colors hover:text-brand-secondary"
      >
        back to top
        <span aria-hidden="true" class="text-brand-primary">↑</span>
      </a>
    </div>
  </footer>
</template>
