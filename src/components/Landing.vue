<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" temporary app>
      <v-list nav>
        <v-list-item link href="#features" @click="drawer = false">
          <v-list-item-title>Features</v-list-item-title>
        </v-list-item>
        <v-list-item link href="#pricing" @click="drawer = false">
          <v-list-item-title>Pricing</v-list-item-title>
        </v-list-item>
        <v-list-item link href="#testimonials" @click="drawer = false">
          <v-list-item-title>Testimonials</v-list-item-title>
        </v-list-item>
        <v-list-item link href="#contact" @click="drawer = false">
          <v-list-item-title>Contact</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar flat color="transparent">
      <v-app-bar-nav-icon class="d-md-none" @click="drawer = !drawer" />
      <v-toolbar-title class="ms-2">Louttche</v-toolbar-title>
      <v-spacer />

      <!-- Desktop actions -->
      <div class="d-none d-md-flex align-center">
        <v-btn variant="text" href="#features">Features</v-btn>
        <v-btn variant="text" href="#pricing">Pricing</v-btn>
        <v-btn variant="text" href="#contact">Contact</v-btn>
        <v-btn color="primary" class="ms-4">Get Started</v-btn>
      </div>
    </v-app-bar>

    <v-main>
      <v-container class="fill-height container-max" fluid>
        <v-row align="center" justify="center" class="my-12">
          <v-col cols="12" md="6">
            <h1 class="display-2">Build beautiful apps fast</h1>
            <p class="subtitle-1">A modern Vue + Vuetify landing page template to showcase your product, features and pricing.</p>
            <v-btn color="primary" class="me-3" large>Get Started</v-btn>
            <v-btn variant="outlined" large>Learn More</v-btn>
            <v-row class="mt-8" align="center">
              <v-col cols="12" sm="4">
                <v-chip color="primary" text-color="white">Trusted by teams</v-chip>
              </v-col>
              <v-col cols="12" sm="8">
                <div class="d-flex align-center">
                  <v-avatar size="32" class="me-2"><v-img src="/assets/logo-placeholder.png" /></v-avatar>
                  <span class="caption">Acme, Maple, Nova</span>
                </div>
              </v-col>
            </v-row>
          </v-col>

          <v-col cols="12" md="6">
            <v-card elevation="6" class="pa-6">
              <!-- Placeholder hero image -->
              <v-img src="/assets/hero-placeholder.png" height="320" class="hero-media" cover />
            </v-card>
          </v-col>
        </v-row>

        <v-row id="features" class="my-12">
          <v-col cols="12">
            <Features />
          </v-col>
        </v-row>

        <v-row id="pricing" class="my-12">
          <v-col cols="12">
            <Pricing />
          </v-col>
        </v-row>

        <v-row id="testimonials" class="my-12">
          <v-col cols="12">
            <Testimonials />
          </v-col>
        </v-row>

        <v-row id="contact" class="my-12">
          <v-col cols="12">
            <v-card class="pa-6" outlined>
              <h3>Contact</h3>
              <p class="caption">Email us at hello@example.com or replace this with a contact form.</p>
            </v-card>
          </v-col>
        </v-row>

      </v-container>
    </v-main>

    <AppFooter />
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
import Features from './Features.vue'
import Pricing from './Pricing.vue'
import Testimonials from './Testimonials.vue'
import AppFooter from './Footer.vue'

const drawer = ref(false)
</script>
