<template>
  <header class="h-20 text-white bg-black border-b-2 border-gray-900 shadow-lg fixed left-0 right-0 transition-all duration-700 ease-in-out"
          :class="{'-translate-y-[125%]': scrolled}">
    <div class="container mx-auto">
      <div class="w-full flex justify-between text-sm font-medium leading-5">
        <div class="hidden sm:block my-auto w-1/3">
          <ul class="flex flex-wrap justify-start">
            <li class="px-3 py-1 hover:font-bold"><RouterLink to="/">Timetable</RouterLink></li>
            <li class="px-3 py-1 hover:font-bold"><RouterLink to="/about">Coaches</RouterLink></li>
          </ul>
        </div>
        <div class="w-1/3 flex justify-start sm:justify-center">
          <RouterLink to="/">
            <img class="relative sm:-bottom-5" src="https://placehold.co/80x80" alt="BodySnatchers Logo" width="80" height="80">
          </RouterLink>
        </div>
        <div class="hidden sm:block my-auto w-1/3">
          <ul class="flex flex-wrap justify-end">
            <li class="px-3 py-1 hover:font-bold"><RouterLink to="/">Gallery</RouterLink></li>
            <li class="px-3 py-1 hover:font-bold"><RouterLink to="/about">About</RouterLink></li>
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