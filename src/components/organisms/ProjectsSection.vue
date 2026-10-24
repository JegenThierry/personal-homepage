<script setup lang="ts">
import SectionHeader from "@/components/molecules/SectionHeader.vue";
import ProjectCard from "@/components/molecules/ProjectCard.vue";
import { projects } from "@/data/projects";
import { repository } from "@/data/repository";
</script>

<template>
  <section id="projects" class="scroll-mt-24 py-20">
    <SectionHeader number="02" label="selected projects" title="Caffeinated Results." />

    <div class="mt-14 flex flex-col gap-16 lg:gap-24">
      <ProjectCard
        v-for="(project, i) in projects"
        :key="project.id"
        :project="project"
        :flip="i % 2 === 1"
      />
    </div>

    <p class="mt-14 text-xs uppercase tracking-widest text-zinc-500">
      // more on
      <a
        :href="repository.baseUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="light:text-zinc-600 underline-offset-4 transition-colors light:hover:text-rose-700 hover:underline dark:text-zinc-400 dark:hover:text-rose-200"
        >codeberg.org/thierryjegen</a
      >
    </p>
  </section>
</template>
