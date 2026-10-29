<script setup lang="ts">
import SectionTag from '@/components/atoms/SectionTag.vue'
import SectionDivider from '@/components/atoms/SectionDivider.vue'

defineProps<{
  number: string
  label: string
  title: string
}>()
</script>

<template>
  <div class="flex flex-col gap-6">
    <SectionTag :number="number" :label="label" />
    <h2
      class="max-w-3xl text-3xl font-bold uppercase leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl"
    >
      {{ title }}
    </h2>
    <SectionDivider />
  </div>
</template>
