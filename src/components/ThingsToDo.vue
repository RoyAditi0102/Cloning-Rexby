<template>
  <section class="max-w-[1200px] mx-auto px-6 py-16 grid md:grid-cols-[1fr_2fr] gap-8 items-start">
    <!-- Left text content -->
    <div class="text-left">
      <h2 class="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">161 things to do</h2>
      <p class="text-gray-500 text-[16px] leading-relaxed mb-4">
        Get a curated list of all the best things to do with exact location, detailed info and inspiring content
      </p>
      <a href="#" class="text-sm font-semibold underline hover:text-black">Preview for FREE</a>
    </div>

    <!-- Card Scroll -->
    <div class="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
      <!-- Activity Cards -->
      <div
        v-for="(item, index) in cards"
        :key="index"
        class="min-w-[250px] max-w-[300px] rounded-2xl overflow-hidden shadow-md bg-white shrink-0"
      >
        <img :src="item.image" alt="Place" class="w-full h-[350px] object-cover" />
        <div class="p-4">
          <div class="flex items-center text-sm text-gray-500 mb-1">
            <component :is="item.icon" class="w-4 h-4 mr-1" />
            {{ item.type }}
          </div>
          <h3 class="text-base font-semibold text-gray-800">{{ item.title }}</h3>
        </div>
      </div>

      <!-- Preview for FREE card -->
      <div
        class="min-w-[250px] max-w-[300px] rounded-2xl border-1 border border-gray-900 flex items-center justify-center text-center p-6 font-semibold text-gray-800 bg-white shrink-0 hover:shadow-md transition duration-300"
      >
        <a href="#" class="hover:underline">Preview for FREE</a>
      </div>
    </div>
  </section>
</template>


<script setup>
import { Camera, MapPin, Mountain, Binoculars } from 'lucide-vue-next';
const cards = [
  {
    image: '../assets/card-item-1.png',
    type: 'Sightseeing',
    icon: Binoculars,
    title: 'One of my favourite spots'
  },
  {
    image: '../assets/card-item-2.png',
    type: 'Sightseeing',
    icon: Binoculars,
    title: 'Swing with amazing views'
  },
  {
    image: '../assets/card-item-3.png',
    type: 'Hike',
    icon: Mountain,
    title: 'Beautiful view point'
  },
    {
    image: '../assets/card-item-4.png',
    type: 'Sightseeing',
    icon: Binoculars,
    title: 'Walk around a beautiful old fishing town'
  },
    {
    image: '../assets/card-item-5.png',
    type: 'Photospot',
    icon: Camera,
    title: 'Perfect drone Place'
  },

];
</script>
