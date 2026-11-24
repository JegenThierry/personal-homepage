<script setup lang="ts">
import ProjectImage from '@/components/molecules/ProjectImage.vue'
import TechTag from '@/components/atoms/TechTag.vue'
import CyberLink from '@/components/atoms/CyberLink.vue'
import type { Project } from '@/data/projects'

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
      :class="{ 'lg:order-2': flip }"
    />

    <div :class="{ 'lg:order-1': flip }" class="flex flex-col gap-4">
      <div class="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h3 class="font-display text-xl font-bold tracking-tight text-foreground sm:text-2xl">
          {{ project.name }}
        </h3>
        <span class="text-mono-meta text-foreground-subtle">
          {{ project.period }}
        </span>
      </div>

      <p class="text-mono-tag text-brand-secondary">
        {{ project.tagline }}
      </p>
      <p class="max-w-xl leading-relaxed text-foreground-muted">
        {{ project.description }}
      </p>

      <div class="flex flex-wrap gap-2">
        <TechTag v-for="tag in project.stack" :key="tag" :label="tag" />
      </div>

      <div class="mt-2 flex flex-wrap gap-4 text-sm">
        <CyberLink v-for="link in project.links" :key="link.label" :href="link.href">
          {{ link.label }}
        </CyberLink>
      </div>
    </div>
  </article>
</template>
