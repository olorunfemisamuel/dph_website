<script lang="ts" setup>
import hompageimagedph from '@/assets/hompageimagedph.png'
import InsightsPage from '@/components/InsightsPage.vue'
import investHomepage from '@/assets/investHomepage.png'
import assetmanagement from '@/assets/assetmanagement.png'
import Privateequity from '@/assets/Privateequity.jpg'
import securitieshomepage from '@/assets/securitieshomepage.png'
import Trusteesimg from '@/assets/Trusteesimg.jpg'
import { onMounted, onBeforeUnmount, nextTick } from 'vue'

let observer: IntersectionObserver | null = null

onMounted(async () => {
  await nextTick() // ✅ wait for DOM

  const elements = document.querySelectorAll('.reveal')

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show')
          observer?.unobserve(entry.target) // animate once
        }
      })
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -80px 0px',
    },
  )

  elements.forEach((el) => observer?.observe(el))
})

onBeforeUnmount(() => {
  observer?.disconnect()
})

const cardClass =
  'flex items-stretch md:w-[27%] sm:w-[45%] w-full bg-white rounded-2xl shadow-md overflow-hidden h-28'
</script>

<template>
  <main class="overflow-x-hidden">
   <div class="relative w-full sm:h-screen h-[75%] overflow-hidden">
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
          <div class="reveal absolute left-6 md:left-16 top-48 md:top-50 text-left max-w-none">
            <h2 class="font-semibold text-3xl md:text-6xl text-white mb-8 leading-tight">
              <span class="block">We Create Unique Solutions </span>
              <span class="block">To Help Your Assets Grow</span>
            </h2>

            <RouterLink to="/about">
              <button
                class="bg-green-700 hover:bg-green-800 text-white text-lg py-3 px-8 rounded transition"
              >
                Read More
              </button>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>

    <!---What we do section-->
    <div class="bg-[#F0F5F7] py-1">
      <h2 class="reveal text-4xl font-bold  text-gray-500 mt-20 mb-10 ml-18">What We Do</h2>
      <p class="reveal  text-gray-600 mx-6 sm:mx-10 md:mx-20 mb-8 md:mb-10  text-justify">
        Deutsche Partners Holding (DPH) is an independently owned financial services group with core
        expertise in Asset Management, Investment Banking, Private Equity, Securities, and
        Trusteeship. DPH is deeply committed to the success, development, and sustainable growth of
        its clients and their assets.
      </p>
      <div
        class="flex justify-center items-center flex-wrap gap-4 sm:gap-6 px-4 sm:px-6 md:px-10 mb-16 md:mb-20"
      >
        <RouterLink to="/Investment-Banking" :class="cardClass" class="reveal">
          <!-- Image container -->
          <div class="relative h-full w-24 sm:w-28 md:w-32 -mr-6 sm:-mr-8">
            <img :src="investHomepage" class="h-full w-full object-cover rounded-l-2xl" />
            <!-- Overlay only on image -->
            <div class="absolute inset-0 bg-black/30 rounded-l-2xl"></div>
          </div>

          <!-- Text on top of image -->
          <span
            class="relative z-10 flex items-center justify-center h-full text-gray-700 text-sm sm:text-base font-semibold px-10"
          >
            Investment Banking
          </span>
        </RouterLink>

        <RouterLink
          to="/Asset-Management"
         :class="cardClass"
       class="reveal" >
          <div class="relative h-full w-24 sm:w-28 md:w-32 -mr-6 sm:-mr-8">
            <img
              :src="assetmanagement"
              class="w-24 sm:w-28 md:w-32 h-full object-cover -mr-6 sm:-mr-8"
            />
            <!-- Overlay only on image -->
            <div class="absolute inset-0 bg-black/30 rounded-l-2xl"></div>
          </div>

          <span
            class="relative z-10 flex items-center justify-center h-full text-gray-700 text-sm sm:text-base font-semibold px-10"
          >
            Asset Management
          </span>
        </RouterLink>

        <RouterLink
          to="/Private-Equity"
        :class="cardClass"
        class="reveal">
          <div class="relative h-full w-24 sm:w-28 md:w-32 -mr-6 sm:-mr-8">
            <img
              :src="Privateequity"
              class="w-24 sm:w-28 md:w-32 h-full object-cover -mr-6 sm:-mr-8"
            />
            <!-- Overlay only on image -->
            <div class="absolute inset-0 bg-black/30 rounded-l-2xl"></div>
          </div>

          <span
            class="relative z-10 flex items-center justify-center h-full text-gray-700 text-sm sm:text-base font-semibold px-10"
          >
            Private Equity
          </span>
        </RouterLink>

        <RouterLink
          to="/Securities-Trading"
        :class="cardClass"
        class="reveal">
          <div class="relative h-full w-24 sm:w-28 md:w-32 -mr-6 sm:-mr-8">
            <img
              :src="securitieshomepage"
              class="w-24 sm:w-28 md:w-32 h-full object-cover -mr-6 sm:-mr-8"
            />
            <!-- Overlay only on image -->
            <div class="absolute inset-0 bg-black/30 rounded-l-2xl"></div>
          </div>

          <span
            class="relative z-10 flex items-center justify-center h-full text-gray-700 text-sm sm:text-base font-semibold px-10"
          >
            Securities Trading
          </span>
        </RouterLink>

        <RouterLink
          to="/Trustees"
         :class="cardClass"
       class="reveal"> 
          <div class="relative h-full w-24 sm:w-28 md:w-32 -mr-6 sm:-mr-8">
            <img
              :src="Trusteesimg"
              class="w-24 sm:w-28 md:w-32 h-full object-cover -mr-6 sm:-mr-8"
            />
            <!-- Overlay only on image -->
            <div class="absolute inset-0 bg-black/30 rounded-l-2xl"></div>
          </div>

          <span
            class="relative z-10 flex items-center justify-center h-full text-gray-700 text-sm sm:text-base font-semibold px-10"
          >
            Trustees
          </span>
        </RouterLink>
      </div>
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
    <div class="bg-green-700 text-white py-10">
      <div class="max-w-3xl mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p class="mb-6">
          Stay updated with the latest news and insights from Deutsche Partners Holding.
        </p>
        <form
          class="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-4xl mx-auto"
        >
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
  </main>
</template>

<style scoped>
.reveal {
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.6s ease-out;
}

.reveal.show {
  opacity: 1;
  transform: translateY(0);
}
</style>
