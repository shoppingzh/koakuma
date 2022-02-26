<template>
  <div class="wrap">
    <Divider type="2" />

    <div class="title tw-mb-10 tw-py-20">CORE TEAM</div>

    <a-row>
      <a-col
        :lg="{ span: 22, offset: 1 }"
        :xl="{ span: 22, offset: 1 }">
        <a-row justify="center">
          <a-col
            v-for="(item, index) in items"
            :key="index"
            :xs="12"
            :lg="8"
            :xl="6"
            class="tw-mb-20">
            <div class="tw-text-center">
              <div style="height: 200px;">
                <img :src="item[2]" class="tw-inline tw-w-full tw-h-full tw-object-contain">
              </div>
              <div class="tw-mt-3 tw-text-4xl tw-text-yellow-100 tw-font-bold">{{ item[0] }}</div>
              <div class="tw-mt-2 tw-text-b-primary tw-text-xl tw-font-bold">{{ item[1] }}</div>
            </div>
          </a-col>
        </a-row>
      </a-col>
    </a-row>
  </div>
</template>

<script setup>
import t1 from '@/assets/t1.png'
import t2 from '@/assets/t2.png'
import t3 from '@/assets/t3.png'
import t4 from '@/assets/t4.png'
import t5 from '@/assets/t5.png'
import t6 from '@/assets/t6.png'
import t7 from '@/assets/t7.png'
import t8 from '@/assets/t8.png'

const items = [
  ['Karasu', 'CEO / Founder', t1],
  ['Stephen', 'Lead Artist / Co-Founder', t2],
  ['Parker', 'Lead Game Designer', t3],
  ['Miyo', 'Marketing Manager', t4],
  ['Rayn', 'Concept Artist', t5],
  ['Michael', '3D Designer', t6],
  ['Henry', 'Sound Designer', t7],
  ['Allan Ta', 'Advisor', t8]
]
</script>

<style lang="less" scoped>
  .wrap {
    min-height: 1000px;
    background-image: url("@/assets/bg.jpg");
    background-repeat: repeat;
  }
</style>