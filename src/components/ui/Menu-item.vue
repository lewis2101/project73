<template>
  <div :class="$style.item">
    <img :src="image" alt="">
    <p>{{ title }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string,
  image: string
}>()
</script>

<style lang="scss" module>
.item {
  width: 6.8rem;
  height: 5.3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  text-align: center;
  border-radius: 16px;
  gap: 4px;
  font-family: 'Monrope',serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  padding: 20px;
}
</style>