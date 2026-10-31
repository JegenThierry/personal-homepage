<script setup lang="ts">
import TechTag from '@/components/atoms/TechTag.vue'
import type { Skill } from '@/data/skills'

defineProps<{
  skill: Skill
}>()
</script>

<template>
  <div class="grid gap-3 border-b border-dashed border-border py-6 sm:grid-cols-3 sm:gap-6">
    <span class="text-sm leading-7 text-brand-primary">
      {{ skill.index }}
    </span>
    <h3 class="text-lg font-bold uppercase tracking-tight text-foreground">
      {{ skill.title }}
    </h3>
    <div>
      <p class="text-sm leading-relaxed text-foreground-muted">
        {{ skill.description }}
      </p>
      <div class="mt-3 flex flex-wrap gap-2">
        <TechTag v-for="keyword in skill.keywords" :key="keyword" :label="keyword" />
      </div>
    </div>
  </div>
</template>
