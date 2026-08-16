<template>
  <div class="service-card pa-8 d-flex flex-column rounded-xl w-100 position-relative">
    <div class="d-flex justify-space-between align-center mb-6">
      <div>
        <h3 class="text-h5 font-weight-bold text-white mb-1">{{ service.title }}</h3>
        <span class="text-caption text-purple-light">Starting at</span>
        <div class="text-h4 font-weight-bold text-white mt-1">{{ service.base }}</div>
      </div>
    </div>

    <v-divider class="border-subtle mb-6" />

    <div class="mb-6 grow">
      <div class="text-subtitle-2 text-white font-weight-bold mb-4">Included</div>
      <div v-for="f in service.features" :key="f" class="flex flex-wrap items-center align-center gap-3 mb-3">
        <v-icon color="var(--status-green)" size="18">mdi-check-circle</v-icon>
        <span class="text-body-2 text-grey-lighten-2">{{ f }}</span>
      </div>
    </div>

    <v-divider class="border-subtle mb-6" />

    <div class="mb-8">
      <div class="text-subtitle-2 text-white font-weight-bold mb-3">Add-ons</div>
      <div v-for="a in service.addons" :key="a.name" class="addon-item mb-2">
        <v-checkbox
          dense
          color="var(--purple-accent-primary)"
          base-color="rgba(255, 255, 255, 0.4)"
          :model-value="selectedAddons.includes(a.name)"
          @update:modelValue="(val) => toggleAddon(a.name, !!val)"
          hide-details
        >
          <template #label>
            <span class="text-body-2 text-grey-lighten-2">
              {{ a.name }} <strong class="text-purple-light">({{ a.price }})</strong>
            </span>
          </template>
        </v-checkbox>
      </div>
    </div>

    <v-btn
      color="var(--purple-accent-primary)"
      size="large"
      rounded="lg"
      block
      class="text-none font-weight-bold text-white btn-glow mt-auto"
      @click="requestService"
    >
      Request this service
    </v-btn>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const props = defineProps<{ service: any }>()
const service = props.service

const selectedAddons = ref<string[]>([])

const emit = defineEmits<{ (e: 'request-service', payload: { id: string; title: string; addons: string[] }): void }>()

function requestService () {
  emit('request-service', {
    id: service.id,
    title: service.title,
    addons: selectedAddons.value
  })
}

function toggleAddon (name: string, checked: boolean) {
  if (checked) {
    if (!selectedAddons.value.includes(name)) selectedAddons.value.push(name)
  } else {
    selectedAddons.value = selectedAddons.value.filter(a => a !== name)
  }
}
</script>

<style scoped>
.service-card {
    width: 100%;
    background: var(--bg-dark-secondary);
    border: 1px solid var(--border-subtle);
    transition: transform 0.25s ease, border-color 0.25s ease;
}

.service-card:hover {
  transform: translateY(-4px);
  border-color: var(--border-badge);
}

.icon-avatar {
  width: 56px;
  height: 56px;
  background: var(--badge-bg);
  border: 1px solid var(--border-badge);
}

.text-purple-light {
  color: var(--purple-light-text);
}

.border-subtle {
  border-color: var(--border-subtle) !important;
}

.btn-glow {
  box-shadow: 0 4px 16px rgba(108, 43, 217, 0.4) !important;
}
</style>