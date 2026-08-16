<template>
  <v-app class="app-container">
    <SiteHeader :active-view="view" @navigate="view = $event" />
    <v-main class="app-main">
      <component :is="view === 'home' ? HomePage : PricingPage" @navigate="view = $event" />
    </v-main>
    <SiteFooter />
  </v-app>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import HomePage from '@/components/HomePage.vue'
import PricingPage from '@/components/PricingPage.vue'
import SiteFooter from '@/components/SiteFooter.vue'
import SiteHeader from '@/components/SiteHeader.vue'

const view = ref<'home' | 'pricing'>('home')
</script>

<style scoped>
.app-container {
  background-color: var(--bg-dark-primary) !important;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-main {
  background-color: var(--bg-dark-primary) !important;
  flex: 1 0 auto;
  width: 100%;
}
</style>