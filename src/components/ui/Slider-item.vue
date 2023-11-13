<template>
  <div
      :class="$style.item"
      :style="{ width, 'background-image': `url(${image})` }"
      >
    <p :class="$style.text"
       :style="{ width: half ? '100px' : '100%' }">
      {{ title }}
    </p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  width: string,
  image: string
  half: boolean,
  title: string
}>()
</script>

<style lang="scss" module>
.item {
  display: flex;
  align-items: end;
  padding: 12px 8px;
  border-radius: 16px;
  width: 10rem;
  height: 6.25rem;
  flex-shrink: 0;
  background-repeat: no-repeat;
  background-size: cover;
  color: #FFF;

  .text {
    font-family: 'Monrope', serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 16px;
  }
}
</style>