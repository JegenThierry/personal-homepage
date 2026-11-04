<script setup lang="ts">
import SectionHeader from '@/components/molecules/SectionHeader.vue'
import ProjectCard from '@/components/molecules/ProjectCard.vue'
import TextLink from '@/components/atoms/TextLink.vue'
import { projects } from '@/data/projects'
import { repository } from '@/data/repository'
</script>

<template>
  <section id="projects" class="scroll-mt-20 py-14 lg:py-16">
    <SectionHeader label="selected projects" title="Caffeinated results" />

    <div class="mt-10 flex flex-col gap-8 lg:gap-12">
      <ProjectCard
        v-for="(project, i) in projects"
        :key="project.id"
        :project="project"
        :flip="i % 2 === 1"
      />
    </div>

    <p class="mt-6 font-mono text-xs uppercase tracking-widest text-foreground-subtle">
      // more on
      <TextLink :href="repository.baseUrl" external tone="muted">
        {{ repository.base }}
      </TextLink>
    </p>
  </section>
</template>
