<template>
  <v-app-bar flat class="app-header px-4 px-md-8" height="72">
    <!-- Logo as clickable home link (far left) -->
    <a
      href="#"
      class="d-flex align-center text-decoration-none logo-link"
      @click.prevent="$emit('navigate', 'home')"
    >
      <img
        :src="logoUrl"
        alt="Louttche Solutions Logo"
        class="nav-logo"
      />
    </a>

    <v-spacer></v-spacer>

    <!-- Navigation Items (far right) -->
    <div class="d-flex align-center ga-3">
      <v-btn
        variant="text"
        :class="['text-none font-weight-bold nav-nav-btn', { 'nav-active': activeView === 'home' }]"
        @click="$emit('navigate', 'home')"
      >
        Home
      </v-btn>

      <v-btn
        variant="text"
        :class="['text-none font-weight-bold nav-nav-btn', { 'nav-active': activeView === 'pricing' }]"
        @click="$emit('navigate', 'pricing')"
      >
        Pricing
      </v-btn>
<!-- 
      <v-btn
        icon
        variant="text"
        color="white"
        @click="$vuetify.theme.global.name = $vuetify.theme.global.current.dark ? 'light' : 'dark'"
      >
        <v-icon>mdi-theme-light-dark</v-icon>
      </v-btn> -->
    </div>
  </v-app-bar>
</template>

<script lang="ts" setup>
import logoUrl from '@/assets/logo.png'

defineProps<{
  activeView?: 'home' | 'pricing'
}>()

defineEmits(['navigate'])
</script>

<style scoped>
.app-header {
  background: var(--bg-dark-primary) !important;
  border-bottom: 1px solid var(--border-subtle);
}

.nav-logo {
  height: 40px;
  width: auto;
  object-fit: contain;
  display: block;
}

.logo-link {
  transition: opacity 0.2s ease;
}

.logo-link:hover {
  opacity: 0.85;
}

.nav-nav-btn {
  color: rgba(255, 255, 255, 0.7);
  transition: all 0.25s ease;
}

.nav-nav-btn:hover {
  color: #ffffff;
}

/* Active navigation state with complementary purple glow */
.nav-active {
  color: var(--purple-light-text) !important;
  background: var(--badge-bg) !important;
  border: 1px solid var(--border-badge);
  border-radius: 20px;
  box-shadow: 0 0 12px rgba(192, 132, 252, 0.2);
}
</style>