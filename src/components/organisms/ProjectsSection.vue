<script setup lang="ts">
import SectionHeader from '@/components/molecules/SectionHeader.vue'
import ProjectCard from '@/components/molecules/ProjectCard.vue'
import type { Project } from '@/components/molecules/ProjectCard.vue'
import centsibleScreenshot from '@/assets/images/centsible.png'
import sunflowerScreenshot from '@/assets/images/sunflower.png'
import ytdlpScreenshot from '@/assets/images/yt-dlp-web.png'

const projects: Project[] = [
  {
    id: 'liquid',
    index: '01',
    name: 'liquid',
    tagline: 'Liquidity, self-hosted finance manager revamped',
    description:
      'Personal self-hosted tool for managing your liquidity. Liquidity tracking without tracking. Hold the liquor in your own hands. (work in progress)',
    tech: ['vue', 'kotlin', 'docker', 'self-hosted', 'tailwind'],
    period: '2026',
    links: [{ label: 'source', href: 'https://codeberg.org/thierryjegen/liquid' }],
  },
  {
    id: 'centsible',
    index: '02',
    name: 'centsible',
    tagline: 'Self-hosted finance manager',
    description:
      'Self-hosted tool for managing your finances. Keep track of your cents. Budgeting without handing your data to anyone.',
    tech: ['nuxt', 'kotlin', 'docker', 'self-hosted', 'nuxt-ui'],
    period: '2026',
    links: [
      { label: 'source', href: 'https://codeberg.org/thierryjegen/centsible' },
      { label: 'live', href: 'https://centsible.thierry.beer' },
    ],
    screenshot: centsibleScreenshot,
  },
  {
    id: 'yt-dlp-web',
    index: '03',
    name: 'yt-dlp-web',
    tagline: 'Web interface for yt-dlp',
    description:
      'A browser interface around the yt-dlp command-line tool. Paste a link, let the magic happen. (work in progress)',
    tech: ['vue', 'go', 'docker'],
    period: '2026',
    links: [{ label: 'source', href: 'https://codeberg.org/thierryjegen/yt-dlp-web' }],
    screenshot: ytdlpScreenshot,
  },
  {
    id: 'proton-authenticator-to-bitwarden',
    index: '04',
    name: 'proton-auth to bitwarden',
    tagline: 'Authenticator backup converter',
    description:
      'Converts a Proton Authenticator backup into a Bitwarden-compatible import file. Built for personal use, shared for anyone migrating.',
    tech: ['javascript', 'cli'],
    period: '2025',
    links: [
      {
        label: 'source',
        href: 'https://codeberg.org/thierryjegen/proton-authenticator-to-bitwarden',
      },
    ],
  },
  {
    id: 'playgrounds',
    index: '05',
    name: 'playgrounds',
    tagline: 'Small pages, made to smile',
    description:
      'A collection of small fun pages. Made to make people smile, when coffee runs out. (continually expanded)',
    tech: ['css', 'html', 'js', 'docker'],
    period: '2025',
    links: [
      { label: 'source', href: 'https://codeberg.org/thierryjegen/playgrounds' },
      { label: 'sunflower', href: 'https://sunflower.thierry.beer' },
      { label: 'flower', href: 'https://flower.thierry.beer' },
      { label: 'easter', href: 'https://easter.thierry.beer' },
      { label: 'birthday', href: 'https://birthday.thierry.beer' },
    ],
    screenshot: sunflowerScreenshot,
  },
]
</script>

<template>
  <section id="projects" class="scroll-mt-24 py-20">
    <SectionHeader number="02" label="selected projects" title="Caffeinated Results." />

    <div class="mt-14 flex flex-col gap-16 lg:gap-24">
      <ProjectCard
        v-for="(project, i) in projects"
        :key="project.id"
        :project="project"
        :flip="i % 2 === 1"
      />
    </div>

    <p class="mt-14 text-xs uppercase tracking-widest text-zinc-500">
      // more on
      <a
        href="https://codeberg.org/thierryjegen"
        target="_blank"
        rel="noopener noreferrer"
        class="light:text-zinc-600 underline-offset-4 transition-colors light:hover:text-rose-700 hover:underline dark:text-zinc-400 dark:hover:text-rose-200"
        >codeberg.org/thierryjegen</a
      >
    </p>
  </section>
</template>
