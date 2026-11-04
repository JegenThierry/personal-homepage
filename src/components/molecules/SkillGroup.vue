<script setup lang="ts">
import TechTag from '@/components/atoms/TechTag.vue'
import type { Skill } from '@/data/skills'

defineProps<{
  skill: Skill
}>()
</script>

<template>
  <div class="flex h-full flex-col gap-4">
    <div class="flex flex-col gap-1">
      <h3 class="font-display text-lg font-bold tracking-tight text-foreground">
        {{ skill.title }}
      </h3>
      <p class="text-sm leading-relaxed text-foreground-muted">
        {{ skill.description }}
      </p>
    </div>

    <div class="mt-auto flex flex-wrap gap-2 border-t border-dashed border-border pt-4">
      <TechTag v-for="keyword in skill.keywords" :key="keyword" :label="keyword" />
    </div>
  </div>
</template>
