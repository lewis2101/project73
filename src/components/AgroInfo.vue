<template>
  <MainLayout>
    <div :class="$style.info">
      <h1 :class="$style.info_title">{{ title }}</h1>
      <div :class="$style.info_items">
        <info-item
            v-for="(item, idx) in items"
            :title="item.title"
            :image="item.image"
            :background="item.background"
        />
      </div>
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from "./Main-layout.vue";
import InfoItem from "./ui/Info-item.vue";

const props = defineProps<{
  title: string,
  items: {
    title: string,
    image: string,
    background: string
  }[]
}>()
</script>

<style module lang="scss">
.info {
  display: flex;
  flex-direction: column;
  gap: 16px;

  .info_title {
    color: var(--Dark, #3F3E54);
    font-family: 'Monrope', serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: -0.4px;
  }

  .info_items {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }
}
</style>