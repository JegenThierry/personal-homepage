<script setup lang="ts">
import CyberFrame from '@/components/atoms/CyberFrame.vue'
import GridTexture from '@/components/atoms/GridTexture.vue'

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
  <CyberFrame class="bg-surface-raised">
    <GridTexture />
    <div class="relative flex flex-col gap-3 p-5">
      <p class="font-mono text-xs uppercase tracking-[0.14em] text-foreground-subtle">
        {{ title }}
      </p>
      <dl class="flex flex-col gap-2 font-mono text-sm">
        <div v-for="line in lines" :key="line.key" class="flex items-baseline gap-2">
          <dt class="shrink-0 text-brand-primary">
            <span aria-hidden="true">&gt; </span>{{ line.key }}:
          </dt>
          <dd class="uppercase tracking-widest text-foreground-muted">
            {{ line.value }}
          </dd>
        </div>
      </dl>
    </div>
  </CyberFrame>
</template>
