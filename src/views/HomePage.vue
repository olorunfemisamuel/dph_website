<script lang="ts" setup>
import dphHeroimage from '@/assets/dphHeroimage.jpg';
</script>


<template>
    <main>
  <div class="flex flex-col">
   <img :src = "dphHeroimage" alt="Hero-image" class="w-full h-auto"/>
    </div>


  <div class="absolute  inset-x-0 inset-y-19 flex flex-col items-center justify-center bg-black/30">
        <h2 class="capitalize font-bold text-3xl md:text-6xl text-center text-white px-4 mb-8">
          We Create Unique Solutions<br/>
          To Help Your Assets Grow
        </h2>
        <button class="bg-green-700 hover:bg-green-800 text-white text-lg md:text-xl py-3 px-8 md:px-10 rounded transition">
          Read More
        </button>
      </div>
   </main>
    
</template>
