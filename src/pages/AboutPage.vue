<template>
  <q-page class="q-pa-md">
    <div ref="aboutSection" class="q-mt-xl text-center">
      <h1 ref="heading" class="text-h4 text-primary q-mb-sm">👋 আমার সম্পর্কে</h1>
      <p class="text-subtitle1 text-grey-7 q-mx-auto" style="max-width: 600px">
        আমি একজন Full-Stack Web Developer, Vue.js ও Django-তে দক্ষ। আমি pixel-perfect UI বানাতে
        পছন্দ করি এবং REST API ও Backend development-এও কাজ করি।
      </p>
    </div>

    <div class="q-my-xl">
      <q-separator spaced />
      <div class="text-h5 text-center text-bold q-mb-md">💼 আমার স্কিলস</div>

      <div ref="chips" class="row justify-center q-gutter-md">
        <q-chip color="primary" text-color="white" icon="code">HTML</q-chip>
        <q-chip color="primary" text-color="white" icon="palette">CSS</q-chip>
        <q-chip color="primary" text-color="white" icon="integration_instructions"
          >JavaScript</q-chip
        >
        <q-chip color="primary" text-color="white" icon="widgets">Vue.js</q-chip>
        <q-chip color="primary" text-color="white" icon="dashboard">Quasar</q-chip>
        <q-chip color="primary" text-color="white" icon="storage">Pinia</q-chip>

        <q-chip color="deep-orange" text-color="white" icon="terminal">Python</q-chip>
        <q-chip color="deep-orange" text-color="white" icon="dns">Django</q-chip>

        <q-chip color="primary" text-color="white" icon="cloud">Git & GitHub</q-chip>
      </div>
    </div>

    <q-separator spaced />
    <div class="text-center text-caption text-grey-6 q-mt-md">
      আমি প্রতিনিয়ত নতুন কিছু শিখছি এবং নিজেকে উন্নত করার চেষ্টা করছি।
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

// DOM রেফারেন্স নিচ্ছি
const heading = ref(null)
const chips = ref(null)

onMounted(() => {
  // h1 হেডিং আস্তে fade in করবে ও নিচ থেকে উঠবে
  gsap.from(heading.value, {
    opacity: 0,
    y: -30,
    duration: 1,
    ease: 'power2.out',
  })

  // প্রতিটি স্কিল chip এক এক করে আসবে একটু delay সহ
  gsap.from(chips.value.children, {
    opacity: 0,
    y: 50,
    duration: 0.6,
    stagger: 0.1,
    ease: 'back.out(1.7)',
  })
})
</script>

<style scoped></style>
