<script setup lang="ts">
const navItems = [
  { label: 'profile', href: '#profile' },
  { label: 'projects', href: '#projects' },
  { label: 'stack', href: '#stack' },
  { label: 'about', href: '#about' },
  { label: 'contact', href: '#contact' },
]
</script>

<template>
  <nav aria-label="Sections" class="flex items-center gap-4 sm:gap-6">
    <a
      v-for="item in navItems"
      :key="item.label"
      :href="item.href"
      class="font-mono text-xs tracking-widest text-foreground-muted underline decoration-transparent decoration-dashed underline-offset-4 transition-colors hover:text-foreground hover:decoration-border"
    >
      {{ item.label }}
    </a>
  </nav>
</template>
