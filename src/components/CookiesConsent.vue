<script setup lang="ts">
import { ref, onMounted } from 'vue'

type CookiePrefs = {
  essential: boolean
  analytics: boolean
  marketing: boolean
}

const showBanner = ref(false)

const prefs = ref<CookiePrefs>({
  essential: true, // always true
  analytics: false,
  marketing: false,
})

onMounted(() => {
  const saved = localStorage.getItem('cookiePrefs')
  if (saved) {
    prefs.value = JSON.parse(saved)
  } else {
    showBanner.value = true
  }
})

const acceptAll = () => {
  prefs.value = {
    essential: true,
    analytics: true,
    marketing: true,
  }
  savePrefs()
}

const rejectAll = () => {
  prefs.value = {
    essential: true,
    analytics: false,
    marketing: false,
  }
  savePrefs()
}

const savePrefs = () => {
  localStorage.setItem('cookiePrefs', JSON.stringify(prefs.value))
  showBanner.value = false
}

localStorage.removeItem('cookiePrefs')
</script>

<template>
  <Teleport to="body">
    <div
      v-if="showBanner"
      class="fixed bottom-5 left-2 z-50 bg-white border border-gray-300 shadow-lg rounded-xl p-5 w-2/5 flex flex-col space-y-4"
    >
      <h2 class="text-lg font-bold text-gray-800">
        Cookie Preferences
      </h2>

      <p class="text-sm text-gray-600">
        We use cookies to enhance your experience. Manage your preferences below. Essential cookies are always enabled.
      </p>

      <!-- Categories -->
      <div class="space-y-2">
        <!-- Essential -->
        <div class="flex items-center justify-between border rounded-lg p-2">
          <div>
            <h3 class="font-semibold text-sm">Essential Cookies</h3>
            <p class="text-xs text-gray-500">Required for the website to function properly.</p>
          </div>
          <input type="checkbox" checked disabled />
        </div>

        <!-- Analytics -->
        <!-- <div class="flex items-center justify-between border rounded-lg p-2">
          <div>
            <h3 class="font-semibold text-sm">Analytics Cookies</h3>
            <p class="text-xs text-gray-500">Help us understand how visitors interact with the website.</p>
          </div>
          <input type="checkbox" v-model="prefs.analytics" />
        </div> -->

        <!-- Marketing -->
        <!-- <div class="flex items-center justify-between border rounded-lg p-2">
          <div>
            <h3 class="font-semibold text-sm">Marketing Cookies</h3>
            <p class="text-xs text-gray-500">Used to deliver relevant advertisements.</p>
          </div>
          <input type="checkbox" v-model="prefs.marketing" />
        </div> -->
      </div>

      <!-- Actions -->
      <div class="flex justify-end gap-2 mt-2">
        <button
          @click="rejectAll"
          class="border border-gray-300 px-3 py-1 rounded hover:bg-gray-100 text-sm"
        >
          Reject All
        </button>
        <button
          @click="acceptAll"
          class="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 text-sm"
        >
          Accept All
        </button>
      </div>
    </div>
  </Teleport>
</template>
