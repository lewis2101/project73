<template>
  <div :class="$style.info_item" :style="{ background }">
    <p>{{ title }}</p>
    <img :class="$style.info_img" :src="image" width="40" height="40" alt="">
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string,
  image: string,
  background: string
}>()
</script>

<style lang="scss" module>
.info_item {
  display: flex;
  width: 10rem;
  height: 5.25rem;
  color: var(--White, #FDFDFD);
  font-family: 'Monrope', serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  padding: 12px 8px;
  position: relative;
  border-radius: 16px;
}
.info_img {
  position: absolute;
  right: 8px;
  bottom: 12px;
}
.info_item_1 {
  border-radius: 16px;
  background: linear-gradient(140deg, #B2C2F5 6.74%, #DDBFF9 78.81%);
}

.info_item_2 {
  border-radius: 16px;
  background: linear-gradient(141deg, #C4D170 4.19%, #86BFA7 89.77%);
}
</style>