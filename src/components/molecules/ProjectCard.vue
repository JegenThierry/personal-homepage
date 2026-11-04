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
  <article
    class="group grid items-center gap-6 border border-border bg-surface p-5 transition-shadow duration-300 motion-safe:hover:shadow-[var(--shadow-raised)] sm:p-6 lg:grid-cols-2 lg:gap-10 lg:p-8"
  >
    <ProjectImage
      :project-image="project?.screenshot"
      :project-name="project.name"
      :class="{ 'lg:order-2': flip }"
    />

    <div :class="{ 'lg:order-1': flip }" class="flex flex-col gap-4">
      <div class="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h3 class="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          {{ project.name }}
        </h3>
        <span class="font-mono text-xs uppercase tracking-widest text-foreground-subtle">
          {{ project.period }}
        </span>
      </div>

      <p class="font-mono text-xs uppercase tracking-[0.14em] text-brand-secondary">
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
