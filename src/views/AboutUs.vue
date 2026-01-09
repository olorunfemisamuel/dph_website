<script lang="ts" setup>
// import NavBar from '@/components/NavBar.vue';
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
<section class="w-full max-w-7xl mx-auto mt-4 sm:mt-6 rounded-2xl overflow-hidden shadow-lg">
  <div class="relative w-full min-h-50 m:min-h-65 md:h-96 overflow-hidden">

    <img
      src="@/assets/aboutUsimage4.jpg"
      alt="About Banner"
      class="w-full h-full object-cover"
    />

    <div class="absolute inset-0 bg-black/50"></div>

    <h3
      class="absolute bottom-6 left-4 sm:left-6 md:bottom-10 md:left-10
             text-white font-bold text-2xl sm:text-3xl md:text-5xl z-10 reveal"
    >
      About Us
    </h3>

  </div>
</section>



<!-- Company Info Section -->
<section class="w-full max-w-7xl mx-auto mt-10 px-4 sm:px-6">
  <div class="text-center mb-6 sm:mb-8">
    <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
      Who We Are
    </h2>
  </div>

  <div class="flex justify-center">
    <div class="w-full lg:w-4/5">
      <p class="text-gray-600 text-base sm:text-lg leading-relaxed text-center sm:text-left">
        Deutsche Partners Holding (DPH) is an independently owned financial services group with core expertise in Asset Management, Investment Banking, Private Equity, Securities, and Trusteeship.
        <br /><br />
        We design and deliver value driven solutions tailored to each client. Our clientele includes financial institutions, corporations, private clients, and government entities.
      </p>
    </div>
  </div>
</section>


    
 <!---Mission and Vision section-->
<section class="w-full max-w-7xl mx-auto mt-12 px-4 sm:px-6">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">

    <!-- Mission -->
    <div class="bg-white p-8 sm:p-10 rounded-lg shadow-lg border-t-4 border-green-600 text-center">
      <h3 class="text-xl sm:text-2xl font-bold mb-4">Our Mission</h3>
      <p class="text-gray-700 leading-relaxed text-sm sm:text-base">
        To provide creative, world-class financial services and ethical investment solutions driven towards wealth creation.
      </p>
    </div>

    <!-- Vision -->
    <div class="bg-white p-8 sm:p-10 rounded-lg shadow-lg border-t-4 border-blue-600 text-center">
      <h3 class="text-xl sm:text-2xl font-bold mb-4">Our Vision</h3>
      <p class="text-gray-700 leading-relaxed text-sm sm:text-base">
        To become the leading integrated investment management firm in Africa.
      </p>
    </div>

  </div>
</section>


<!---Core Value Boxes-->
<!---Core Value Boxes-->
<section class="max-w-7xl mx-auto mt-10 px-4 sm:px-6">
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

    <div class="bg-white rounded-2xl p-6 border shadow-md hover:shadow-green-700/40 text-center">
      <i class="fas fa-award text-green-600 text-4xl mb-4"></i>
      <h3 class="text-lg font-bold text-green-700 mb-3">Accountability</h3>
      <p class="text-gray-600 text-sm leading-relaxed">
        We remain accountable to all stakeholders, making ethical and responsible professional decisions.
      </p>
    </div>

    <div class="bg-white rounded-2xl p-6 border shadow-md hover:shadow-blue-700/40 text-center">
      <i class="fas fa-medal text-blue-600 text-4xl mb-4"></i>
      <h3 class="text-lg font-bold text-blue-700 mb-3">Excellence</h3>
      <p class="text-gray-600 text-sm leading-relaxed">
        We deliver top quality advisory services through innovation and adaptability.
      </p>
    </div>

    <div class="bg-white rounded-2xl p-6 border shadow-md hover:shadow-green-700/40 text-center">
      <i class="far fa-user-circle text-green-600 text-4xl mb-4"></i>
      <h3 class="text-lg font-bold mb-3">Customer Focus</h3>
      <p class="text-gray-600 text-sm leading-relaxed">
        Exceptional service delivery creates sustainable value.
      </p>
    </div>

    <div class="bg-white rounded-2xl p-6 border shadow-md hover:shadow-green-700/40 text-center">
      <i class="fas fa-shield-alt text-green-600 text-4xl mb-4"></i>
      <h3 class="text-lg font-bold text-green-700 mb-3">Integrity</h3>
      <p class="text-gray-600 text-sm leading-relaxed">
        Honesty, trust, and transparency guide our operations.
      </p>
    </div>

    <div class="bg-white rounded-2xl p-6 border shadow-md hover:shadow-blue-700/40 text-center">
      <i class="fas fa-users text-blue-600 text-4xl mb-4"></i>
      <h3 class="text-lg font-bold text-blue-700 mb-3">Social Responsibility</h3>
      <p class="text-gray-600 text-sm leading-relaxed">
        Supporting communities and sustainability initiatives.
      </p>
    </div>

    <div class="bg-white rounded-2xl p-6 border shadow-md hover:shadow-green-700/40 text-center">
      <i class="fas fa-eye text-green-600 text-4xl mb-4"></i>
      <h3 class="text-lg font-bold mb-3">Transparency</h3>
      <p class="text-gray-600 text-sm leading-relaxed">
        Accurate and timely disclosure to all stakeholders.
      </p>
    </div>

  </div>
</section>


<!-- Footer Section -->

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