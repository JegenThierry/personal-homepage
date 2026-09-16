<script setup lang="ts">
import CyberFrame from '@/components/atoms/CyberFrame.vue'

export interface ReadoutLine {
  key: string
  value: string
}

defineProps<{
  title: string
  lines: ReadoutLine[]
}>()
</script>

<template>
  <CyberFrame>
    <div class="flex flex-col gap-3 light:bg-white p-5 dark:bg-zinc-900">
      <p class="text-sm uppercase tracking-widest text-zinc-500">{{ title }}</p>
      <dl class="flex flex-col gap-2 font-mono">
        <div v-for="line in lines" :key="line.key" class="flex items-baseline gap-2 text-sm">
          <dt class="shrink-0 light:text-indigo-600 dark:text-indigo-300">&gt; {{ line.key }}:</dt>
          <dd class="uppercase tracking-widest light:text-zinc-600 dark:text-zinc-400">
            {{ line.value }}
          </dd>
        </div>
      </dl>
    </div>
  </CyberFrame>
</template>
