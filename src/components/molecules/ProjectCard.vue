<script setup lang="ts">
import ProjectImage from '@/components/molecules/ProjectImage.vue'
import TechTag from '@/components/atoms/TechTag.vue'
import CyberLink from '@/components/atoms/CyberLink.vue'
import type { Project } from '@/data/projects';

withDefaults(
  defineProps<{
    project: Project
    flip?: boolean
  }>(),
  { flip: false },
)
</script>

<template>
  <article class="group grid items-center gap-6 lg:grid-cols-2 lg:gap-10">
    <ProjectImage
      :project-image="project?.screenshot"
      :project-name="project.name"
      :project-number="project.index"
      :class="{ 'lg:order-2': flip }"
    />

    <div :class="{ 'lg:order-1': flip }" class="flex flex-col gap-4">
      <div class="flex items-baseline gap-3">
        <span class="text-xs light:text-indigo-600 dark:text-indigo-300">
          {{ project.index }}
        </span>
        <h3
          class="text-2xl font-bold uppercase tracking-tight light:text-zinc-950 sm:text-3xl dark:text-white"
        >
          {{ project.name }}
        </h3>
        <span class="text-xs uppercase tracking-widest text-zinc-500">
          {{ project.period }}
        </span>
      </div>

      <p class="text-sm uppercase tracking-widest light:text-rose-700 dark:text-rose-200">
        {{ project.tagline }}
      </p>
      <p class="max-w-xl leading-relaxed light:text-zinc-600 dark:text-zinc-400">
        {{ project.description }}
      </p>

      <div class="flex flex-wrap gap-2">
        <TechTag v-for="tag in project.stack" :key="tag" :label="tag" />
      </div>

      <div class="mt-2 flex flex-wrap gap-4 text-sm">
        <CyberLink v-for="link in project.links" :key="link.label" :href="link.href" external>
          {{ link.label }}
        </CyberLink>
      </div>
    </div>
  </article>
</template>
