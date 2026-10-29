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
    <div class="flex flex-col gap-3 bg-surface p-5">
      <p class="text-sm uppercase tracking-widest text-foreground-subtle">{{ title }}</p>
      <dl class="flex flex-col gap-2 font-mono">
        <div v-for="line in lines" :key="line.key" class="flex items-baseline gap-2 text-sm">
          <dt class="shrink-0 text-brand-primary">&gt; {{ line.key }}:</dt>
          <dd class="uppercase tracking-widest text-foreground-muted">
            {{ line.value }}
          </dd>
        </div>
      </dl>
    </div>
  </CyberFrame>
</template>
