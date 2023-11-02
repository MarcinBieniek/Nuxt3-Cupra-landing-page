<template>
  <section :class="$style.features">
    <div :class="$style.container">

      <div :class="[feature.id % 2 !== 0 ? $style.item : $style.itemReverse]" v-for="feature in features" :key="feature.id">
        <NuxtImg :src="feature.img" :class="$style.image"/>
        <div :class="$style.textBox">
          <div :class="$style.text" >
            <p>{{ feature.title }}</p>
            <p>{{ feature.description }}</p>
            <NuxtLink :to="feature.link">
              <button :class="$style.button">{{ feature.button }}</button>
            </NuxtLink>
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

      .image {
        width: 787px;
        object-fit: cover;
      }

      .textBox {
        position: relative;

        .text {
          color: $white;
          background-color: $brown;
          width: 450px;
          height: 332px;
          padding: 0px 80px;
          margin: 0;
          position: absolute;
          left: -80px;

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
            width: 436px;
          }

            .button {
              height: 48px;
              padding: 0px 24px;
              border: 1px solid $black;
              margin-right: 20px;
              background-color: $white;
              position: relative;
              cursor: pointer;
            }

          .button::after {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              border: 1px solid $black;
              transition: opacity 300ms ease-out;
              opacity: 0;
            }

          .button:hover::after {
            opacity: 1;
          }
        }
      }
    }

    .itemReverse {
      flex-direction: row-reverse;

      .textBox {
        .text {
          left: -520px;
        }
      }
    }
  }
}

</style>