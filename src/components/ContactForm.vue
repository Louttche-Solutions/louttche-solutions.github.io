<template>
  <div class="contact-section py-16 px-4 px-md-8">
    <div class="section-container mx-auto">
      <div class="contact-card pa-8 pa-md-12 rounded-xl mx-auto">
        <h3 class="text-h4 font-weight-bold text-white mb-2">Contact Us</h3>
        <p class="text-subtitle-1 text-grey-lighten-1 mb-8">
          Have a project in mind? Let’s build something great together.
        </p>

        <form @submit.prevent="submit">
          <v-row class="g-4">
            <v-col cols="12" md="6">
              <v-text-field
                v-model="form.name"
                label="Name"
                variant="outlined"
                color="var(--purple-light-text)"
                base-color="rgba(255, 255, 255, 0.4)"
                density="comfortable"
                required
              />
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="form.email"
                label="Email"
                type="email"
                variant="outlined"
                color="var(--purple-light-text)"
                base-color="rgba(255, 255, 255, 0.4)"
                density="comfortable"
                required
              />
            </v-col>
            <v-col cols="12">
              <v-textarea
                v-model="form.message"
                label="Message"
                rows="5"
                variant="outlined"
                color="var(--purple-light-text)"
                base-color="rgba(255, 255, 255, 0.4)"
                density="comfortable"
                required
              />
            </v-col>

            <input
              v-model="form.website"
              name="website"
              autocomplete="off"
              tabindex="-1"
              style="position:absolute; left:-9999px"
            />

            <v-col cols="12" class="d-flex flex-sm-row flex-column justify-space-between align-center ga-4">
              <div>
                <div v-if="status" class="text-success font-weight-medium d-flex align-center ga-2">
                  <v-icon icon="mdi-check-circle" color="green-accent-3"></v-icon>
                  {{ status }}
                </div>
                <div v-if="error" class="text-error font-weight-medium d-flex align-center ga-2">
                  <v-icon icon="mdi-alert-circle" color="error"></v-icon>
                  {{ error }}
                </div>
              </div>

              <v-btn
                :loading="sending"
                type="submit"
                color="var(--purple-accent-primary)"
                size="large"
                rounded="lg"
                class="text-none font-weight-bold text-white btn-glow px-8"
              >
                Send Message
                <v-icon icon="mdi-send" end></v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

const form = reactive({ name: '', email: '', message: '', website: '' })
const status = ref('')
const error = ref('')
const sending = ref(false)

const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT || ''
const fallbackEmail = import.meta.env.VITE_CONTACT_EMAIL || ''

async function submit () {
  status.value = ''
  error.value = ''

  if (form.website) {
    error.value = 'Bot detected.'
    return
  }

  const payload = {
    name: form.name,
    email: form.email,
    message: form.message
  }

  try {
    sending.value = true
    if (endpoint) {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })

      if (!res.ok) {
        const txt = await res.text()
        throw new Error(txt || 'Submission failed')
      }
      status.value = 'Message sent — thank you!'
      form.name = form.email = form.message = ''
    } else if (fallbackEmail) {
      const subject = encodeURIComponent('Website contact: ' + form.name)
      const body = encodeURIComponent(form.message + '\n\nFrom: ' + form.email)
      window.location.href = `mailto:${fallbackEmail}?subject=${subject}&body=${body}`
      status.value = 'Opening mail client...'
    } else {
      throw new Error('No contact endpoint configured. Set VITE_CONTACT_ENDPOINT or VITE_CONTACT_EMAIL')
    }
  } catch (err: any) {
    error.value = err.message || String(err)
  } finally {
    sending.value = false
  }
}
</script>

<style scoped>
.contact-section {
  background: var(--bg-dark-tertiary);
  width: 100%;
}

.section-container {
    max-width: 1200px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
}

.contact-card {
  background: var(--bg-dark-secondary);
  border: 1px solid var(--border-subtle);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  margin: 0 auto;
  display: block;
  box-sizing: border-box;
  width: 100%;
  max-width: 880px;
}

@media (max-width: 720px) {
  .contact-card {
    min-width: auto;
    padding-left: 16px;
    padding-right: 16px;
  }
}

/* Apply a comfortable minimum width only on larger viewports so we don't force overflow on tablets/phones */
@media (min-width: 1000px) {
  .contact-card {
    min-width: 880px;
  }
}

.btn-glow {
  box-shadow: 0 4px 20px rgba(108, 43, 217, 0.4) !important;
}
</style>