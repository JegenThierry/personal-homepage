<script setup lang="ts">
import SectionHeader from '@/components/molecules/SectionHeader.vue'
import { facts } from '@/data/facts'

const statement = 'From first coffee to final deploy'

const paragraphs = [
  'I am Thierry, a software developer from Luxembourg (living in Germany). Writing code pays my bills during the day and keeps me busy after hours. My passion lies in shaping beautiful experiences for people. I have a strong sense of privacy and ownership, which drives me to build and host my own services.',
  'Nearly all of my side projects revolve around one idea: owning your own data. I build what I need and publish it on GitHub for anyone to use. Everything is brewed with an overdose of caffeine.',
]
</script>

<template>
  <section id="about" class="scroll-mt-20 py-14 lg:py-16">
    <SectionHeader label="about" :title="statement" />

    <div class="mt-10 grid gap-8 lg:grid-cols-2 lg:gap-12">
      <div class="flex flex-col gap-5">
        <p
          v-for="(paragraph, i) in paragraphs"
          :key="i"
          class="max-w-2xl leading-relaxed text-foreground-muted"
        >
          {{ paragraph }}
        </p>
      </div>

      <dl class="border border-border bg-surface px-5 sm:px-6">
        <div
          v-for="fact in facts"
          :key="fact.label"
          class="flex items-baseline justify-between gap-4 border-b border-dashed border-border py-3 last:border-b-0"
        >
          <dt class="font-mono text-xs uppercase tracking-widest text-foreground-subtle">
            {{ fact.label }}
          </dt>
          <dd class="text-right font-mono text-xs uppercase tracking-widest text-foreground">
            {{ fact.value }}
          </dd>
        </div>
      </dl>
    </div>
  </section>
</template>
