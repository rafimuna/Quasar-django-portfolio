<template>
  <q-page class="q-pa-md">
    <!-- হেডার অংশ -->
    <div class="text-center q-mt-xl">
      <h1 class="text-h4 text-primary text-bold">My Projects</h1>
      <p class="text-subtitle2 text-grey-7">Some of the projects I’ve worked on recently</p>
    </div>

    <div class="q-my-xl">
      <q-separator spaced />
    </div>

    <!-- প্রজেক্ট কার্ড গ্রিড -->
    <div ref="projectGrid" class="row q-col-gutter-lg q-mt-lg justify-center">
      <!-- প্রতিটা প্রজেক্ট কার্ড -->
      <q-col v-for="n in 6" :key="n" cols="12" sm="6" md="4" class="project-card">
        <q-card class="q-hoverable" bordered>
          <!-- ইমেজ -->
          <q-img src="https://via.placeholder.com/300x200" alt="Project Image" ratio="16/9" />

          <q-card-section>
            <div class="text-h6">Project {{ n }}</div>
            <div class="text-caption text-grey-7">
              A short description of the project goes here.
            </div>
          </q-card-section>

          <q-card-actions align="right">
            <q-btn flat label="View" color="primary" />
          </q-card-actions>
        </q-card>
      </q-col>
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from 'vue'

import { gsap } from 'gsap'

// 🔗 প্রজেক্ট গ্রিড DOM element রেফারেন্স
const projectGrid = ref(null)

onMounted(() => {
  // 🌀 সব প্রজেক্ট কার্ডে ফেইড-ইন + স্লাইড আপ অ্যানিমেশন অ্যাপ্লাই করি
  gsap.from(projectGrid.value.children, {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2, // একটার পর একটা আসবে
    ease: 'power2.out',
  })
})
</script>

<style scoped>
/* কার্ড hover effect একটু enhance করা হয়েছে */
.q-card:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  transition: box-shadow 0.3s ease;
}
</style>
