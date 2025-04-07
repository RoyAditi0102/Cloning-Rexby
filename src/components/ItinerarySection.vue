<template>
  <section class="max-w-[1200px] mx-auto px-6 py-16 grid md:grid-cols-[1fr_2fr] gap-8 items-start">
    <!-- 📝 Left Text -->
    <div class="text-left">
      <h2 class="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">1 itinerary</h2>
      <p class="text-gray-500 text-[16px] leading-relaxed mb-4">
        Get expertly curated itineraries that help you organise all the 'things to do' in an ideal time order
      </p>
      <a href="#" class="text-sm font-semibold underline hover:text-black">Preview for FREE</a>
    </div>

    <!-- 🧱 Cards Section -->
    <div class="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
      <!-- 1️⃣ Icon Card -->
      <div class="w-[240px] h-[340px] bg-white rounded-2xl p-6 shadow-md flex flex-col justify-center items-center text-center shrink-0">
        <WrenchIcon class="w-10 h-10 text-blue-600 mb-4" />
        <h3 class="text-base font-semibold text-gray-800">
          Itinerary Builder:<br />
          Create your own Itinerary
        </h3>
      </div>

      <!-- 2️⃣ Image Card -->
<div class="w-[240px] h-[340px] bg-white rounded-2xl overflow-hidden shadow-md relative shrink-0">
  <img
    src="../assets/lofoten.jpg"
    alt="Lofoten Road Trip"
    class="w-full h-full object-cover"
  />
  <div class="absolute bottom-0 left-0 w-full bg-black/10 p-4 text-white">
    <h3 class="text-base text-left">Day 8</h3>
    <p class="text-base text-left">Lofoten Road Trip</p>
  </div>
</div>

      <!-- 3️⃣ Preview Card -->
      <div
        class="min-w-[250px] max-w-[300px] rounded-2xl border-1 border border-gray-900 flex items-center justify-center text-center p-6 font-semibold text-gray-800 bg-white shrink-0 hover:shadow-md transition duration-300"
      >
        <a href="#" class="hover:underline">Preview for FREE</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { WrenchIcon } from '@heroicons/vue/24/outline'
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
