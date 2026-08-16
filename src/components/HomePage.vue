<template>
  <div class="home-wrap">
    <!-- Hero Section -->
    <Hero @navigate="emit('navigate', $event)" />

    <!-- What We Build / Pricing Glimpse Section -->
    <section class="section-wrapper py-8 px-4 px-md-8">
      <PricingSummary @navigate="emit('navigate', $event)" />
    </section>

    <!-- Contact Section -->
    <section class="section-wrapper bg-tertiary py-16 px-4 px-md-8">
      <div class="content-container mx-auto flex justify-center">
        <ContactForm />
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import Hero from './Hero.vue'
import PricingSummary from './PricingSummary.vue'
import ContactForm from './ContactForm.vue'

const emit = defineEmits(['navigate'])
</script>

<style scoped>
.home-wrap {
  background: var(--bg-dark-primary);
  width: 100%;
}

.section-wrapper {
  width: 100%;
}

.bg-tertiary {
  background: var(--bg-dark-tertiary);
}

.content-container {
  max-width: 1200px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}
</style>