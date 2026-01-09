<script setup lang="ts">
</script>

<template>
  <!-- Leadership Banner -->
  <section class="w-full max-w-7xl mx-auto mt-6 rounded-2xl overflow-hidden shadow-lg">
    <div class="relative w-full h-64 sm:h-80 md:h-96 overflow-hidden">
      <img 
        src="@/assets/leadershipbanner.png" 
        alt="About Banner" 
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black/50"></div>
      <h3 class="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-10 md:left-10 text-white font-bold text-2xl sm:text-3xl md:text-5xl z-10">
        Leadership
      </h3>
    </div>
  </section>

  <!-- Toggle Buttons -->
  <div class="flex justify-center mt-8 sm:mt-14 px-4">
    <div class="flex bg-gray-100 rounded-full p-1 shadow-sm border border-gray-200 flex-wrap gap-2">
      <button class="px-6 sm:px-8 py-2 text-sm font-semibold rounded-full bg-white shadow-sm text-gray-800">
        Management Team
      </button>
      <button class="px-6 sm:px-8 py-2 text-sm font-semibold rounded-full text-gray-600 hover:text-gray-800 transition">
        Board of Directors
      </button>
    </div>
  </div>

  <!-- Leadership Grid -->
  <div class="max-w-7xl mx-auto mt-8 sm:mt-12 mb-16 px-4 sm:px-6">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
      <div
        v-for="i in 9"
        :key="i"
        class="flex bg-[#f8fafc] rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
      >
        <img
          src="@/assets/aboutUsimage4.jpg"
          alt="Leader"
          class="w-24 sm:w-28 h-full object-cover"
        />
        <div class="p-3 sm:p-5 flex flex-col justify-center">
          <h4 class="font-bold text-gray-800 text-sm sm:text-base">
            Chief Dave Obasi
          </h4>
          <p class="text-[9px] sm:text-[10px] uppercase tracking-wider text-gray-400 mt-1 font-medium">
            Chief Of Board
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- Subscription Section -->
  <div class="bg-[#2e8b3b] text-white py-12 sm:py-16">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 text-center">
      <h2 class="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
        Sign Up To Subscribe To The Latest Insight from DPH
      </h2>
      
      <form class="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">
        <input 
          type="email" 
          placeholder="Your Email Address" 
          class="w-full sm:flex-1 bg-white/10 border border-white/30 px-4 sm:px-6 py-3 rounded text-white placeholder:text-white/60 focus:outline-none focus:bg-white/20" 
        />
        <button 
          type="submit" 
          class="w-full sm:w-auto border-2 border-white px-8 sm:px-10 py-3 rounded font-bold hover:bg-white hover:text-[#2e8b3b] transition duration-300 uppercase text-sm sm:text-base tracking-widest"
        >
          Subscribe
        </button>  
      </form>
    </div>
  </div>
</template>
