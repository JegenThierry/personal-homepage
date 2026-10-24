<script setup lang="ts">
import CyberFrame from '@/components/atoms/CyberFrame.vue'

defineProps<{
  projectImage?: string
  projectName: string
  projectNumber: number
}>()
</script>

<template>
  <CyberFrame>
    <div class="relative overflow-hidden light:bg-white dark:bg-zinc-900">
      <img
        v-if="projectImage"
        :src="projectImage"
        :alt="`Screenshot of ${projectName}`"
        loading="lazy"
        class="aspect-video w-full object-cover grayscale transition duration-300 group-hover:grayscale-0"
      />

      <div v-else class="relative flex aspect-video items-center justify-center">
        <div aria-hidden="true" class="absolute inset-0 light:bg-zinc-100/60 dark:bg-zinc-800/50" />
        <div class="relative flex flex-col items-center gap-3 text-center">
          <span class="text-5xl font-bold light:text-zinc-300 dark:text-zinc-700">
            {{ projectNumber }}
          </span>

          <span class="text-xs uppercase tracking-widest text-zinc-500">
            no signal // screenshot pending
          </span>
        </div>
      </div>
    </div>
  </CyberFrame>
</template>

<style scoped></style>
