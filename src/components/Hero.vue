<template>
  <section class="hero-wrapper px-4 py-16 py-md-24">
    <!-- Ambient Glow Effect -->
    <div class="ambient-glow"></div>

    <div class="hero-content mx-auto text-center position-relative z-index-1">
      <!-- Badge -->
      <div class="d-inline-flex align-center ga-2 px-4 py-2 mb-8 rounded-pill badge-glow mx-auto">
        <span class="status-dot"></span>
        <span class="text-body-2 font-weight-medium text-white">Available for new projects</span>
      </div>

      <!-- Headline -->
      <h1 class="hero-title text-white font-weight-bold mb-6">
        High-performance web & mobile apps that <span class="text-purple-gradient">grow your business</span>
      </h1>

      <!-- Subtitle -->
      <p class="hero-subtitle text-grey-lighten-2 mx-auto mb-10">
        Louttche Solutions builds fast, modern, and reliable platforms tailored to give your business or startup a strong competitive edge.
      </p>

      <!-- Action Buttons -->
      <div class="d-flex flex-sm-row flex-column align-center justify-center ga-4 ga-sm-6 mb-16">
        <v-btn
          color="var(--purple-accent-primary)"
          size="x-large"
          rounded="lg"
          elevation="4"
          class="text-none font-weight-bold px-8 text-white btn-glow"
          @click="$emit('navigate', 'pricing')"
        >
          View Pricing
          <v-icon icon="mdi-arrow-right" end></v-icon>
        </v-btn>
      </div>

      <!-- Highlights Footer -->
      <div class="stats-row border-top-subtle pt-8 mx-auto d-flex flex-sm-row flex align-center justify-center gap-8 ga-sm-12">
        <div class="text-center">
          <div class="text-h6 font-weight-bold text-white mb-1">100% Dedicated</div>
          <div class="text-caption text-grey-lighten-1">On-Time & Transparent Delivery</div>
        </div>

        <div class="stat-divider d-none d-sm-block"></div>

        <div class="text-center">
          <div class="text-h6 font-weight-bold text-white mb-1">Modern Stack</div>
          <div class="text-caption text-grey-lighten-1">Vue, Nuxt & Mobile Solutions</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
    defineEmits(['navigate'])
</script>

<style scoped>
.hero-wrapper {
  background: linear-gradient(180deg, var(--bg-dark-primary) 0%, var(--bg-dark-secondary) 50%, var(--bg-dark-tertiary) 100%);
  min-height: calc(100vh - 72px);
  
  /* Force full viewport breakout so parent containers can't restrict width or shift left */
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;

  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-content {
  max-width: 860px;
  width: 100%;
}

.hero-title {
  font-size: clamp(2.25rem, 5vw, 3.75rem);
  line-height: 1.15;
}

.hero-subtitle {
  font-size: clamp(1.05rem, 2vw, 1.25rem);
  line-height: 1.6;
  max-width: 640px;
}

.text-purple-gradient {
  background: linear-gradient(135deg, var(--purple-gradient-end) 0%, var(--purple-light-text) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.ambient-glow {
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(108, 43, 217, 0.35) 0%, transparent 70%);
  filter: blur(80px);
  pointer-events: none;
}

.badge-glow {
  background: var(--badge-bg);
  border: 1px solid var(--border-badge);
}

.status-dot {
  width: 8px;
  height: 8px;
  background-color: var(--status-green);
  border-radius: 50%;
  box-shadow: 0 0 10px var(--status-green);
}

.btn-glow {
  box-shadow: 0 4px 24px rgba(108, 43, 217, 0.5) !important;
}

.border-light {
  border-color: rgba(255, 255, 255, 0.25) !important;
}

.border-top-subtle {
  border-top: 1px solid var(--border-subtle);
}

.stat-divider {
  width: 1px;
  height: 36px;
  background-color: rgba(255, 255, 255, 0.2);
}

.stats-row {
  max-width: 620px;
}

.z-index-1 {
  z-index: 1;
}
</style>