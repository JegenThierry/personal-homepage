<script setup lang="ts">
const navItems = [
  { number: '01', label: 'profile', href: '#profile' },
  { number: '02', label: 'projects', href: '#projects' },
  { number: '03', label: 'stack', href: '#stack' },
  { number: '04', label: 'about', href: '#about' },
  { number: '05', label: 'contact', href: '#contact' },
]
</script>

<template>
  <nav aria-label="Sections" class="flex items-center gap-4 sm:gap-6">
    <a
      v-for="item in navItems"
      :key="item.number"
      :href="item.href"
      class="group flex items-baseline gap-1 text-xs uppercase tracking-widest light:text-zinc-600 transition-colors light:hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
    >
      <span class="text-xs light:text-indigo-600 dark:text-indigo-300">
        {{ item.number }}
      </span>
      <span class="hidden underline-offset-4 group-hover:underline md:inline">
        {{ item.label }}
      </span>
    </a>
  </nav>
</template>
