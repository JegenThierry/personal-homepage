<script setup lang="ts">
import TechTag from '@/components/atoms/TechTag.vue'

export interface SkillEntry {
  index: string
  title: string
  description: string
  keywords: string[]
}

defineProps<{
  skill: SkillEntry
}>()
</script>

<template>
  <div
    class="grid gap-3 border-b border-dashed light:border-zinc-300 py-6 sm:grid-cols-3 sm:gap-6 dark:border-zinc-700"
  >
    <span class="text-sm leading-7 light:text-indigo-600 dark:text-indigo-300">
      {{ skill.index }}
    </span>
    <h3 class="text-lg font-bold uppercase tracking-tight light:text-zinc-950 dark:text-white">
      {{ skill.title }}
    </h3>
    <div>
      <p class="text-sm leading-relaxed light:text-zinc-600 dark:text-zinc-400">
        {{ skill.description }}
      </p>
      <div class="mt-3 flex flex-wrap gap-2">
        <TechTag v-for="keyword in skill.keywords" :key="keyword" :label="keyword" />
      </div>
    </div>
  </div>
</template>
