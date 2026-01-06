<script lang="ts">
    

</script>

<template>
    <section class="w-full max-w-7xl mx-auto mt-6 rounded-2xl overflow-hidden shadow-lg flex">
    
  <!-- Right Image Section -->
<div class="relative w-full h-96 overflow-hidden">

  <!-- Image -->
  <img 
    src="@/assets/aboutUsimage4.jpg" 
    alt="About Banner" 
    class="w-full h-full object-cover"
  />

  <!-- Dark Overlay -->
  <div class="absolute inset-0 bg-black/50"></div>

  <!-- Text on top -->
 <h3
  class="absolute bottom-6 left-6 md:bottom-10 md:left-10
         text-white font-bold text-3xl md:text-5xl z-10 reveal"
>
Leadership
</h3>


</div>

</section>

<!-- Tabs -->
<div class="flex justify-center mt-14">
  <div class="flex bg-gray-100 rounded-full p-1 shadow-sm">
    <button
      class="px-6 py-2 text-sm font-medium rounded-full bg-white shadow text-gray-800"
    >
      Management Team
    </button>
    <button
      class="px-6 py-2 text-sm font-medium rounded-full text-gray-500 hover:text-gray-800"
    >
      Board of Directors
    </button>
  </div>
</div>

<!-- Leadership Grid -->
<div class="max-w-7xl mx-auto mt-10 px-6">
  <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
    
    <!-- Card -->
    <div
      v-for="i in 9"
      :key="i"
      class="flex bg-gray-50 rounded-2xl shadow-md overflow-hidden"
    >
      <!-- Image -->
      <img
        src="@/assets/aboutUsimage4.jpg"
        alt="Leader"
        class="w-32 h-full object-cover"
      />

      <!-- Text -->
      <div class="p-5 flex flex-col justify-center">
        <h4 class="font-semibold text-gray-800 text-sm">
          Chief Dave Obasi
        </h4>
        <p class="text-xs text-gray-500 mt-1">
          Chief Of Board
        </p>
      </div>
    </div>

  </div>
</div>

<!---news letter section-->
  <div class="bg-green-700 text-white py-10 ">
    <div class="max-w-3xl mx-auto px-6 text-center">
      <h2 class="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
      <p class="mb-6">Stay updated with the latest news and insights from Deutsche Partners Holding.</p>
      <form class="flex flex-col md:flex-row items-center justify-center gap-4 ">
        <input type= "email" placeholder="Enter your email" class="w-full md:w-auto px-4 py-2 rounded text-gray-800" />
        <button type="submit" class="bg-white text-green-700 font-semibold px-6 py-2 rounded hover:bg-green-100 transition">Subscribe</button>  
      </form>
      </div>
  </div>


</template>