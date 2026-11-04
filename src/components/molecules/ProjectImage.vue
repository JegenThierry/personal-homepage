<script setup lang="ts">
import CyberFrame from '@/components/atoms/CyberFrame.vue'
import GridTexture from '@/components/atoms/GridTexture.vue'

defineProps<{
  projectImage?: string
  projectName: string
}>()
</script>

<template>
  <CyberFrame class="bg-surface-muted">
    <GridTexture />
    <div class="relative aspect-video overflow-hidden">
      <img
        v-if="projectImage"
        :src="projectImage"
        :alt="`Screenshot of ${projectName}`"
        loading="lazy"
        decoding="async"
        class="h-full w-full object-cover object-top grayscale transition duration-500 motion-safe:group-hover:scale-[1.02] group-hover:grayscale-0"
      />

      <div v-else class="flex h-full w-full items-center justify-center">
        <span class="font-mono text-xs uppercase tracking-widest text-foreground-subtle">
          no signal // screenshot pending
        </span>
      </div>
    </div>
  </CyberFrame>
</template>
