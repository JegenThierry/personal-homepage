<script setup lang="ts"></script>

<template>
  <div
    id="top"
    class="relative min-h-screen bg-background text-foreground antialiased selection:bg-selection selection:text-selection-foreground"
  >
    <a
      href="#content"
      class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:border focus:border-border focus:bg-surface-raised focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-foreground"
    >
      Skip to content
    </a>

    <div class="relative z-10">
      <slot name="header" />
      <main
        id="content"
        tabindex="-1"
        class="mx-auto w-full max-w-6xl px-4 focus:outline-none sm:px-6 lg:px-8"
      >
        <slot />
      </main>
      <slot name="footer" />
    </div>
  </div>
</template>
