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
  About Us
</h3>


</div>

</section>


<!-- Company Info Section -->
<section class="w-full max-w-7xl mx-auto mt-10 p-6">
    <div class="text-center mb-8">
      <h2 class="text-4xl font-bold text-gray-800 mb-4">Who We Are</h2>
    </div>

    <div class="flex justify-center">
      <div class="w-full lg:w-4/5">
        <p class="text-gray-600 text-lg leading-relaxed">
          Deutsche Partners Holding (DPH) is an independently owned financial services group with core expertise in Asset Management, Investment Banking, Private Equity, Securities, and Trusteeship. DPH is deeply committed to the success, development, and sustainable growth of its clients and their assets. <br /><br />
          
          We design and deliver value driven solutions that are tailored to the specific objectives and requirements of each client. Our clientele is diverse and includes financial institutions, corporations, private clients, and government entities. We are duly licensed and registered by the Securities and Exchange Commission as Fund and Portfolio Managers, an Issuing House, and an Investment Adviser, among other approvals. These licenses enable us to provide a comprehensive range of financial services to individuals, corporates, financial institutions, and high net worth clients.
        </p>
      </div>
    </div>
</section>

    
 <!---Mission and Vision section-->
<section class= "w-full max-w-7xl mx-auto mt-10 p-6">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <!-- Mission Box -->
        <div class="bg-white p-10 rounded-lg shadow-lg border-t-4 border-green-600 w-100  h-100 mt-6 ml-20">
            <div class="flex flex-col items-center mb-6">
                <!-- <div class="bg-green-100 p-3 rounded-lg mr-4"> -->
                    <!-- You can add an icon here if needed -->
                    <!-- <div class="w-6 h-6 bg-green-600 rounded-full"></div> -->
                <!-- </div> -->
                <h3 class="text-2xl font-bold text-black text-center">Our Mission</h3>
            </div>
            <p class=" text-black leading-relaxed text-center">
               To provide creative <br />
               world class financial <br />
               services and investment <br />
               solutions that are ethical, <br/>
               innovative, and driven towards <br/>
                wealth creation for our clients.
            </p>
        </div>

        <!-- Vision Box -->
        <div class="bg-white p-8 rounded-lg border-t-4 border-blue-600 w-100 h-100 mt-6 ml-10 shadow-md hover:shadow-md ">
            <div class="flex  flex-col items-center mb-6">
                <!-- <div class="bg-green-100 p-3 rounded-lg mr-4"> -->
                    <!-- You can add an icon here if needed -->
                    <!-- <div class="w-6 h-6 bg-blue-800 rounded-full"></div> -->
                <!-- </div> -->
                <h3 class="text-2xl font-bold text-black">Our Vision</h3>
            </div>
            <p class="text-black leading-relaxed text-center">
                To become the leading<br />
                Integrated Investment<br />
                Management firm in Africa<br />
                and a partner of national<br />
                wealth creators.
            </p>
        </div>

    </div>
</section>
<!---End Mission and Vision section-->


<!---Core Value Section-->
<section class="w-full max-w-7xl mx-auto mt-10 p-6">
 <div class="text-center mb-8">
      <h2 class="text-4xl font-bold text-gray-800 mb-4">Our Core Values</h2>
    </div>

    <p class="text-gray-600 text-lg leading-relaxed text-center">
        DPH has six Core Values That are entranced in our everyday dealings. <br />
        They Describe the Foundation of Our Approach with each other, <br />
        Our responsibility, Our client and towards our company
    </p>
</section>

<!---Core Value Boxes-->
<!---Core Value Boxes-->
<section class="w-4/5 max-w-7xl mx-auto mt-10 p-6">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

    <!-- Accountability -->
    <div class="bg-white rounded-2xl p-7 border border-green-400 shadow-md hover:shadow-md hover:shadow-green-700/70">
        <i class='fas fa-award text-green-600 text-4xl block mx-auto mb-3 ml-27'></i>
      <!-- <i class="fas fa-medal "></i> -->
      <h3 class="text-xl font-bold text-green-700 mb-4 text-center">Accountability</h3>
      <p class="text-gray-600 leading-relaxed text-center">
       Our directors and management team clearly recognize their responsibility for all decisions and actions. <br /> 
       They remain fully accountable to all 
       stakeholders and are open to assessment in line with established codes of ethics and professional conduct. <br />
       At all times, we are committed to making sound, ethical, and responsible professional decisions.
      </p>
    </div>

    <!-- Excellence -->
    <div class="bg-white rounded-2xl p-7 border border-blue-400 shadow-md hover:shadow-md hover:shadow-blue-700/70">
      <i class="fas fa-medal text-blue-600 text-4xl block mx-auto mb-3 ml-27"></i>
      <h3 class="text-xl font-bold text-blue-700 mb-4 text-center">Excellence</h3>
      <p class="text-gray-600 leading-relaxed text-center">
        We deliver top quality advisory services through comprehensive and personalized engagement, consistently anticipating and exceeding client expectations. <br />
        Through innovation, we embrace change and demonstrate adaptability, flexibility, <br />
        and creativity in responding to evolving market and client needs.
      </p>
    </div>

    <!-- Customer Focus -->
    <div class="bg-white rounded-2xl p-10 border border-green-400 shadow-md hover:shadow-md hover:shadow-green-700/70">
      <!-- <i class="fas fa-medal t"></i> -->
       <i class='far fa-user-circle ext-green-600 text-4xl block mx-auto mb-3 ml-24'></i>
      <h3 class="text-xl font-bold text-gray-800 mb-4 text-center">Customer Focus</h3>
      <p class="text-gray-600 leading-relaxed text-center">
       We are committed to building a customer focused culture, <br />
       recognizing that exceptional service delivery and high levels of client satisfaction create sustainable value for both shareholders and customers. <br />
       We treat every client with care, respect, and professionalism.
      </p>
    </div>

    <!-- Integrity -->
    <div class="bg-white rounded-2xl p-7 border border-green-400 shadow-md hover:shadow-md hover:shadow-green-700/70">
      <!-- <i class="fas fa-medal "></i> -->
       <i class='fas fa-shield-alt text-green-600 text-4xl block mx-auto mb-3 ml-27'></i>
      <h3 class="text-xl font-bold text-green-700 mb-4 text-center">Integrity</h3>
      <p class="text-gray-600 leading-relaxed text-center">
       Our business is founded on unwavering principles of honesty, trust, dependability, and reliability. <br />
       We uphold transparency and straightforwardness in all client interactions and service delivery at all times.
      </p>
    </div>

    <!-- Social Responsibility -->
    <div class="bg-white rounded-2xl p-10 border border-blue-400 shadow-md hover:shadow-md hover:shadow-blue-700/70">
      <!-- <i class="fas fa-medal "></i> -->
       <i class='fas fa-users text-blue-600 text-4xl block mx-auto mb-3 ml-24'></i>
      <h3 class="text-xl font-bold text-blue-700 mb-4 text-center">Social Responsibility</h3>
      <p class="text-gray-600 leading-relaxed text-center">
        In fulfilling our social responsibility, <br />
        we are committed to preserving the environment and cultural heritage, <br />
        supporting community development, 
        promoting human rights, and supporting the transition to a green and sustainable economy.

      </p>
    </div>

    <!---->
      <div class="bg-white rounded-2xl p-10 border border-green-400 shadow-md hover:shadow-md hover:shadow-green-700/70">
   <i class='fas fa-eye text-green-600 text-2xl block mx-auto mb-3 ml-25'></i>
      <h3 class="text-xl font-bold text-gray-800 mb-4 text-center">Transparency</h3>
      <p class="text-gray-600 leading-relaxed text-center">
     Transparency is a fundamental principle guiding our decisions and policies. <br />
     We ensure timely, accurate, and appropriate disclosure <br />
    of information to all stakeholders, including regulators, shareholders, and investors.

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