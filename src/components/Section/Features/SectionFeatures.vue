<template>
  <section :class="$style.features">
    <div :class="$style.container">

      <div :class="[feature.id % 2 !== 0 ? $style.item : $style.itemReverse]" v-for="feature in features" :key="feature.id">
        <div :class="$style.image">
          <NuxtImg :src="feature.img" />
        </div>
        <div :class="$style.textBox">

          <div :class="$style.text" >
            <p>{{ feature.title }}</p>
            <p>{{ feature.description }}</p>
            <BaseButtonWhite :title="feature.button" />
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">

declare type featureType = {
  id: number,
  title: string;
  description: string;
  button: string;
  link: string;
  img: string
}

const features: featureType[] = [
  {
    id: 1,
    title: 'Technologia',
    description: 'Poczuj pełną wolność dzięki licznym innowacjom.',
    button: 'Umów jazdę próbną',
    link: '/',
    img: '/features-1.jpg'
  },
  {
    id: 2,
    title: 'Potęga Designu',
    description: 'Crossover emanujący gracją, dynamizmem i czystym wyrafinowaniem.',
    button: 'Umów jazdę próbną',
    link: '/',
    img: '/features-2.jpg'
  },
  {
    id: 3,
    title: 'Design wnętrza',
    description: 'Idealny komfort. Unikalny wystrój wnętrza stworzony w stylu CUPRY.',
    button: 'Umów jazdę próbną',
    link: '/',
    img: '/features-3.jpg'
  },
]

</script>

<style lang="scss" module>
@import '@/assets/scss/main.scss';

.features {
  background-color: $brown;
  padding: 100px 0 0 0;

  .container {
    display: flex;
    flex-direction: column;

    .item, .itemReverse {
      display: flex;
      margin-bottom: 100px;
      max-width: 100%;
      position: relative;

      .image {
        max-width: auto;
        overflow: hidden;

        img {
          width: 787px;
          object-fit: cover;
        }
      }

      .textBox {

        .text {
          color: $white;
          background-color: $brown;
          padding: 0px 40px 0px 80px;
          margin: 0;
          height: 330px;
          max-width: 400px;
          position: absolute;
          top: 0;
          right:0px;
          overflow: hidden;

          p:first-of-type {
            font-size: 16px;
            margin: 0 0 5px 0;
            padding: 0;
          }

          p {
            font-family: $font-light;
            font-size: 36px;
            margin: 0 0 25px 0;
            padding: 0;
            line-height: 46px;
          }
        }
      }
    }

    .itemReverse {
      flex-direction: row-reverse;
      .textBox {
        .text {
          left: -40px;
        }
      }
    }
  }
}

/* media queries */

@media screen and (max-width: 586px) {
  .features .container .item .textBox .text p {
    font-size: 26px;
    line-height: 34px;
  }

  .features .container .itemReverse .textBox .text p {
    font-size: 26px;
    line-height: 34px;
  }
}

</style>