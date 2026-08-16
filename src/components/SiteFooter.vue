<template>
  <footer class="app-footer py-12 px-4">
    <div class="footer-container mx-auto">
      <v-row align="center" justify="space-between" class="gy-6">
        <v-col cols="12" md="6">
          <div class="text-h6 font-weight-bold text-white mb-1">Louttche Solutions</div>
          <div class="text-body-2 text-grey-lighten-1 mb-4">
            Modern web platforms: landing pages, blogs, e-commerce.
          </div>
          <div class="d-flex align-center ga-2">
            <v-btn icon variant="tonal" color="white" class="social-btn">
              <v-icon>mdi-github</v-icon>
            </v-btn>
            <v-btn icon variant="tonal" color="white" class="social-btn">
              <v-icon>mdi-linkedin</v-icon>
            </v-btn>
          </div>
        </v-col>

        <v-col cols="12" md="6" class="text-md-right">
          <div class="text-body-2 text-white font-weight-medium">
            © {{ new Date().getFullYear() }} Louttche Solutions
          </div>
          <div class="text-caption text-grey-lighten-1 mt-1">
            Built with care — performance & accessibility focused.
          </div>
        </v-col>
      </v-row>
    </div>
  </footer>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.app-footer {
  background: var(--bg-dark-tertiary);
  border-top: 1px solid var(--border-subtle);
}

.footer-container {
  max-width: 1280px;
}

.social-btn {
  background: var(--badge-bg) !important;
  border: 1px solid var(--border-badge);
}
</style>