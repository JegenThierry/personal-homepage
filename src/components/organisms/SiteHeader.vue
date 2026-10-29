<script setup lang="ts">
import NavMenu from '@/components/molecules/NavMenu.vue'
import ThemeToggle from '@/components/atoms/ThemeToggle.vue'
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 border-b border-dashed border-border bg-background/85 backdrop-blur"
  >
    <div
      class="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8"
    >
      <a
        href="#top"
        class="text-sm font-bold uppercase tracking-widest text-foreground transition-colors hover:text-brand-secondary"
      >
        thierry<span class="text-brand-primary">.</span>beer
      </a>

      <NavMenu class="hidden sm:flex" />

      <div class="flex items-center gap-4 sm:gap-5">
        <span
          class="text-xs font-bold uppercase tracking-widest text-foreground-subtle"
          aria-hidden="true"
        >
          Luxemburg
        </span>
        <ThemeToggle />
      </div>
    </div>
  </header>
</template>
