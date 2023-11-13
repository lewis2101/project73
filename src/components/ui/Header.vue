<template>
  <div :class="$style.header">
    <div :class="$style.logo">
      {{ title }}
    </div>
    <div :class="$style.items">
      <img
          :src="item.src"
          alt=""
          v-for="(item, idx) in menu"
          :key="idx">
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string,
  menu: {
    src: string
  }[]
}>()
</script>

<style lang="scss" module>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  position: fixed;
  top: 0;
  width: 100%;
  max-width: 576px;
  background: var(--backGray);
  border-radius: 0 0 10px 10px;
  z-index: 2;

  .logo {
    color: var(--primary);
    text-align: center;
    font-family: "Gotham Pro", serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }

  .items {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }
}

</style>