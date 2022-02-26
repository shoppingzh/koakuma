<template>
  <div class="nav tw-flex">
    <a class="tw-h-full tw-p-4">
      <img class="tw-h-full" src="@/assets/nav-logo.png">
    </a>
    <div class="tw-flex-1 tw-w-0 tw-h-full">
      <div class="tw-flex tw-justify-center tw-h-full">
        <div
          v-for="(link, index) in ['ABOUT', 'CHARACTERS', 'TEAM']"
          :key="index"
          class="link tw-mr-10 tw-text-b-secondary tw-text-2xl tw-font-bold tw-cursor-pointer">
          {{ link }}
        </div>
      </div>
    </div>
    <div class="tw-w-60" />
  </div>
</template>

<style lang="less" scoped>
  .nav {
    height: 70px;
    line-height: 70px;
    background-color: #08323e;
    .link {
      line-height: 70px;
    }
  }
</style>