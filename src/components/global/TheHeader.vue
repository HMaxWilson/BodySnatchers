<template>
  <header class="px-6 h-20 text-white bg-black border-b-2 border-gray-900 shadow-lg fixed left-0 right-0 transition-all duration-200 ease-in-out z-20"
          :class="{'-translate-y-[135%]': scrolled}">
    <div class="container mx-auto">
      <div class="w-full flex justify-between text-sm font-medium leading-5">
        <div class="flex h-20">
          <RouterLink to="/">
            <img class="h-full" src="@/assets/logo.png" alt="BodySnatchers Logo">
          </RouterLink>
        </div>
        <div class="hidden sm:block my-auto">
          <ul class="flex">
            <li class="px-3 py-1 hover:font-bold"><RouterLink to="/">Home</RouterLink></li>
            <li class="px-3 py-1 hover:font-bold"><RouterLink to="/gallery">Gallery</RouterLink></li>
          </ul>
        </div>


        <MobileMenu class="justify-end z-30" />
      </div>
    </div>
  </header>
</template>

<script setup>
import MobileMenu from "@/components/global/MobileMenu.vue";
import { RouterLink } from 'vue-router'
import { onBeforeMount, onBeforeUnmount, ref } from 'vue';

let lastPosition = ref(0);
let scrolled = ref(false);
const limitPosition = 40;

function handleScroll() {
  if (lastPosition.value < window.scrollY && limitPosition < window.scrollY) { scrolled.value = true; }
  if (lastPosition.value > window.scrollY) { scrolled.value = false; }

  lastPosition.value = window.scrollY
}

onBeforeMount(() => { window.addEventListener("scroll", handleScroll); });
onBeforeUnmount(() => { window.removeEventListener("scroll", handleScroll); });
</script>