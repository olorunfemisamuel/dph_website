<script setup lang="ts">
  defineProps<{
  toggleMenu: () => void
}>()

</script>

<template>
  <header class="bg-white text-black shadow-md">
   
    <nav class="container mx-auto flex items-center justify-between py-4 px-6">
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

<a href="#" class="cursor-pointer">About</a>

  <!-- Dropdown -->
  <div class="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg
              opacity-0 invisible
              group-hover:opacity-100 group-hover:visible
              transition-all duration-300 z-50">

    <a href="#" class="block px-4 py-3 hover:bg-green-50">Overview</a>
    <a href="#" class="block px-4 py-3 hover:bg-green-50">Vision & Mission</a>
    <a href="#" class="block px-4 py-3 hover:bg-green-50">Leadership Team profile</a>
     <a href="#" class="block px-4 py-3 hover:bg-green-50">Policy & Compliance</a>
     
  </div>
</li>



         <li class="relative inline-block group
  after:content-['']
  after:absolute after:left-0 after:-bottom-1
  after:h-0.5 after:w-0
  after:bg-green-700
  after:transition-all after:duration-300
  hover:after:w-full">

  <a href="#" class="cursor-pointer">Our Services</a>

  <!-- Dropdown -->
  <div class="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg
              opacity-0 invisible
              group-hover:opacity-100 group-hover:visible
              transition-all duration-300 z-50">

    <a href="#" class="block px-4 py-3 hover:bg-green-50">Asset Management</a>
    <a href="#" class="block px-4 py-3 hover:bg-green-50">Investment Banking</a>
    <a href="#" class="block px-4 py-3 hover:bg-green-50">Private Equity</a>
     <a href="#" class="block px-4 py-3 hover:bg-green-50">Securities Trading</a>
     <a href="#" class="block px-4 py-3 hover:bg-green-50"> Trustees</a>
     

  </div>
</li>


<li class="relative inline-block group
         after:content-['']
         after:absolute after:left-0 after:-bottom-1
         after:h-0.5 after:w-0
         after:bg-green-700
         after:transition-all after:duration-300
         hover:after:w-full font-">
        

         <a href="#" class="cursor-pointer">Products</a>

  <!-- Dropdown -->
  <div class="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg
              opacity-0 invisible
              group-hover:opacity-100 group-hover:visible
              transition-all duration-300 z-50">

    <a href="#" class="block px-4 py-3 hover:bg-green-50">Products 1</a>
    <a href="#" class="block px-4 py-3 hover:bg-green-50">Products 2</a>
    <a href="#" class="block px-4 py-3 hover:bg-green-50">Products 3</a>
  </div>
         
        </li>


               <li class="relative inline-block group
         after:content-['']
         after:absolute after:left-0 after:-bottom-1
         after:h-0.5 after:w-0
         after:bg-green-700
         after:transition-all after:duration-300
         hover:after:w-full">
        
        <a href="#" class="cursor-pointer">News & Insights</a>

  <!-- Dropdown -->
  <div class="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg
              opacity-0 invisible
              group-hover:opacity-100 group-hover:visible
              transition-all duration-300 z-50">

    <a href="#" class="block px-4 py-3 hover:bg-green-50">Research Article</a>
    <a href="#" class="block px-4 py-3 hover:bg-green-50">Case Study</a>
    <a href="#" class="block px-4 py-3 hover:bg-green-50">Financial Education Content</a>
     
  </div>
</li>


        

                 <li class="relative inline-block group
         after:content-['']
         after:absolute after:left-0 after:-bottom-1
         after:h-0.5 after:w-0
         after:bg-green-700
         after:transition-all after:duration-300
         hover:after:w-full">
        
          <a href="#" class="cursor-pointer">Investor Relation</a>

        <!-- Dropdown -->
  <div class="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg
              opacity-0 invisible
              group-hover:opacity-100 group-hover:visible
              transition-all duration-300 z-50">

    <a href="#" class="block px-4 py-3 hover:bg-green-50">Annual Statement/Financial Report</a>
    <a href="#" class="block px-4 py-3 hover:bg-green-50">Investment Opportunities</a>
    <a href="#" class="block px-4 py-3 hover:bg-green-50">Stock Information</a>
     
  </div>
         
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
   </header> 

</template>

