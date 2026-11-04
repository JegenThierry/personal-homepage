<script setup lang="ts">
import NavMenu from '@/components/molecules/NavMenu.vue'
import ThemeToggle from '@/components/atoms/ThemeToggle.vue'
</script>

<template>
  <header
    class="sticky top-0 z-50 border-b border-dashed border-border bg-background/85 backdrop-blur supports-backdrop-filter:bg-background/70"
  >
    <div
      class="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8"
    >
      <a
        href="#top"
        aria-label="thierry.beer — back to top"
        class="font-display text-sm font-bold tracking-tight text-foreground transition-colors hover:text-brand-secondary"
      >
        thierry<span class="text-brand-primary">.</span>beer
      </a>

      <NavMenu class="hidden sm:flex" />

      <ThemeToggle />
    </div>
  </header>
</template>
