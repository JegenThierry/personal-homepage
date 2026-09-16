<script setup lang="ts">
import { site } from '@/data/site'
</script>

<template>
  <footer class="border-t border-dashed light:border-zinc-300 dark:border-zinc-700">
    <div
      class="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-8 sm:px-6 lg:px-8"
    >
      <p class="text-xs uppercase tracking-widest text-zinc-500">© 2026 {{ site.domain }}</p>
      <p class="text-xs uppercase tracking-widest text-zinc-500">powered by coffee ☕</p>
      <a
        href="#top"
        class="text-xs uppercase tracking-widest light:text-zinc-600 transition-colors light:hover:text-rose-600 dark:text-zinc-400 dark:hover:text-rose-200"
      >
        back to top
        <span aria-hidden="true" class="light:text-indigo-600 dark:text-indigo-500">↑</span>
      </a>
    </div>
  </footer>
</template>
