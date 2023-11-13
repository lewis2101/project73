<template>
  <div :class="$style.weather">
    <img :class="$style.sun"
         src="../../assets/sun.svg"
         alt=""
    >
    <div :class="$style.weather_gr">
      <p :class="$style.weather_num">
        {{ data.degree }}
      </p>
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
        <circle cx="7.375" cy="6.75" r="5.23125" stroke="white" stroke-width="3.0375"/>
      </svg>
    </div>
    <div :class="$style.weather_desc">
      <p>{{ data.week }}</p>
      <p>{{ data.date }}</p>
      <p>
        <img
            src="../../assets/location.svg"
            alt=""
        >
        {{ data.location }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  data: {
    degree: string,
    location: string,
    week: string,
    date: string
  }
}>()
</script>

<style lang="scss" module>
.weather {
  width: 6.25rem;
  height: 6.25rem;
  border-radius: 16px;
  background: linear-gradient(180deg, rgba(11, 116, 229, 0.86) 0%, rgba(0, 210, 255, 0.83) 100%);
  flex-shrink: 0;
  position: relative;

  .sun {
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 50px;
  }

  .weather_gr {
    position: absolute;
    top: 8px;
    left: 8px;
    display: flex;
    gap: 2px;
  }

  .weather_num {
    color: var(--White, #FDFDFD);
    font-family: 'Monrope', serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px;
    letter-spacing: -0.64px;
  }

  .weather_desc {
    position: absolute;
    bottom: 8px;
    left: 8px;
    display: flex;
    flex-direction: column;
    color: #FFF;
    font-family: 'Monrope', serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
  }
}
</style>