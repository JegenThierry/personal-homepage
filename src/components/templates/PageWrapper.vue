<script setup lang="ts"></script>

<template>
  <div
    id="top"
    class="relative min-h-screen bg-background text-foreground antialiased selection:bg-selection selection:text-selection-foreground"
  >
    <div class="relative z-10">
      <slot name="header" />
      <main class="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <slot />
      </main>
      <slot name="footer" />
    </div>
  </div>
</template>
