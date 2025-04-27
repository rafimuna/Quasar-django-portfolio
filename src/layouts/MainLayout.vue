<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated="2" class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>My_Portfolio_App</q-toolbar-title>

        <q-btn flat label="Home" to="/" />
        <q-btn flat label="Projects" href="#projects" />
        <q-btn flat label="About" href="#About" />
        <q-btn flat label="Contact" href="#contact" />

        <q-btn
          flat
          dense
          icon="brightness_6"
          @click="toggleDarkMode"
          :label="$q.dark.isActive ? 'Light' : 'Dark'"
          class="q-ml-md"
        />
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
    <AppFooter />
  </q-layout>
</template>
<script setup>
import AppFooter from 'src/components/AppFooter.vue'
import { useQuasar } from 'quasar'
const $q = useQuasar()
function toggleDarkMode() {
  $q.dark.set(!$q.dark.isActive)
}
</script>
