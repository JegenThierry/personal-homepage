<script setup lang="ts">
import SectionHeader from '@/components/molecules/SectionHeader.vue'
import SkillGroup from '@/components/molecules/SkillGroup.vue'
import { skills } from '@/data/skills'
</script>

<template>
  <section id="stack" class="scroll-mt-20 py-14 lg:py-16">
    <SectionHeader label="stack" title="What powers the coffee machine" />
    <div class="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
      <SkillGroup v-for="skill in skills" :key="skill.title" :skill="skill" />
    </div>
  </section>
</template>
