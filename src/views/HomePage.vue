<script lang="ts" setup>
import hompageimagedph from '@/assets/hompageimagedph.png';
import InsightsPage from '@/components/InsightsPage.vue';
import { onMounted } from "vue";

onMounted(() => {
  const elements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("show");
        else {
          entry.target.classList.remove("show");  
        }
      });
    },
    { threshold: 0.2 }
  );

   elements.forEach(el => observer.observe(el));
   });

   
</script>


<template>
  <main class="overflow-x-hidden">
<div class="relative w-full h-screen overflow-hidden">
  <div class="relative w-full h-screen overflow-hidden">
  <!-- Background Video -->
  <video
    autoplay
    muted
    loop
    playsinline
    class="absolute inset-0 w-full h-full object-cover z-0"
  >
    <source src="@/assets/homepagevideo1.mp4" type="video/mp4" />
  </video>

  <!-- Overlay -->
  <div class="absolute inset-0 bg-black/40 z-10">
    <div
      class="reveal
             absolute
             left-6 md:left-16
             bottom-24 md:bottom-32
             text-left
             max-w-xl"
    ><h2 class="capitalize font-bold text-2xl md:text-6xl text-white mb-8 leading-tight">
        We Create Unique Solutions to Help Your Assets Grow
      </h2>

      <button class="bg-green-700 hover:bg-green-800 text-white text-lg py-3 px-8 rounded transition">
        Read More
      </button>
    </div>
  </div>
</div>
</div>


<!---What we do section-->
<div class = "">
  <h2 class="reveal text-4xl font-bold text-center text-gray-800 mt-20 mb-10">What We Do</h2>
 <p class="reveal text-center text-gray-600 mx-6 sm:mx-10 md:mx-20 mb-8 md:mb-10">
    Deutsche Partners Holding (DPH) is an independently owned financial services group with core expertise in Asset Management, Investment Banking, Private Equity, Securities, and Trusteeship. DPH is deeply committed to the success, development, and sustainable growth of its clients and their assets.
 <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-6 md:px-10 mb-16 md:mb-20">

  <div class="flex items-center gap-3 sm:gap-4 bg-white rounded-2xl shadow-md p-3 sm:p-4">
    <img :src="hompageimagedph"
         class="w-16 h-14 sm:w-20 sm:h-16 md:w-24 md:h-20 object-cover rounded-xl">
    <span class="text-sm sm:text-base text-gray-700 font-semibold hover:text-green-400">
      Asset Management
    </span>
  </div>

  <div class="flex items-center gap-3 sm:gap-4 bg-white rounded-2xl shadow-md p-3 sm:p-4">
    <img :src="hompageimagedph"
         class="w-16 h-14 sm:w-20 sm:h-16 md:w-24 md:h-20 object-cover rounded-xl">
    <span class="text-sm sm:text-base text-gray-700 font-semibold hover:text-green-400">
      Investment Banking
    </span>
  </div>

  <div class="flex items-center gap-3 sm:gap-4 bg-white rounded-2xl shadow-md p-3 sm:p-4">
    <img :src="hompageimagedph"
         class="w-16 h-14 sm:w-20 sm:h-16 md:w-24 md:h-20 object-cover rounded-xl">
    <span class="text-sm sm:text-base text-gray-700 font-semibold hover:text-green-400">
      Private Equity
    </span>
  </div>

  <div class="flex items-center gap-3 sm:gap-4 bg-white rounded-2xl shadow-md p-3 sm:p-4">
    <img :src="hompageimagedph"
         class="w-16 h-14 sm:w-20 sm:h-16 md:w-24 md:h-20 object-cover rounded-xl">
    <span class="text-sm sm:text-base text-gray-700 font-semibold hover:text-green-400">
      Securities Trading
    </span>
  </div>

  <div class="flex items-center gap-3 sm:gap-4 bg-white rounded-2xl shadow-md p-3 sm:p-4">
    <img :src="hompageimagedph"
         class="w-16 h-14 sm:w-20 sm:h-16 md:w-24 md:h-20 object-cover rounded-xl">
    <span class="text-sm sm:text-base text-gray-700 font-semibold hover:text-green-400">
      Trustees
    </span>
  </div>

</div>

  </p>
</div>
 

    <!---End of What we do section-->

  <!---Latest News and Insights-->
  <!-- <div class = "reveal bg-gray-100 py-10">
    <h2 class="text-4xl font-bold text-center text-gray-800 mb-10">Insights</h2>
    <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8"> -->
      <!-- News Card 1 -->
      <!-- <div class="bg-white rounded-lg shadow-sm hover:shadow-black overflow-hidden transition-transform duration-300 hover:scale-110">
        <img :src="hompageimagedph" alt="News Image" class="w-full h-48 object-cover">
        <div class="p-6">
          <h3 class="text-xl font-semibold mb-2">Market Trends 2024</h3>
          <p class="text-gray-600 mb-4">An in-depth analysis of the current market trends and what to expect in the coming year.</p>
          <a href="#" class="text-green-700 hover:underline">Read More</a>
        </div>
      </div> -->

      <!-- News Card 2 -->
      <!-- <div class="bg-white rounded-lg shadow-sm  hover:shadow-black overflow-hidden transition-transform duration-300 hover:scale-110">
        <img :src="hompageimagedph" alt="News Image" class="w-full h-48 object-cover">
        <div class="p-6">
          <h3 class="text-xl font-semibold mb-2">Investment Strategies</h3>
          <p class="text-gray-600 mb-4">Explore effective investment strategies to maximize your portfolio's growth potential.</p>
          <a href="#" class="text-green-700 hover:underline">Read More</a>
        </div>   -->


        
<!-- </div> -->

   <!-- <div class="bg-white rounded-lg shadow-sm hover:shadow-black overflow-hidden transition-transform duration-300 hover:scale-110">
        <img :src="hompageimagedph" alt="News Image" class="w-full h-48 object-cover">
        <div class="p-6">
          <h3 class="text-xl font-semibold mb-2">Investment Strategies</h3>
          <p class="text-gray-600 mb-4">Explore effective investment strategies to maximize your portfolio's growth potential.</p>
          <a href="#" class="text-green-700 hover:underline">Read More</a>
        </div>  
   </div> -->

   <!-- <div class="">
    <button class="bg-transparent text-green-600 border border-green-600 rounded px-8 py-2 hover:bg-green-50 transition mt-10">
  View All Insights
</button>

   </div>

    </div>
    
  </div> -->

  <InsightsPage />

  <!---End of Latest News and Insights-->

  <!---News letter section -->
  <div class="bg-green-700 text-white py-10 ">
    <div class="max-w-3xl mx-auto px-6 text-center">
      <h2 class="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
      <p class="mb-6">Stay updated with the latest news and insights from Deutsche Partners Holding.</p>
    <form class="flex flex-col sm:flex-row items-center justify-center gap-4">
       <input type="email" class="w-full sm:w-72 px-4 py-2 rounded text-gray-800" />
        <button type="submit" class="bg-white text-green-700 font-semibold px-6 py-2 rounded hover:bg-green-100 transition">Subscribe</button>  
      </form>
      </div>
  </div>




   </main>



   
    
</template>

<style scoped>
.reveal {
  opacity: 0;
  transform: translateY(40px);
  transition: all .6s ease-out;
}

.reveal.show {
  opacity: 1;
  transform: translateY(0);
}
</style>
