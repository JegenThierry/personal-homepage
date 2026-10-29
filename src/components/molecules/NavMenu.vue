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
      class="group flex items-baseline gap-1 text-xs uppercase tracking-widest text-foreground-muted transition-colors hover:text-foreground"
    >
      <span class="text-xs text-brand-primary">
        {{ item.number }}
      </span>
      <span class="hidden underline-offset-4 group-hover:underline md:inline">
        {{ item.label }}
      </span>
    </a>
  </nav>
</template>
