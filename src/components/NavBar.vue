<script setup lang="ts">

import { ref } from 'vue'

const isMenuOpen = ref(false)
const aboutOpen = ref(false)
const businessOpen = ref(false)


const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}





const megaOpen = ref(false)
let closeTimer: number | null = null

const openMega = () => {
  if (closeTimer) {
    clearTimeout(closeTimer)
    closeTimer = null
  }
  megaOpen.value = true
}

const closeMega = () => {
  closeTimer = window.setTimeout(() => {
    megaOpen.value = false
  }, 180)
}


</script>

<template>
 <header class="fixed top-0 left-0 w-full z-50 bg-white shadow-lg">

   
    <nav class="w-full
     flex items-center justify-between
     py-4 px-6 md:px-12">
         <img src = "/dphLogo.jpg" alt="DPH Logo" class="h-10 w-auto"/>
        
          <!-- <img src="dphLogo.jpg" alt="DPH Logo" class="h-10 w-auto"/> -->
        

        <ul class="hidden md:flex gap-8 text-black transition">
            <li>
    <RouterLink
      to="/"
      class="relative inline-block
             after:content-['']
             after:absolute after:left-0 after:-bottom-1
             after:h-0.5 after:w-0
             after:bg-green-700
             after:transition-all after:duration-300
             hover:after:w-full"
    >
      Home
    </RouterLink>
  </li>


            <li class="relative inline-block group
         after:content-['']
         after:absolute after:left-0 after:-bottom-1
         after:h-0.5 after:w-0
         after:bg-green-700
         after:transition-all after:duration-300
         hover:after:w-full">

  <RouterLink to="/about" class="hidden md:inline-block ml-2"> About Us   </RouterLink>

  <!-- Dropdown -->
  <div class="absolute left-0 mt-2 w-170 bg-white shadow-lg rounded-lg
              opacity-0 invisible
              group-hover:opacity-100 group-hover:visible
              transition-all duration-300 z-50">

  <div class="grid grid-cols-2 gap-4 p-4 min-w-[420px]">
  
  <!-- LEFT: LINKS -->
  <div class="space-y-2">

       <RouterLink to="/about" class="block px-4 py-3 hover:bg-green-50"> Who we are </RouterLink>
   <RouterLink to="/MDmessage" class="block px-4 py-3 hover:bg-green-50">MD’s Message</RouterLink>
    <RouterLink to="/Leadership" class="block px-4 py-3 hover:bg-green-50"> Leadership </RouterLink> 
  </div>

  <!-- RIGHT: IMAGE -->
  <div class="hidden md:block">
    <img
      src="/navigation3.png"
      alt="Our Businesses"
      class="w-full h-full object-cover rounded-lg"
    />
  </div>

</div>
      
  </div>

</li>


<li
  class="relative"
  @mouseenter="openMega"
  @mouseleave="closeMega"
>
  <!-- TRIGGER -->
  <span
    class="cursor-pointer relative
           after:content-['']
           after:absolute after:left-0 after:-bottom-1
           after:h-0.5 after:w-0
           after:bg-green-700
           after:transition-all after:duration-300
           hover:after:w-full"
  >
    Our Businesses
  </span>

  <!-- MEGA MENU -->
  <div
    v-show="megaOpen"
    class="absolute left-1/2 top-full mt-6 -translate-x-1/2
           w-[1100px] bg-white rounded-2xl shadow-xl
           p-6 z-50"
  >
    <div class="grid grid-cols-[240px_1fr_320px] gap-6">

      <!-- LEFT -->
      <div class="border-r pr-4">
        <p class="text-xs tracking-widest text-gray-400 mb-4">
          OUR BUSINESSES
        </p>

        <ul class="space-y-2">
          <RouterLink to="/Asset-Management"
            class="block px-4 py-3 rounded-lg bg-gray-100 font-medium">
            Asset Management
          </RouterLink>

          <RouterLink to="/Investment-Banking"
            class="block px-4 py-3 rounded-lg hover:bg-gray-50">
            Investment Banking
          </RouterLink>

          <RouterLink to="/Private-Equity"
            class="block px-4 py-3 rounded-lg hover:bg-gray-50">
            Private Equity
          </RouterLink>

          <RouterLink to="/Securities-Trading"
            class="block px-4 py-3 rounded-lg hover:bg-gray-50">
            Securities Trading
          </RouterLink>

          <RouterLink to="/Trustees"
            class="block px-4 py-3 rounded-lg hover:bg-gray-50">
            Trustees
          </RouterLink>
        </ul>
      </div>

      <!-- MIDDLE -->
      <div>
        <p class="text-xs tracking-widest text-gray-400 mb-4">
          WHAT WE DO
        </p>

        <div class="space-y-4">
          <div>
            <p class="font-medium">Asset Management</p>
            <p class="text-sm text-gray-500">
              Portfolio and fund management solutions
            </p>
          </div>

          <div>
            <p class="font-medium">Investment Banking</p>
            <p class="text-sm text-gray-500">
              Advisory and capital raising services
            </p>
          </div>

          <div>
            <p class="font-medium">Private Equity</p>
            <p class="text-sm text-gray-500">
              Long-term strategic investments
            </p>
          </div>

          <div>
            <p class="font-medium">Securities Trading</p>
            <p class="text-sm text-gray-500">
              Execution and market access
            </p>
          </div>

          <div>
            <p class="font-medium">Trustees</p>
            <p class="text-sm text-gray-500">
              Independent fiduciary services
            </p>
          </div>
        </div>
      </div>

      <!-- RIGHT -->
      <div class="bg-gray-50 rounded-xl p-4 flex flex-col justify-between">
        <img
          src="/navigation1.png"
          alt="Our Businesses"
          class="rounded-lg mb-4"
        />

        <p class="font-medium text-lg">
          Explore our<br />
          <span class="font-semibold">business divisions</span>
        </p>

        <RouterLink
          to="/contact"
          class="mt-4 text-center border border-black rounded-lg py-2"
        >
          Contact Us
        </RouterLink>
      </div>

    </div>
  </div>
</li>



<li class="relative inline-block group
         after:content-['']
         after:absolute after:left-0 after:-bottom-1
         after:h-0.5 after:w-0
         after:bg-green-700
         after:transition-all after:duration-300
         hover:after:w-full font-">
        

         <RouterLink to="/Insight" class="cursor-pointer"> Resources </RouterLink>

  <!-- Dropdown -->
  <div class="absolute left-0 mt-2 w-150 bg-white shadow-lg rounded-lg
              opacity-0 invisible
              group-hover:opacity-100 group-hover:visible
              transition-all duration-300 z-50">

     <div class="grid grid-cols-2 gap-4 p-4 min-w-[420px]">
  
  <!-- LEFT: LINKS -->
  <div class="space-y-2">
   <RouterLink to="/Insight" class="block px-4 py-3 hover:bg-green-50">Insights</RouterLink>
    <RouterLink to="/gallery" class="block px-4 py-3 hover:bg-green-50">Gallery</RouterLink> 
    <RouterLink to="/gallery" class="block px-4 py-3 hover:bg-green-50">Career</RouterLink> 
    <RouterLink to="/gallery" class="block px-4 py-3 hover:bg-green-50">Policy</RouterLink> 

    
  </div>

  <!-- RIGHT: IMAGE -->
  <div class="hidden md:block">
    <img
      src="/navigation2.png"
      alt="Our Businesses"
      class="w-full h-full object-cover rounded-lg"
    />
  </div>

</div>
    <!-- <div class="absolute left-0 mt-2 w-100 bg-white shadow-lg rounded-lg
              opacity-0 invisible
              group-hover:opacity-100 group-hover:visible
              transition-all duration-300 z-50">
    <a href="#" class="block px-4 py-3 hover:bg-green-50">Policy

 <a href="#" class="block px-4 py-3 hover:bg-green-50">Cookies Policy</a>
  <a href="#" class="block px-4 py-3 hover:bg-green-50">Private Policy</a>
   <a href="#" class="block px-4 py-3 hover:bg-green-50">Terms and Conditions</a>
    </a>
   </div>

</div> -->

</div>
         
        </li>


               <!-- <li class="relative inline-block group
         after:content-['']
         after:absolute after:left-0 after:-bottom-1
         after:h-0.5 after:w-0
         after:bg-green-700
         after:transition-all after:duration-300
         hover:after:w-full"> -->
        
        <!-- <RouterLink to="/career" class="cursor-pointer">Career </RouterLink> -->

  <!-- Dropdown -->
  <!-- <div class="absolute left-0 mt-2 w-100 bg-white shadow-lg rounded-lg
              opacity-0 invisible
              group-hover:opacity-100 group-hover:visible
              transition-all duration-300 z-50">

    <a href="#" class="block px-4 py-3 hover:bg-green-50">Research Article</a>
    <a href="#" class="block px-4 py-3 hover:bg-green-50">Case Study</a>
    <a href="#" class="block px-4 py-3 hover:bg-green-50">Financial Education Content</a>
     
  </div> -->
<!-- </li> -->


        

                 <li class="relative inline-block group
         after:content-['']
         after:absolute after:left-0 after:-bottom-1
         after:h-0.5 after:w-0
         after:bg-green-700
         after:transition-all after:duration-300
         hover:after:w-full">
        
          <RouterLink to="/contact" class="cursor-pointer"> Contact </RouterLink>

        <!-- Dropdown -->
  <!-- <div class="absolute left-0 mt-2 w-100 bg-white shadow-lg rounded-lg
              opacity-0 invisible
              group-hover:opacity-100 group-hover:visible
              transition-all duration-300 z-50">

    <a href="#" class="block px-4 py-3 hover:bg-green-50">Annual Statement/Financial Report</a>
    <a href="#" class="block px-4 py-3 hover:bg-green-50">Investment Opportunities</a>
    <a href="#" class="block px-4 py-3 hover:bg-green-50">Stock Information</a> 

    
     
  </div> -->
         
        </li>
        </ul>

          <!---Hamburger Menu-->
          <button @click="toggleMenu" class="md:hidden text-black focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none"
               viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        
      <!-----Router Link--->
       <RouterLink to="/invest-now" class="hidden md:inline-block ml-2">
  <button 
    class="px-4 py-2 rounded-xl 
           bg-green-700 hover:bg-green-800 text-white transition"
  >
    Invest Now
  </button>
</RouterLink>




</nav>
<!-- ================= MOBILE MENU ================= -->
<div
  v-show="isMenuOpen"
  class="md:hidden bg-white shadow-lg border-t px-6 py-6 space-y-6"
>

  <RouterLink to="/" @click="toggleMenu" class="block font-medium">
    Home
  </RouterLink>

  <!-- About -->
   <div>
    <button
      @click="aboutOpen = !aboutOpen"
      class="w-full flex items-center justify-between font-medium"
    >
      About Us
      <span
        class="transition-transform"
        :class="aboutOpen ? 'rotate-180' : ''"
      >
        ▼
      </span>
    </button>

    <div
      v-show="aboutOpen"
      class="pl-4 mt-3 space-y-2 text-sm"
    >
      <RouterLink to="/about" @click="toggleMenu" class="block">
        Who we are
      </RouterLink>
      <RouterLink to="/MDmessage" @click="toggleMenu" class="block">
        MD’s Message
      </RouterLink>
      <RouterLink to="/Leadership" @click="toggleMenu" class="block">
        Leadership
      </RouterLink>
    </div>
  </div>

  <!-- Our Businesses -->
   <div>
    <button
      @click="businessOpen = !businessOpen"
      class="w-full flex items-center justify-between font-medium"
    >
      Our Businesses
      <span
        class="transition-transform"
        :class="businessOpen ? 'rotate-180' : ''"
      >
        ▼
      </span>
    </button>

    <div
      v-show="businessOpen"
      class="pl-4 mt-3 space-y-2 text-sm"
    >
      <RouterLink to="/Asset-Management" @click="toggleMenu" class="block">
        Asset Management
      </RouterLink>
      <RouterLink to="/Investment-Banking" @click="toggleMenu" class="block">
        Investment Banking
      </RouterLink>
      <RouterLink to="/Private-Equity" @click="toggleMenu" class="block">
        Private Equity
      </RouterLink>
      <RouterLink to="/Securities-Trading" @click="toggleMenu" class="block">
        Securities Trading
      </RouterLink>
      <RouterLink to="/Trustees" @click="toggleMenu" class="block">
        Trustees
      </RouterLink>
    </div>
  </div>

  <!-- Insights -->
  <div>
    <RouterLink to="/Insight" @click="toggleMenu" class="block font-medium mb-2">Insights</RouterLink>
  </div>

  <RouterLink to="/career" @click="toggleMenu" class="block font-medium">
    Career
  </RouterLink>

  <RouterLink to="/contact" @click="toggleMenu" class="block font-medium">
    Contact
  </RouterLink>

  <!-- CTA -->
  <RouterLink to="/invest-now" @click="toggleMenu">
    <button class="w-full mt-4 bg-green-700 text-white py-3 rounded-xl">
      Invest Now
    </button>
  </RouterLink>

</div>

   </header> 

</template>

