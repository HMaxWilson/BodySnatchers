<template>
  <InstagramFeed
      :count="6"
      accessToken="{{ REDACTED }}"
      :pagination="true"
      :caption="true"
      class="max-w-screen text-white"
  />
</template>

<style>
.instagram-gallery-item{
  transition: transform 0.3s ease-in-out;
}
.instagram-gallery-item:hover {
  transform: scale(1.1);
}



@media screen and (max-width: 460px){
  .instagram-gallery-item{
    flex: unset !important;
  }
}
</style>