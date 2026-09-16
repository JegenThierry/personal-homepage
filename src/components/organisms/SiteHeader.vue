<script setup lang="ts">
import NavMenu from '@/components/molecules/NavMenu.vue'
import ThemeToggle from '@/components/atoms/ThemeToggle.vue'
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 border-b border-dashed light:border-zinc-300 light:bg-zinc-50/85 backdrop-blur dark:border-zinc-700 dark:bg-zinc-950/85"
  >
    <div
      class="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8"
    >
      <a
        href="#top"
        class="text-sm font-bold uppercase tracking-widest light:text-zinc-950 transition-colors light:hover:text-rose-700 dark:text-white dark:hover:text-rose-100"
      >
        thierry<span class="light:text-indigo-600 dark:text-indigo-300">.</span>beer
      </a>

      <NavMenu class="hidden sm:flex" />

      <div class="flex items-center gap-4 sm:gap-5">
        <span class="text-xs font-bold uppercase tracking-widest text-zinc-500" aria-hidden="true">
          Luxemburg
        </span>
        <ThemeToggle />
      </div>
    </div>
  </header>
</template>
