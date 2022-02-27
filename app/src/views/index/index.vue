<template>
  <Nav />

  <div class="video-wrap">
    <!-- TODO: 暂时用图片代替 -->
    <!-- <video
      :src="videoUrl"
      class="tw-w-full tw-h-full tw-object-cover"
      muted
      autoplay
      loop
      playsinline
      webkit-playsinline
      x-webkit-airplay="allow"
      x5-video-player-type="h5-page"
      x5-video-orientation="portraint" /> -->
      <img src="@/assets/temp.png" class="tw-w-full tw-h-full tw-object-cover">
  </div>
  <About id="ABOUT" />

  <Characters id="CHARACTERS" />

  <CoreTeam id="TEAM" />

  <End />

  <Footer />
</template>

<script setup>
import About from './About/index.vue'
import Characters from './Characters/index.vue'
import CoreTeam from './CoreTeam/index.vue'
import End from './End/index.vue'
import Footer from './Footer/index.vue'
import videoUrl from '@/assets/1.mp4'
</script>

<style lang="less" scoped>
  .video-wrap {
    height: 600px;
    background-color: #153f4f;
  }
  
</style>
