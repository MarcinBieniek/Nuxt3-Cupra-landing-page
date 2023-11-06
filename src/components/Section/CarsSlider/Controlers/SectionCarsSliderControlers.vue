<script setup lang="ts">
const swiper = useSwiper()
</script>

<template>
  <div @click="swiper.slideNext()" :class="$style.arrowRight"><img src="../../../../assets/images/icons/Arrowright.svg" /></div>
  <div @click="swiper.slidePrev()" :class="$style.arrowLeft"><img src="../../../../assets/images/icons/ArrowLeft.svg" /></div>
</template>

<style lang="scss" module>
@import '@/assets/scss/main.scss';

.arrowLeft {
  position: absolute;
  width: 50px;
  height: 50px;
  left: 0%;
  top: 50%;
  background-color: $white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  img {
    width: 14px;
    height: 14px;
    }
  }

.arrowRight {
  position: absolute;
  width: 50px;
  height: 50px;
  right: 0%;
  top: 50%;
  background-color: $white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  img {
    width: 14px;
    height: 14px;
    }
  }



</style>
