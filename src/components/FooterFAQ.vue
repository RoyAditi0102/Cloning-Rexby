<template>
  <section class="border-t border-gray-200 bg-[#f9f9f9] w-full py-20 px-6">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row">
      <!-- Left Side Heading -->
      <div class="md:w-1/3 mb-8 md:mb-0">
        <h2 class="text-2xl font-bold text-gray-900 leading-snug text-left">
          Your questions,<br />answered
        </h2>
      </div>

      <!-- Right Side FAQ Items -->
      <div class="md:w-2/3 divide-y divide-gray-200">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="py-6 cursor-pointer select-none"
        >
          <div
            class="w-full flex justify-between items-center text-left"
            @click="toggle(index)"
          >
            <span class="text-base text-gray-800 font-medium">
              {{ faq.question }}
            </span>
            <component
              :is="activeIndex === index ? ChevronUp : ChevronDown"
              class="w-5 h-5 text-gray-800"
            />
          </div>

          <div
            ref="faqRefs[index]"
            class="faq-answer overflow-hidden transition-all duration-500 ease-in-out"
            :style="activeIndex === index ? 'max-height:' + heights[index] + 'px' : 'max-height:0px'"
          >
            <div class="pt-3">
              <p class="text-sm text-gray-600 leading-relaxed text-left">
                {{ faq.answer }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { ChevronDown, ChevronUp } from 'lucide-vue-next'

const faqs = [
  {
    question: 'How do I access the Guide and Map?',
    answer:
      'You can sign in using your email address, Facebook, or Google account. The guide page, including the map, is accessible through your mobile or computer browser. Additionally, offline access is available via the Rexby app!'
  },
  {
    question: 'Do I need internet connection?',
    answer:
      'When you download the Rexby app and purchase my guide, you can access it offline. If you’re using a web browser, an internet connection is required.'
  },
  {
    question: 'How long will I have access?',
    answer: 'Once you buy access, it is forever.'
  },
  {
    question: 'Can I share it with my travel buddy?',
    answer: 'Yes, you can invite one travel buddy.'
  }
]

const activeIndex = ref(null)
const faqRefs = ref([])
const heights = ref([])

const toggle = async (index) => {
  activeIndex.value = activeIndex.value === index ? null : index
  await nextTick()
  calculateHeights()
}

const calculateHeights = () => {
  heights.value = faqRefs.value.map((el) =>
    el ? el.scrollHeight : 0
  )
}

onMounted(() => {
  faqRefs.value = Array(faqs.length)
  calculateHeights()
})
</script>
