<template>
  <button class="b-button">
    <slot />
  </button>
</template>

<script setup>
const props = defineProps({
  type: { type: String, default: null },
  size: { type: String, default: null }
})
</script>

<style lang="less" scoped>
  .b-button {
    border-radius: 18px;
    transition: transform .2s ease-in-out;
    &, &--primary {
      color: #fff;
      background-color: #019888;
      padding: 20px 50px;
      @apply tw-font-bold tw-text-2xl;
      box-shadow: 0 0 3px rgba(0, 0, 0, .5), 3px 3px 5px 3px rgba(0, 0, 0, .35);
    }
    &:hover {
      opacity: 0.95;
      transform: translate(-2px, -2px);
    }
  }
</style>
