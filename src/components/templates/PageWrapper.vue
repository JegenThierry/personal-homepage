<script setup lang="ts"></script>

<template>
  <div
    id="top"
    class="relative min-h-screen light:bg-zinc-50 light:text-zinc-950 antialiased selection:bg-indigo-700 selection:text-white dark:bg-zinc-950 dark:text-white"
  >
    <div
      aria-hidden="true"
      class="pointer-events-none absolute inset-0 z-0 bg-size-[20px_20px] light:bg-[linear-gradient(to_right,rgba(9,9,11,0.025)_1px,transparent_1px),linear-gradient(rgba(9,9,11,0.025)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(228,228,231,0.04)_1px,transparent_1px),linear-gradient(rgba(228,228,231,0.04)_1px,transparent_1px)]"
    />
    <div
      aria-hidden="true"
      class="pointer-events-none absolute inset-0 z-0 bg-size-[100%_4px] light:bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.015)_50%)] dark:bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.22)_50%)]"
    />
    <div
      aria-hidden="true"
      class="pointer-events-none absolute inset-x-0 top-0 z-0 mx-auto h-96 w-full max-w-6xl light:bg-[radial-gradient(ellipse_at_top,rgba(67,56,202,0.05),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(67,56,202,0.28),transparent_70%)]"
    />
    <div
      aria-hidden="true"
      class="pointer-events-none absolute inset-x-0 bottom-0 z-0 mx-auto h-96 w-full max-w-6xl light:bg-[radial-gradient(ellipse_at_bottom,rgba(99,102,241,0.04),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_bottom,rgba(99,102,241,0.18),transparent_70%)]"
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
