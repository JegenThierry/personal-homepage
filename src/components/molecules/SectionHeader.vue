<script setup lang="ts">
import SectionTag from '@/components/atoms/SectionTag.vue'
import SectionDivider from '@/components/atoms/SectionDivider.vue'

defineProps<{
  label: string
  title: string
  divider?: boolean
}>()
</script>

<template>
  <div class="flex flex-col gap-5">
    <SectionTag :label="label" />
    <h2
      class="max-w-3xl font-display text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]"
    >
      {{ title }}
    </h2>
    <SectionDivider v-if="divider !== false" />
  </div>
</template>
