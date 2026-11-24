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
    <div class="relative flex flex-col gap-3 p-5">
      <p class="text-mono-meta text-foreground-subtle">
        {{ title }}
      </p>
      <dl class="flex flex-col gap-2 font-mono text-sm">
        <div v-for="line in lines" :key="line.key" class="flex items-baseline gap-2">
          <dt class="shrink-0 text-brand-primary">
            <span aria-hidden="true">&gt; </span>{{ line.key }}:
          </dt>
          <dd class="uppercase tracking-wider text-foreground-muted">
            {{ line.value }}
          </dd>
        </div>
      </dl>
    </div>
  </CyberFrame>
</template>
