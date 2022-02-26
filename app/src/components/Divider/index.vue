<template>
  <div
    class="divider"
    :class="[`divider--type-${type}`]" />
</template>

<script setup>
defineProps({
  type: { type: [Number, String], default: 1 }
})
</script>

<style lang="less" scoped>
  .divider {
    background-size: cover;
    &--type-1 {
      background-image: url("./1.png");
      min-height: 40px;
    }
    &--type-2 {
      background-image: url("./2.png");
      min-height: 90px;
    }
  }
</style>
