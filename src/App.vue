<script setup lang="ts">
import { ref } from 'vue'
// import { RouterLink, RouterView } from 'vue-router'

import NavBar from '@/components/NavBar.vue'
import ChatBotWidget from '@/components/ChatBotWidget.vue'
import PrivacyModal from '@/components/PrivacyModal.vue'

import CookiesConsent from '@/components/CookiesConsent.vue'

const menuOpen = ref(false)
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}
</script>

<template>
 
  <NavBar />

 
   
  <router-view />

  <ChatBotWidget />

  <PrivacyModal />

  <!-- <CookiesConsent /> -->
   <CookiesConsent />



   
   

 

</template>


