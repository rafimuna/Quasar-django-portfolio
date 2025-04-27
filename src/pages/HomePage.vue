<template>
  <!-- Hero Section -->
  <section class="q-pa-xl text-center hero-section">
    <div>
      <h1 ref="heroHeading" class="text-h2 text-bold q-mb-sm">Hi, I am Rafi</h1>
      <p ref="heroSubtext" class="text-subtitle1 q-mt-sm">
        A passionate full-stack developer specializing in Django & Vue.js
      </p>
    </div>
    <div class="q-mt-lg">
      <q-btn
        ref="ctaBtn"
        label="Explore My Work"
        color="primary"
        glossy
        size="lg"
        @click="$router.push('/projects')"
      />
    </div>
  </section>

  <!-- Parallax Section -->
  <section ref="parallaxSection" class="parallax-section">
    <h2 class="text-h4 text-white text-center">Crafting Interactive Experiences</h2>
  </section>

  <!-- Projects Section -->
  <section ref="projectsSection" class="q-pa-xl text-center projects-section">
    <h2 class="text-h5 q-mb-md">Recent Projects</h2>
    <p class="text-subtitle1 text-grey-8">Discover some of the amazing things I’ve built!</p>
  </section>

  <!-- Banner -->
  <q-banner ref="banner" class="custom-banner text-white text-center q-mx-md q-mt-md">
    <div class="text-h5 q-mb-xs">
      <q-icon name="bolt" size="md" class="q-mr-sm text-yellow-4 animate-icon" />
      Let's build something <span class="text-bold text-accent">amazing</span> together!
    </div>
    <div class="text-subtitle2">Web Apps. APIs. Full-stack Solutions. Bring your idea to life.</div>
  </q-banner>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const heroHeading = ref(null)
const heroSubtext = ref(null)
const ctaBtn = ref(null)
const banner = ref(null)
const parallaxSection = ref(null)
const projectsSection = ref(null)

onMounted(() => {
  gsap.from(heroHeading.value, {
    opacity: 0,
    y: -50,
    duration: 1.2,
    ease: 'power2.out',
  })

  gsap.from(heroSubtext.value, {
    opacity: 0,
    y: -20,
    delay: 0.3,
    duration: 1.2,
    ease: 'power2.out',
  })

  gsap.from(ctaBtn.value, {
    opacity: 0,
    scale: 0.8,
    delay: 0.6,
    duration: 1,
    ease: 'back.out(1.7)',
  })

  gsap.from(banner.value, {
    opacity: 0,
    y: 50,
    duration: 1.2,
    delay: 1.2,
    ease: 'power2.out',
  })

  gsap.from(projectsSection.value, {
    scrollTrigger: {
      trigger: projectsSection.value,
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
    opacity: 0,
    y: 80,
    duration: 1.5,
    ease: 'power2.out',
  })

  gsap.to(parallaxSection.value, {
    backgroundPositionY: '40%',
    ease: 'none',
    scrollTrigger: {
      trigger: parallaxSection.value,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  })
})
</script>

<style scoped>
.hero-section {
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--q-color-background); /* Dark/Light Mode Respect করে */
  color: var(--q-color-text);
}

.parallax-section {
  height: 65vh;
  background-image: url('https://images.unsplash.com/photo-1518770660439-4636190af475');
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.8);
}

.projects-section {
  background-color: var(--q-color-page); /* Quasar theme aware background */
  border-radius: 14px;
}

.custom-banner {
  background: linear-gradient(135deg, #1e88e5, #42a5f5);
  padding: 24px 32px;
  border-radius: 18px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  font-weight: 500;
  transition: all 0.3s ease;
}
.custom-banner:hover {
  transform: scale(1.03);
  box-shadow: 0 15px 30px rgba(33, 150, 243, 0.5);
}

.animate-icon {
  animation: pulse 2s infinite;
}
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>
