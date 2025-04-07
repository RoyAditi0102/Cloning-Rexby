<template>
  <header
    :class="[
      'top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out',
      isSticky ? 'fixed bg-white shadow-md text-black' : 'absolute bg-white text-black'
    ]"
    aria-label="Main Header"
  >
    <nav class="flex items-center justify-between px-4 sm:px-6 py-4 max-w-[1400px] mx-auto font-sans">
      
      <!-- 🔄 Left Side -->
      <div class="text-[15px] sm:text-base font-semibold tracking-wide">
        <template v-if="isSticky">
          <a
            href="https://www.rexby.com/asasteinars/norway?modal=chat"
            target="_blank"
            rel="noopener noreferrer"
            class="underline"
            aria-label="Ask a question"
          >
            Unclear? Ask me a question
          </a>
        </template>

        <template v-else>
          <div class="flex items-center gap-2">
            <img
              src="../assets/rexby-logo.png"
              alt="Rexby Logo"
              class="h-8 w-auto"
              aria-hidden="true"
            />
          </div>
        </template>
      </div>

      <!-- 🔄 Right Side -->
      <div class="flex items-center gap-3 sm:gap-4 text-[15px] sm:text-base">
        <template v-if="isSticky">
          <button
            class="px-4 py-2 border border-black rounded transition-all duration-200 ease-in-out"
            aria-label="Preview"
          >
            Preview
          </button>
          <button
            class="w-full text-base font-semibold px-4 py-2 bg-gradient-to-r from-sky-500 to-cyan-700 text-white rounded hover:opacity-90 transition text-center"
            aria-label="GET ACCESS"
          >
            Get Access
          </button>
        </template>

        <template v-else>
          <!-- Log In -->
          <button
            class="px-3 py-1 bg-white border border-gray-300 text-black rounded transition-none"
            aria-label="Log In"
          >
            Log In
          </button>

<!-- 🌐 Language Selector -->
<div class="flex items-center gap-2 cursor-pointer hover:opacity-80 transition">
  <Globe class="w-5 h-5 text-gray-400" />
</div>


          <!-- Menu Icon -->
          <button
            class="text-xl p-1 text-gray-400 transition-none"
            title="Menu"
            aria-label="Menu"
          >
            ☰
          </button>
        </template>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isSticky = ref(false)

const handleScroll = () => {
  isSticky.value = window.scrollY > 480
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

import { Globe } from 'lucide-vue-next';
</script>

<style scoped>
header, button, a {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
}
</style>
