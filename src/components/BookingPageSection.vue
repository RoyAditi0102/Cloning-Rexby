<template>
  <section class="max-w-[1200px] mx-auto px-6 py-16 grid md:grid-cols-[1fr_2fr] gap-8 items-start">
    <!-- Left Text Content -->
    <div class="text-left">
      <h2 class="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">Booking Page</h2>
      <p class="text-gray-500 text-[16px] leading-relaxed">
        Get a curated list of reliable options when booking tours, hotels, and car rentals.
      </p>
    </div>

    <!-- Booking Cards Carousel -->
    <div class="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
      <div
        v-for="(booking, index) in bookings"
        :key="index"
        class="relative min-w-[250px] h-[400px] rounded-2xl overflow-hidden shadow-md bg-white shrink-0"
      >
        <img :src="booking.image" :alt="booking.title" class="w-full h-full object-cover" />
        
        <!-- Text Container -->
        <div class="absolute bottom-4 left-4 right-4 bg-white bg-opacity-80 backdrop-blur-md rounded-xl p-3 text-left">
          <p class="text-xs text-gray-500 mb-1">{{ booking.type }}</p>
          <p class="text-sm font-semibold text-gray-800">{{ booking.title }}</p>
        </div>
      </div>
      <div
        class="min-w-[250px] max-w-[300px] rounded-2xl border-1 border border-gray-900 flex items-center justify-center text-center p-6 font-semibold text-gray-800 bg-white shrink-0 hover:shadow-md transition duration-300"
      >
        <a href="#" class="hover:underline">Preview for FREE</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

// Sample booking data
const bookings = ref([
  {
    image: '/assets/active-geiranger.jpg',
    type: 'Activity',
    title: 'Active Geiranger',
  },
  {
    image: '/assets/jolstraholmen-camping.jpg',
    type: 'Stay',
    title: 'Jølstraholmen Camping & Cottages',
  },
  {
    image: '/assets/floating-sauna.jpg',
    type: 'Sauna',
    title: 'Floating Sauna Fjaerland',
  },
  {
    image: '/assets/a-camp.jpg',
    type: 'Camp',
    title: 'Å camp',
  },
  {
    image: '/assets/manhausen.jpg',
    type: 'Resort',
    title: 'Manshausen',
  },
]);
</script>

<style scoped>
/* Hide scrollbar for all browsers */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
