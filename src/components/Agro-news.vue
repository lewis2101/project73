<template>
  <main-layout>
    <div :class="$style.news">
      <div :class="$style.header">
        <p>Новости</p>
        <button :class="$style.button">
          См. все
          <img src="../assets/arrow-right.svg" alt="">
        </button>
      </div>
      <div :class="$style.news_items">
        <news-item
            v-for="(item, idx) in items"
            :key="idx"
            :image="item.image"
            :text="item.title"
        />
      </div>
    </div>
  </main-layout>
</template>

<script setup lang="ts">
import MainLayout from "./Main-layout.vue";
import NewsItem from "./ui/News-item.vue";

const items = [
  {
    title: 'Сколько денег выделили аграриям, пострадавшим от засухи в ...',
    image: '/src/assets/newsImage.png'
  },
  {
    title: 'Более ста скважин для снабжения аграриев водой пробурили в',
    image: '/src/assets/newItem2.png'
  }
]

</script>

<style lang="scss" module>
.news {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-family: 'Monrope', serif;
    font-weight: bold;
    color: #3F3E54;

    .button {
      display: flex;
      padding: 4px 8px;
      align-items: center;
      gap: 4px;
      border-radius: 100px;
      border: none;
      font-family: 'Monrope', serif;
      color: #3F3E54;
    }
  }

  .news_items {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    overflow-x: auto;
  }
}
</style>