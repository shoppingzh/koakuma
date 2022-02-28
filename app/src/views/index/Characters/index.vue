<template>
  <div class="wrap">
    <Divider type="2" />

    <!-- 图片 -->
    <a-row>
      <a-col
        :xs="{ span: 24, offset: 0 }"
        :sm="{ span: 22, offset: 1 }"
        :md="{ span: 20, offset: 2 }"
        :lg="{ span: 18, offset: 3 }">
        <div class="tw-flex tw-items-center tw-justify-center">
          <div class="tw-flex tw-items-center tw-justify-center">
            <div
              v-for="(item, index) in items"
              :key="index"
              class="image-wrap tw-px-1"
              @click="chooseIndex = index">
              <img :src="item.normal">  
            </div>
          </div>
        </div>
      </a-col>
    </a-row>

    <!-- 遮罩 -->
    <div class="overlay" />

    <!-- 内容 -->
    <div class="tw-relative tw-z-10">
      <div class="title w-z-20 tw-overflow-hidden">CHARACTERS</div>
      <a-row v-if="choose" class="tw-mt-10">
        <a-col
          :xs="{ span: 22, offset: 1 }"
          :md="{ span: 14, offset: 0 }">
          <div class="tw-flex tw-justify-center">
            <div class="tw-p-5" style="max-width: 400px;">
              <div class="tw-text-6xl tw-text-b-secondary tw-font-bold">{{ choose.name }}</div>
              <div class="tw-mt-8 tw-text-xl tw-text-b-secondary tw-font-bold tw-leading-6">
                {{ choose.desc }}
              </div>
              <div class="tw-mt-3">
                <div
                  v-for="(type, index) in ['ATK', 'DEF', 'AGI', 'INT']"
                  :key="index"
                  class="tw-flex tw-mb-2">
                  <div class="tw-mr-20 tw-text-b-secondary tw-font-medium tw-text-lg">{{ type }}</div>
                  <div style="width: 300px;">
                    <a-progress
                      size="small"
                      :percent="30"
                      :show-info="false"
                      stroke-color="rgb(255, 252, 214)"
                      trail-color="rgba(255, 255, 255, .5)"
                      stroke-linecap="square" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a-col>
        <a-col
          :xs="{ span: 22, offset: 1 }"
          :md="{ span: 10, offset: 0 }"
          class="tw-text-left">
          <img :src="choose.active" class="tw-inline" style="max-width: 400px;">
        </a-col>
      </a-row>
    </div>

  </div>
</template>

<script setup>
import c1 from '@/assets/c1.png'
import c2 from '@/assets/c2.png'
import c3 from '@/assets/c3.png'
import c4 from '@/assets/c4.png'
import c5 from '@/assets/c5.png'
import c6 from '@/assets/c6.png'
import c1a from '@/assets/c1a.png'
import c2a from '@/assets/c2a.png'
import c3a from '@/assets/c3a.png'
import c4a from '@/assets/c4a.png'
import c5a from '@/assets/c5a.png'
import c6a from '@/assets/c6a.png'
import { computed, ref } from 'vue'

const items = [
  {
    name: 'Casey',
    desc: 'Casey is an indifferent hunter who is always alone and always seems to be hostile to others',
    normal: c1,
    active: c1a,
    able: [50, 40, 30, 50]
  },
  {
    name: 'Lynn',
    desc: `Lynn was born with the blood of the witch family flowing through her body, who was born to manipulate magic. Lynn can combine various spells to create her own special abilities.`,
    normal: c2,
    active: c2a,
    able: [50, 40, 30, 50]
  },
  {
    normal: c3
  },
  {
    normal: c4
  },
  {
    normal: c5
  },
  {
    normal: c6
  }
]
const chooseIndex = ref(0)
const choose = computed({
  get() {
    return items[chooseIndex.value]
  },
  set(newVal) {
    if (!newVal) return
    chooseIndex.value = items.findIndex(o => o.name === newVal.name)
  }
})
</script>


<style lang="less" scoped>
  .wrap {
    position: relative;
    background-image: url("@/assets/bg2.jpg");
    background-repeat: repeat;
    overflow: hidden;
  }
  .image-wrap {
    height: 500px;
    img {
      height: 100%;
      object-fit: contain;
    }
  }
  .inner-wrap {
    position: relative;
  }

  :deep {
    .ant-progress-inner {
      border-radius: 0;
      .ant-progress-bg {
        height: 20px!important;
      }
    }
  }
  .overlay {
    position: absolute;
    left: 0;
    right: 0;
    top: 360px;
    bottom: 0;
    background-image: url("@/assets/bg3.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
</style>