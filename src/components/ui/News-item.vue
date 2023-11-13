<template>
  <div :class="$style.news_item">
    <img :class="$style.item_image"
         :src="image"
         alt=""
    >
    <div :class="$style.item_desc">
      <p>{{ text }}</p>
      <div :class="$style.item_more_desc">
        15:07
        <svg xmlns="http://www.w3.org/2000/svg" width="2" height="2" viewBox="0 0 2 2" fill="none">
          <circle cx="1" cy="1" r="1" fill="#9497A0"/>
        </svg>
        <img src="../../assets/eye.svg" alt="">
        134
        <svg xmlns="http://www.w3.org/2000/svg" width="2" height="2" viewBox="0 0 2 2" fill="none">
          <circle cx="1" cy="1" r="1" fill="#9497A0"/>
        </svg>
        <img src="../../assets/messages.svg" alt="">
        124
        <svg xmlns="http://www.w3.org/2000/svg" width="2" height="2" viewBox="0 0 2 2" fill="none">
          <circle cx="1" cy="1" r="1" fill="#9497A0"/>
        </svg>
        #Местные
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  image: string,
  text: string
}>()
</script>

<style lang="scss" module>

  .news_item {
    display: flex;
    flex-direction: column;
    width: 17.5rem;
    height: 12rem;
    border-radius: 16px;
    position: relative;
    .item_image {
      border-radius: 16px 16px 0 0;
    }
    .item_desc {
      position: absolute;
      bottom: 0;
      background: var(--backGray);
      padding: 8px 12px;
      border-radius: 0 0 16px 16px;
      color: var(--Dark, #3F3E54);
      font-family: 'Monrope', serif;
      font-size: 12px;
      font-style: normal;
      font-weight: 700;
      line-height: 16px;
      display: flex;
      flex-direction: column;
      gap: 8px;
      .item_more_desc {
        display: flex;
        align-items: center;
        gap: 8px;
        color: var(--Gray, #9497A0);
        font-family: 'Monrope',serif;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 16px;
      }
    }
  }
</style>