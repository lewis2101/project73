<template>
  <agro-header/>
  <agro-slider
      :sliders="itemsSlider"
  />
  <agro-menu/>
  <agro-news/>
  <agro-info
      title="Информация и документы"
      :items="itemsInfo"
  />
  <agro-info
      title="Услуги по технике"
      :items="itemsServices"
  />
  <agro-footer/>
</template>

<script setup lang="ts">
import AgroHeader from './components/Agro-header.vue'
import AgroSlider from "./components/Agro-slider.vue";
import AgroMenu from "./components/Agro-menu.vue";
import AgroNews from "./components/Agro-news.vue";
import AgroInfo from "./components/AgroInfo.vue";
import AgroFooter from "./components/Agro-footer.vue";
import {useInfo} from "./store/useInfo.ts";

const {itemsInfo, itemsServices, itemsSlider} = useInfo()

</script>

<style lang="scss" module>
</style>
