<template>
  <div class="pricing-page-wrapper py-12 px-4 px-md-8">
    <div class="page-container mx-auto">
      <div class="text-center mb-12">
        <h1 class="text-h3 font-weight-bold text-white mb-3">Services & Pricing</h1>
        <p class="text-subtitle-1 text-grey-lighten-1">
          Tailored solutions designed for performance and scale.
        </p>
      </div>

      <v-row class="g-6">
        <v-col cols="12" md="4" v-for="s in services" :key="s.id" class="d-flex">
          <ServiceCard :service="s" @request-service="onRequestService" />
        </v-col>
      </v-row>

      <div class="notes-card mt-12 pa-8 rounded-xl">
        <div class="d-flex align-center ga-3 mb-2">
          <v-icon color="var(--purple-light-text)">mdi-information-outline</v-icon>
          <h3 class="text-h6 font-weight-bold text-white">Pricing Notes</h3>
        </div>
        <p class="text-body-2 text-grey-lighten-1 mb-0">
          All prices are starting points. Final quotes depend on scope, integrations, and custom design needs. Add-ons are optional and billed separately.
        </p>
      </div>

      <v-snackbar
        v-model="snackbar"
        timeout="4000"
        color="var(--purple-accent-primary)"
        rounded="lg"
        elevation="8"
      >
        <span class="text-white font-weight-medium">{{ snackbarText }}</span>
      </v-snackbar>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import ServiceCard from './ServiceCard.vue'

const services = reactive([
  {
    id: 'landing',
    title: 'Landing Page',
    base: '€75',
    features: ['Responsive design', 'CTA integration', 'SEO basics', 'Contact form'],
    addons: [{ name: 'Accessibility (WCAG)', price: '+€20' }, { name: 'Extra pages', price: '+€15/page' }]
  },
  {
    id: 'blog',
    title: 'Blog',
    base: '€120',
    features: ['CMS setup', 'Markdown support', 'SEO optimizations', 'Social sharing'],
    addons: [{ name: 'Accessibility (WCAG)', price: '+€50' }, { name: 'Authentication', price: '+€50' }, { name: 'Advanced SEO', price: '+€35' }]
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce',
    base: '€220',
    features: ['Product catalog', 'Payments', 'Shipping', 'Orders dashboard'],
    addons: [{ name: 'Accessibility (WCAG)', price: '+€80' }, { name: 'Multiple currencies', price: '+€20' }]
  }
])

const snackbar = ref(false)
const snackbarText = ref('')

function onRequestService (payload: any) {
  snackbarText.value = `Requested ${payload.title} with ${payload.addons.length} add-on(s)`
  snackbar.value = true
}
</script>

<style scoped>
.pricing-page-wrapper {
  background: var(--bg-dark-primary);
  width: 100%;
  min-height: 100%;
}

.page-container {
  max-width: 1200px;
  width: 100%;
}

.notes-card {
  background: var(--bg-dark-secondary);
  border: 1px solid var(--border-subtle);
}
</style>