<template>
  <main-layout>
    <div :class="$style.slider">
      <Weather
        :data="weather"
      />
      <slider-item
          :title="item.title"
          :image="item.src"
          :half="item.textHalf"
          :width="item.width"
          v-for="item in props.sliders"
          :key="item.id"/>
    </div>
  </main-layout>
</template>

<script setup lang="ts">
import MainLayout from "./Main-layout.vue";
import SliderItem from "./ui/Slider-item.vue";
import Weather from "./ui/Weather.vue";

const props = defineProps<{
  sliders: {
    id: number
    src: string,
    title: string,
    textHalf: boolean,
    width: string
  }[]
}>()

const weather = {
  degree: 27,
  location: 'Алматы',
  week: 'Четверг,',
  date: '23 Сентбря'
}

</script>

<style lang="scss" module>
.slider {
  display: flex;
  overflow: auto;
  gap: 8px;
}

</style>