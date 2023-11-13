<template>
  <div :class="$style.main_menu">
    <menu-item
        v-for="(item, idx) in items"
        :key="idx"
        :title="item.title"
        :image="item.image"
    />
  </div>
</template>

<script setup lang="ts">
import MenuItem from "./ui/Menu-item.vue";

const items = [
  {
    title: 'Агро справочник',
    image: '/src/assets/book.svg',
  },
  {
    title: 'Мнение экспертов',
    image: '/src/assets/user1.svg',
  },
  {
    title: 'Агро Новости',
    image: '/src/assets/icon1.svg',
  },
  {
    title: 'Водо сбережние',
    image: '/src/assets/water.svg',
  },
  {
    title: 'Сельхоз техника',
    image: '/src/assets/trac.svg',
  },
  {
    title: 'Финансы',
    image: '/src/assets/tenge.svg',
  },
]

</script>

<style lang="scss" module>

.main_menu {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}
</style>