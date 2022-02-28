<template>
  <div class="nav tw-flex">
    <a class="nav__logo tw-h-full tw-p-4" href="/">
      <img class="tw-h-full" src="@/assets/nav-logo.png">
    </a>
    <div class="tw-flex-1 tw-w-0 tw-h-full">
      <div class="tw-flex tw-justify-center tw-items-center tw-h-full">
        <div
          v-for="(link, index) in ['ABOUT', 'CHARACTERS', 'TEAM']"
          :key="index"
          class="tw-mr-10"
          @click="handleLink(link)">
          <div class="link tw-text-b-secondary tw-text-2xl tw-font-bold tw-cursor-pointer">
            {{ link }}
          </div>
        </div>
      </div>
    </div>
    <div class="nav__right tw-w-60" />
  </div>
</template>

<script setup>
import jump from 'jump.js'
const handleLink = (link) => {
  jump(`#${link}`)
}
</script>

<style lang="less" scoped>
  .nav {
    height: 70px;
    line-height: 70px;
    background-color: #08323e;
    .link {
      position: relative;
      &:before {
        content: "";
        position: absolute;
        left: 10%;
        bottom: -8px;
        width: 80%;
        height: 3px;
        background-color: transparent;
        transition: all .2s ease-in-out;
        opacity: 0;
      }
      &:hover {
        &:before {
          @apply tw-bg-b-secondary;
          opacity: 1;
        }
      }
    }
    &__logo, &__right {
      @media (max-width: 1000px) {
        display: none;
      }
    }
  }
</style>