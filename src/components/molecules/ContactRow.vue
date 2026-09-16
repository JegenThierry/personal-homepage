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
    class="group flex items-center justify-between gap-4 border-b border-dashed light:border-zinc-300 py-5 transition-colors last:border-b-0 light:hover:bg-white dark:border-zinc-700 dark:hover:bg-zinc-900"
  >
    <span class="flex items-baseline gap-4">
      <span class="w-24 shrink-0 text-xs uppercase tracking-widest text-zinc-500">
        {{ link.label }}
      </span>
      <span
        class="text-lg light:text-zinc-600 transition-colors light:group-hover:text-rose-700 sm:text-xl dark:text-zinc-400 dark:group-hover:text-rose-200"
      >
        {{ link.handle }}
      </span>
    </span>
    <span
      aria-hidden="true"
      class="light:text-zinc-400 transition-all group-hover:translate-x-1 light:group-hover:text-indigo-600 dark:text-zinc-700 dark:group-hover:text-indigo-500"
    >
      -&gt;
    </span>
  </a>
</template>
