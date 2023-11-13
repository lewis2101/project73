<template>
  <Header
      title="AGROKOMEK"
      :menu="menu"
  />
</template>

<script setup lang="ts">
import Header from "./ui/Header.vue"

const menu = [
  {src: '/src/assets/search-normal.svg'},
  {src: '/src/assets/notification.svg'},
  {src: '/src/assets/user.svg'}
]

</script>

<style lang="scss" module>

</style>