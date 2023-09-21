<script setup>
import { RouterView } from 'vue-router'
import Header from './components/global/TheHeader.vue'
import Footer from './components/global/TheFooter.vue'
</script>

<template>
  <Header />

  <main class="text-black text-center mt-20">
    <RouterView />
  </main>

  <Footer />
</template>
