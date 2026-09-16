<script setup lang="ts">
import SectionHeader from '@/components/molecules/SectionHeader.vue'
import SkillRow from '@/components/molecules/SkillRow.vue'
import type { SkillEntry } from '@/components/molecules/SkillRow.vue'

const skills: SkillEntry[] = [
  {
    index: '01',
    title: 'Frontend',
    description: 'Making things look like crema on a coffee.',
    keywords: ['vue', 'react', 'typescript', 'tailwind'],
  },
  {
    index: '02',
    title: 'Backend',
    description: 'Services and logic that keep the coffee machine running.',
    keywords: ['kotlin', 'java', 'c#', 'go'],
  },
  {
    index: '03',
    title: 'Self-hosting',
    description: 'Why buy your coffee when you can own your own coffee machine. Privacy first.',
    keywords: ['docker', 'linux', 'self-hosting'],
  },
]
</script>

<template>
  <section id="stack" class="scroll-mt-24 py-20">
    <SectionHeader
      number="03"
      label="stack"
      title="The real stack is what powers the coffee machine."
      note="capabilities"
    />

    <div class="mt-10 border-t border-dashed light:border-zinc-300 dark:border-zinc-700">
      <SkillRow v-for="skill in skills" :key="skill.index" :skill="skill" />
    </div>
  </section>
</template>
