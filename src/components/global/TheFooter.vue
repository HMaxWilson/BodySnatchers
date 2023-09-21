<template>
  <footer class="bg-black border-t border-gray-500 text-gray-400">
    <div class="container mx-auto py-4 px-4">
      <div class="flex flex-wrap items-center justify-between">
        <div class="flex flex-wrap mx-auto sm:mx-0 text-sm justify-around">
          <a href="/">
            <img
                class="p-1 rounded-lg bg-white bg-opacity-50 hover:bg-opacity-100"
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/facebook.svg"
                width="32"
                height="32"
            />
          </a>
          <a href="/" class="px-4">
            <img
                class="p-1 rounded-lg bg-white bg-opacity-50 hover:bg-opacity-100"
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/instagram.svg"
                width="32"
                height="32"
            />
          </a>
          <a href="/">
            <img
                class="p-1 rounded-lg bg-white bg-opacity-50 hover:bg-opacity-100"
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/twitter.svg"
                width="32"
                height="32"
            />
          </a>
        </div>
        <div class="hidden sm:block text-sm">
          Phone: <a class="opacity-80 hover:opacity-100" href="tel:07879530701">07879 530701</a> <br/>
          Email: <a class="opacity-80 hover:opacity-100" href="mailto:map72@live.co.uk">map72@live.co.uk</a>
        </div>
      </div>
      <div class="text-center py-2">
        &copy; BodySnatchers Boxing 2019 - 2023 <br>
        <a class="inline-block opacity-30 hover:opacity-100" href="https://www.AstroNomad.co.uk/" target="_blank">AstroNomad x Design</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>