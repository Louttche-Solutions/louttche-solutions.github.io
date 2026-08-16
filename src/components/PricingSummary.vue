<template>
  <div class="pricing-summary-wrap py-12 px-4 px-md-8">
    <div class="summary-container mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <h2 class="text-h3 font-weight-bold text-white mb-3">What We Build</h2>
        <p class="text-subtitle-1 text-grey-lighten-1 max-width-p mx-auto mb-0">
          {{ description }}
        </p>
      </div>

      <!-- Plan Cards Grid -->
      <v-row class="ma-0 ga-6 justify-center">
        <v-col
          v-for="plan in plans"
          :key="plan.name"
          cols="12"
          sm="10"
          md="4"
          class="pa-0 d-flex"
        >
          <div class="summary-card pa-8 d-flex flex-column rounded-xl w-100">
            <div class="d-flex justify-space-between align-start mb-6">
              <div>
                <h3 class="text-h5 font-weight-bold text-white mb-1">{{ plan.name }}</h3>
                <div class="text-caption text-grey-lighten-1">{{ plan.tagline }}</div>
              </div>
              <div class="text-right">
                <span class="price-chip px-3 py-1 rounded-pill text-subtitle-2 font-weight-bold text-white">
                  {{ plan.price }}
                </span>
                <div class="text-caption text-grey-lighten-1 mt-1">{{ plan.frequency }}</div>
              </div>
            </div>

            <v-divider class="border-subtle mb-6" />

            <div class="features-list grow mb-6">
              <div v-for="f in plan.features" :key="f" class="flex flex-wrap items-center align-center gap-3 mb-3">
                <v-icon color="var(--status-green)" size="18" >mdi-check-circle</v-icon>
                <div class="text-body-2 text-grey-lighten-2">{{ f }}</div>
              </div>
            </div>

            <div class="border-top-subtle pt-4 mt-auto">
              <div class="text-caption text-purple-light">Typical delivery: {{ plan.delivery }}</div>
            </div>
          </div>
        </v-col>
      </v-row>

      <!-- Action Button -->
      <div class="text-center mt-12">
        <v-btn
          color="var(--purple-accent-primary)"
          size="x-large"
          rounded="lg"
          class="text-none font-weight-bold text-white btn-glow px-8"
          @click="$emit('navigate', 'pricing')"
        >
          View More Details & Add-ons
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineEmits(['navigate'])

const description =
  "We deliver tailored landing pages, content-driven blogs, and robust e-commerce platforms. Below is a quick overview — see full details on the Pricing page."

const plans = [
  {
    name: 'Starter',
    tagline: 'Landing page',
    price: '€75',
    frequency: 'one-time',
    features: ['Responsive layout', 'Basic SEO', 'Contact form'],
    delivery: '3-5 days'
  },
  {
    name: 'Pro',
    tagline: 'Blog platforms',
    price: '€120',
    frequency: 'one-time',
    features: ['CMS setup', 'SEO optimizations', 'Social sharing'],
    delivery: '1-2 weeks'
  },
  {
    name: 'Business',
    tagline: 'Retail or E-commerce stores',
    price: '€220',
    frequency: 'one-time',
    features: ['Product catalog', 'Orders & Payments', 'Appointment Scheduling'],
    delivery: 'Depends on scope'
  }
]
</script>

<style scoped>
.pricing-summary-wrap {
  width: 100%;
}

.summary-container {
  max-width: 1200px;
  width: 100%;
}

.max-width-p {
  max-width: 720px;
  line-height: 1.6;
}

.summary-card {
    width: 100%;
    background: var(--bg-dark-secondary);
    border: 1px solid var(--border-subtle);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.price-chip {
  background: var(--purple-accent-primary);
  display: inline-block;
}

.text-purple-light {
  color: var(--purple-light-text);
}

.border-subtle {
  border-color: var(--border-subtle) !important;
}

.border-top-subtle {
  border-top: 1px solid var(--border-subtle);
}

.btn-glow {
  box-shadow: 0 4px 20px rgba(108, 43, 217, 0.4) !important;
}
</style>