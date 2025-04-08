<script setup>
import Header from './components/Header.vue'
import HeroSection from './components/HeroSection.vue'
import InteractiveMap from './components/InteractiveMap.vue'
import ThingsToDo from './components/ThingsToDo.vue'
import ItinerarySection from './components/ItinerarySection.vue'
import BookingPageSection from './components/BookingPageSection.vue'
import FooterSection from './components/FooterSection.vue'
import FooterFAQ from './components/FooterFAQ.vue'
</script>

<template>
  <div class="min-h-screen bg-white text-black w-full">
    <Header />
    <HeroSection />
    <InteractiveMap />
    <ThingsToDo />
    <ItinerarySection />
    <BookingPageSection />
    <FooterSection />
    <FooterFAQ />
  </div>
</template>
