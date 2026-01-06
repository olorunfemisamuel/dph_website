<script lang="ts">

</script>

<template>
    <section class="w-full max-w-7xl mx-auto mt-6 rounded-2xl overflow-hidden shadow-lg flex">
    
  <!-- Right Image Section -->
<div class="relative w-full h-96 overflow-hidden">

  <!-- Image -->
  <img 
    src="@/assets/assetmanagementpicture.jpg" 
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
Asset Management
</h3>


</div>

</section>

<!----Why Choose us section-->


    <!-- Why Choose Us -->
<section class="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
  
  <!-- Text -->
  <div>
    <h4 class="text-green-700 font-semibold mb-4">WHY CHOOSE US</h4>
    <p class="text-gray-600 leading-relaxed mb-6">
      We provide tailored asset management solutions focused on long-term
      growth, risk mitigation, and value creation for our clients.
    </p>

    <ul class="space-y-4 text-gray-600">
      <li>✔ Professional portfolio management</li>
      <li>✔ Risk-adjusted investment strategies</li>
      <li>✔ Client-focused financial planning</li>
    </ul>
  </div>

  <!-- Image -->
  <img
    src="@/assets/assetmanagementpicture.jpg"
    class="rounded-xl shadow-md"
  />
</section>

<!-- Content Blocks -->
<section class="max-w-7xl mx-auto px-6 space-y-20">

  <!-- Block 1 -->
  <div class="grid md:grid-cols-2 gap-12 items-center">
    <img
      src="@/assets/assetmanagementpicture.jpg"
      class="rounded-xl shadow-md"
    />
    <div>
      <h4 class="font-semibold text-lg mb-3">Investment Expertise</h4>
      <p class="text-gray-600">
        Our team applies disciplined investment processes backed by
        market research and analytics.
      </p>
    </div>
  </div>

  <!-- Block 2 -->
  <div class="grid md:grid-cols-2 gap-12 items-center">
    <div>
      <h4 class="font-semibold text-lg mb-3">Strategic Planning</h4>
      <p class="text-gray-600">
        We align investment strategies with client objectives to ensure
        sustainable growth.
      </p>
    </div>
    <img
      src="@/assets/assetmanagementpicture.jpg"
      class="rounded-xl shadow-md"
    />
  </div>

</section>


<!-- Contact Form -->
<section class="bg-blue-50 mt-20 py-16">
  <div class="max-w-3xl mx-auto px-6">
    <h4 class="text-center font-semibold mb-8">
      Speak With an Asset Management Expert
    </h4>

    <form class="space-y-4">
      <input class="w-full p-3 rounded border" placeholder="Full Name" />
      <input class="w-full p-3 rounded border" placeholder="Email Address" />
      <input class="w-full p-3 rounded border" placeholder="Phone Number" />
      <textarea class="w-full p-3 rounded border" placeholder="Message"></textarea>

      <button class="w-full bg-purple-600 text-white py-3 rounded hover:bg-purple-700">
        Submit
      </button>
    </form>
  </div>
</section>



</template>
