<script lang="ts">
// Logic remains empty as requested
</script>

<template>
  <!-- HERO SECTION -->
  <!-- <section class="w-full max-w-7xl mx-auto mt-4 md:mt-6 rounded-2xl overflow-hidden shadow-lg">
    <div class="relative w-full min-h-[220px] sm:min-h-[300px] md:min-h-[400px]">
      <img
        src="@/assets/assetmanagementpicture.jpg"
        alt="About Banner"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black/50"></div>

      <h3
        class="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-10 md:left-10
               text-white font-bold text-2xl sm:text-3xl md:text-5xl z-10 reveal"
      >
        Asset Management
      </h3>
    </div>
  </section> -->

    <section class="w-full max-w-7xl mx-auto mt-6 rounded-2xl overflow-hidden shadow-lg">
      <div class="relative w-full h-52 sm:h-64 md:h-96 overflow-hidden">
        <img 
          src="@/assets/investmentbanner.png" 
          alt="About Banner" 
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black/50"></div>
        <h3 class="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-10 md:left-10 text-white font-bold text-2xl sm:text-3xl md:text-5xl z-10">
         Assestment Management
        </h3>
      </div>
    </section>




  <!-- WHY CHOOSE US -->
  <section class="bg-[#f4f7f9] w-full py-12 md:py-16 px-4 sm:px-6 mt-10">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
      <div class="md:w-1/3">
        <h2 class="text-2xl md:text-3xl font-bold text-[#2e8b3b]">
          Why CHOOSE US ?
        </h2>
      </div>

      <div class="md:w-2/3 bg-white p-6 sm:p-8 md:p-10 rounded-xl shadow-sm border">
        <p class="text-gray-700 leading-relaxed text-sm sm:text-base">
          We have excellent IT processes and have also leveraged technology to provide
          instant trading capabilities to our clients...
        </p>
      </div>
    </div>
  </section>

  <!-- CONTENT SECTIONS -->
  <section class="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-20 space-y-20">

    <!-- SECTION 1 -->
    <div class="grid md:grid-cols-2 gap-12 items-start">
      <div class="space-y-8">
        <div class="border-l-4 border-[#2e8b3b] pl-5">
          <h4 class="font-bold text-gray-800 text-base mb-3">Mutual Funds</h4>
          <p class="text-gray-600 text-sm leading-relaxed">
            We offer professionally managed mutual funds...
          </p>
        </div>

        <div class="border-l-4 border-gray-400 pl-5">
          <h4 class="font-bold text-gray-800 text-base mb-3">Wealth Management</h4>
          <p class="text-gray-600 text-sm leading-relaxed">
            Our wealth management services provide personalized solutions...
          </p>
        </div>
      </div>

      <div class="flex justify-center">
        <img
          src="@/assets/assetsmangimg.png"
          class="w-full max-w-sm sm:max-w-md rounded-3xl object-cover shadow-sm"
        />
      </div>
    </div>

    <!-- SECTION 2 -->
    <div class="grid md:grid-cols-2 gap-12 items-center">
      <div class="order-2 md:order-1 flex justify-center">
        <img
          src="@/assets/assetsmangimg2.png"
          class="w-full max-w-sm sm:max-w-md rounded-3xl object-cover shadow-sm"
        />
      </div>

      <div class="order-1 md:order-2 space-y-8">
        <div class="border-l-4 border-[#2e8b3b] pl-5">
          <h4 class="font-bold text-[#2e8b3b] text-base mb-3">
            Portfolio Management
          </h4>
          <p class="text-gray-600 text-sm leading-relaxed">
            We manage investment portfolios on behalf of clients...
          </p>
        </div>

        <div class="border-l-4 border-gray-400 pl-5">
          <h4 class="font-bold text-gray-800 text-base mb-3">Hedge Fund</h4>
          <p class="text-gray-600 text-sm leading-relaxed">
            Our hedge fund strategies focus on alternative investments...
          </p>
        </div>
      </div>
    </div>

    <!-- SECTION 3 -->
    <div class="grid md:grid-cols-2 gap-12 items-start">
      <div class="space-y-8">
        <div class="border-l-4 border-[#2e8b3b] pl-5">
          <h4 class="font-bold text-gray-800 text-base mb-2">Venture Capital</h4>
          <p class="text-gray-600 text-sm leading-relaxed">
            We invest in high-growth businesses with strong fundamentals...
          </p>
        </div>

        <div class="border-l-4 border-gray-400 pl-5">
          <h4 class="font-bold text-gray-800 text-base mb-2">
            Investment Advisory
          </h4>
          <p class="text-gray-600 text-sm leading-relaxed">
            Our advisory services offer expert guidance...
          </p>
        </div>

        <div class="border-l-4 border-gray-800 pl-5">
          <h4 class="font-bold text-gray-800 text-base mb-2">
            Institutional Asset Management
          </h4>
          <p class="text-gray-600 text-sm leading-relaxed">
            We design and manage tailored investment solutions for institutions...
          </p>
        </div>
      </div>

      <div class="flex justify-center">
        <img
          src="@/assets/assetsmangimg.png"
          class="w-full max-w-sm sm:max-w-md rounded-3xl object-cover shadow-sm"
        />
      </div>
    </div>
  </section>

  <!-- CONTACT FORM -->
  <section class="bg-blue-50 mt-20 py-12 md:py-16">
    <div class="max-w-3xl mx-auto px-4 sm:px-6">
      <h4 class="text-center font-semibold text-lg mb-8">
        Speak With an Asset Management Expert
      </h4>

      <form class="space-y-4">
        <input class="w-full p-3 rounded border focus:ring-2 focus:ring-green-600 outline-none" placeholder="Full Name" />
        <input class="w-full p-3 rounded border focus:ring-2 focus:ring-green-600 outline-none" placeholder="Email Address" />
        <input class="w-full p-3 rounded border focus:ring-2 focus:ring-green-600 outline-none" placeholder="Phone Number" />
        <textarea class="w-full p-3 rounded border focus:ring-2 focus:ring-green-600 outline-none" rows="4" placeholder="Message"></textarea>

        <button class="w-full bg-[#2e8b3b] text-white py-3 rounded-lg font-bold hover:bg-green-800 transition">
          Submit
        </button>
      </form>
    </div>
  </section>
</template>
