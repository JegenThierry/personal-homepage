<script setup lang="ts"></script>

<template>
  <div
    id="top"
    class="relative min-h-screen bg-background text-foreground antialiased selection:bg-selection selection:text-selection-foreground"
  >
    <div
      aria-hidden="true"
      class="pointer-events-none absolute inset-0 z-0 bg-size-[20px_20px] bg-[linear-gradient(to_right,var(--color-grid)_1px,transparent_1px),linear-gradient(var(--color-grid)_1px,transparent_1px)]"
    />
    <div
      aria-hidden="true"
      class="pointer-events-none absolute inset-0 z-0 bg-size-[100%_4px] bg-[linear-gradient(transparent_50%,var(--color-scanline)_50%)]"
    />
    <div
      aria-hidden="true"
      class="pointer-events-none absolute inset-x-0 top-0 z-0 mx-auto h-96 w-full max-w-6xl bg-[radial-gradient(ellipse_at_top,var(--color-glow-top),transparent_70%)]"
    />
    <div
      aria-hidden="true"
      class="pointer-events-none absolute inset-x-0 bottom-0 z-0 mx-auto h-96 w-full max-w-6xl bg-[radial-gradient(ellipse_at_bottom,var(--color-glow-bottom),transparent_70%)]"
    />

    <div class="relative z-10">
      <slot name="header" />
      <main class="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <slot />
      </main>
      <slot name="footer" />
    </div>
  </div>
</template>
