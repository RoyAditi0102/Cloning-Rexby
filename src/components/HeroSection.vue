<template>
  <section class="max-w-[1200px] mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-2 items-center font-sans">
    <!-- 🖼️ Left Image -->
    <div class="flex justify-center">
      <img
        src="../assets/hero-bg.png"
        alt="Norway Landscape"
        class="rounded-2xl shadow-lg object-cover max-w-[360px] aspect-[3/4]"
      />
    </div>

    <!-- 📝 Right Content -->
    <div class="text-left">
      <h1 class="text-4xl font-extrabold text-gray-900 mb-4">
        Norway Guide
      </h1>

      <!-- 👤 Guide Info -->
      <div class="flex items-center flex-wrap gap-2 text-gray-600 text-sm mb-4">
        <img
          src="../assets/profile.png"
          alt="Profile"
          class="w-9 h-9 rounded-full"
        />
        <span>Guide by <strong>Ása Steinars</strong></span>
        <span>· Norway</span>
        <span>· ⭐ New</span>
      </div>

      <!--  Paragraph -->
      <p class="text-gray-700 leading-relaxed mb-3 text-[15px]">
        Norway is my second home. I was born in Norway and I lived there until I was 7 years old.
        I often come back and I love this country almost as much as Iceland. Last summer I spent
        3 months on the road with my van exploring everything from the south tip up to Lofoten.
      </p>
      <p class="text-gray-700 leading-relaxed mb-6 text-[15px]">
        This guide is my best tips for Norway to make sure you get the most out of your trip.
        It's focused around the fjords in the west and Lofoten in the north. In my opinion,
        it's the best areas to explore in Norway.
      </p>

<!-- Buttons -->
<div class="w-full flex flex-col items-center gap-4 border-t pt-6">
  <div class="flex flex-col md:flex-row w-full gap-4 max-w-[600px]">
    <button
      class="w-full text-base font-semibold px-6 py-4 border border-black rounded hover:bg-black hover:text-white transition text-center"
    >
      Preview
    </button>
    <button
      class="w-full text-base font-semibold px-6 py-4 bg-gradient-to-r from-sky-500 to-cyan-700 text-white rounded hover:opacity-90 transition text-center"
    >
      GET ACCESS
    </button>
  </div>

  <span class="text-sm text-gray-400 text-center">
    Used for <strong>100+</strong> trips
  </span>
</div>
</div>
</section>

<!-- 🌟 Features Section -->
<section class="max-w-[1000px] mx-auto px-6 py-12 border-t border-gray-200">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-gray-700 text-base font-medium">
      <div class="flex items-center gap-3">
        <MapPin class="w-5 h-5 text-gray-600" />
        <span>161 things to do</span>
      </div>
      <div class="flex items-center gap-3">
        <Map class="w-5 h-5 text-gray-600" />
        <span>Interactive Map</span>
      </div>
      <div class="flex items-center gap-3">
        <ListTree class="w-5 h-5 text-gray-600" />
        <span>1 itinerary</span>
      </div>
      <div class="flex items-center gap-3">
        <Send class="w-5 h-5 text-gray-600" />
        <span>Priority in chat</span>
      </div>
      <div class="flex items-center gap-3">
        <Download class="w-5 h-5 text-gray-600" />
        <span>Offline usage in app</span>
      </div>
      <div class="flex items-center gap-3">
        <Route class="w-5 h-5 text-gray-600" />
        <span>Itinerary Builder access</span>
      </div>
    </div>
  </section>
  <section class = "border-t border-gray-200"></section>
</template>

<style scoped>
/* Use a cleaner font like Inter or Manrope if available */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap');

section {
  font-family: 'Inter', sans-serif;
}
</style>

<script setup>
import {
  MapPin,
  Map,
  ListTree,
  Send,
  Download,
  Route
} from 'lucide-vue-next';
</script>