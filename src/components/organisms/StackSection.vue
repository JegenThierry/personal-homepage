<script setup lang="ts">
import SectionHeader from '@/components/molecules/SectionHeader.vue'
import SkillRow from '@/components/molecules/SkillRow.vue'
import { skills } from '@/data/skills'
</script>

<template>
  <section id="stack" class="scroll-mt-24 py-20">
    <SectionHeader
      number="03"
      label="stack"
      title="The real stack is what powers the coffee machine."
      note="capabilities"
    />

    <div class="mt-10 border-t border-dashed border-border">
      <SkillRow v-for="skill in skills" :key="skill.index" :skill="skill" />
    </div>
  </section>
</template>
