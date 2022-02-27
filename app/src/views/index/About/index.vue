<template>
  <div class="about-wrap">
    <Divider />
    <div class="tw-mt-14 title">
      ABOUT
    </div>
    <a-row class="tw-mt-10">
      <a-col
        :xs="{ span: 24, offset: 0 }"
        :md="{ span: 7, offset: 0 }"
        class="tw-mb-5">
        <div>
          <img src="@/assets/about-left.png">
        </div>
      </a-col>
      <a-col
        :xs="{ span: 22, offset: 1 }"
        :md="{ span: 10, offset: 0 }">
        <div class="tw-my-8 tw-text-2xl tw-font-bold tw-text-b-secondary tw-text-center">
          Koakuma is an multiplayer online ARPG game with immersive combat systems and mechanics within a graphics intensive metaverse. All in-game items and creatures are blockchain based tokens and NFTs. Koakuma’s visuals and gameplay are completely original and inspired by classics like Gigantic, World of Warcraft and Diablo.
        </div>
      </a-col>
      <a-col
        :xs="{ span: 24, offset: 0 }"
        :md="{ span: 7, offset: 0 }">
        <div>
          <img src="@/assets/about-right.png">
        </div>
      </a-col>
    </a-row>

    <div class="tw-text-center">
      <b-button>Read Litepaper</b-button>
    </div>

    <!-- 详情 -->
    <a-row class="tw-mt-20">
      <a-col
        v-for="(item, index) in items"
        :key="index"
        :xs="{ span: 20, offset: 2 }"
        :md="{ span: 7, offset: 3 }"
        :lg="{ span: 7, offset: 3 }"
        :xxl="{ span: 6, offset: 0 }"
        class="tw-mb-20 tw-text-center tw-font-bold">
        <div class="image-wrap">
          <img :src="item.image" class="tw-inline tw-w-full tw-h-full tw-object-contain">
        </div>
        <div class="tw-mt-4 tw-text-b-primary tw-text-4xl">{{ item.title }}</div>
        <div class="text-wrap tw-m-auto tw-mt-5 tw-text-center tw-text-b-secondary tw-text-xl">{{ item.text }}</div>
      </a-col>
    </a-row>
  </div>
</template>

<script setup>
import x1 from '@/assets/about-1.png'
import x2 from '@/assets/about-2.png'
import x3 from '@/assets/about-3.png'
import x4 from '@/assets/about-4.png'
import x5 from '@/assets/about-5.png'
import x6 from '@/assets/about-6.png'

const items = [
  {
    image: x1,
    title: `Exploring`,
    text: `There are countless dungeons waiting for you to challenge. Go with your friends, explore randomly generated terrains, trigger unique plots, defeat fierce bosses, and find NFT treasures that have been lost for many years`
  },
  {
    image: x2,
    title: `Collecting`,
    text: `The equipment in the game is divided into: weapons, helmets, clothes, pants, handguards, shoes, rings, necklaces. Each piece of equipment is a unique NFT with different qualities and attributes. Collect the most suitable equipment to make you stronger!`
  },
  {
    image: x3,
    title: `Gathering`,
    text: `There are abundant wild resources in the game, such as rare ores and precious herbs. Look for these scattered materials and collect them. These resources can be used to sell to other players, and can also be used to make specific items. good luck.`
  },
  {
    image: x4,
    title: `Battling`,
    text: `You can compete with other players one-on-one in the ladder event or form a unique team with your friends to challenge other teams. At the end of each season, players who climb to the top of the ladder will receive generous rewards, including an absolutely rare NFT.`
  },
  {
    image: x5,
    title: `Crafting`,
    text: `As a witcher, basic manufacturing capabilities can make you stay in this dangerous world longer. Process medicinal materials into medicine, and process ores into weapons and accessories. These NFT products can be sold to other players or used by themselves.`
  },
  {
    image: x6,
    title: `Big World`,
    text: `Laria is a vast and fascinating continent. There are no surprises here, and new things are happening all the time. Here you can meet new partners and travel to the unknown and mysterious realms together.`
  }
]

</script>

<style lang="less" scoped>
  .image-wrap {
    height: 300px;
  }
  .about-wrap {
    background-image: url("@/assets/bg.jpg");
    background-repeat: repeat;
  }
</style>