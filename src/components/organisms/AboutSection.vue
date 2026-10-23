<script setup lang="ts">
import SectionHeader from '@/components/molecules/SectionHeader.vue'

const statement = 'From first coffee to final deploy.'

const paragraphs = [
  'I am Thierry, a software developer from Luxembourg (living in Germany). Writing code pays my bills during the day and keeps me busy after hours. My passion lies in shaping beautiful experiences for people. I have a strong sense of privacy and ownership, which drives me to build and host my own services.',
  'Nearly all of my side projects revolve around one idea: owning your own data. I build what I need and publish it on Codeberg for anyone who wants applications and tools focused on privacy. Everything is brewed with an overdose of caffeine.',
]

const facts = [
  { label: 'base', value: 'Luxembourg' },
  { label: 'languages', value: 'lu, de, fr, en' },
  { label: 'focus', value: 'web, tools, self-hosted' },
  { label: 'experience', value: '5+ years' },
  { label: 'fuel', value: 'coffee ☕' },
  { label: 'source', value: 'github.com/JegenThierry' },
]
</script>

<template>
  <section id="about" class="scroll-mt-24 py-20">
    <SectionHeader number="04" label="about" :title="statement" note="cv // short form" />

    <div class="mt-10 grid gap-10 lg:grid-cols-2">
      <div class="flex flex-col gap-5">
        <p
          v-for="(paragraph, i) in paragraphs"
          :key="i"
          class="max-w-2xl leading-relaxed light:text-zinc-600 dark:text-zinc-400"
        >
          {{ paragraph }}
        </p>
      </div>

      <dl class="flex flex-col">
        <div
          v-for="fact in facts"
          :key="fact.label"
          class="flex items-baseline justify-between gap-4 border-b border-dashed light:border-zinc-300 py-3 last:border-b-0 dark:border-zinc-700"
        >
          <dt class="text-xs uppercase tracking-widest text-zinc-500">{{ fact.label }}</dt>
          <dd class="text-sm uppercase tracking-widest light:text-zinc-600 dark:text-zinc-400">
            {{ fact.value }}
          </dd>
        </div>
      </dl>
    </div>
  </section>
</template>
