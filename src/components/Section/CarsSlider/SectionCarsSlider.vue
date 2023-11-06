<template>
  <div :class="$style.container">
  <section :class="$style.sliderContainer">
    <Swiper
      :class="$style.sliderRow"
      :modules="[SwiperEffectCreative]"
      :slides-per-view="1"
      :loop="true"
      :effect="'creative'"
      :creative-effect="{
        prev: {
          shadow: false,
          translate: ['-100%', 0, -1]
        },
        next: {
          translate: ['100%', 0, 0]
        }
      }"
    >
      <SwiperSlide v-for="slide in carouselItems" :key="slide.title" :class="$style.sliderItem">
        <h1>{{ slide.title}}</h1>
        <img :src="slide.image" :class="$style.image"/>
        <p>
          <p v-if="slide.electric">
            Akumulator {{ slide.maxSpeed }} kWh&nbsp;
          </p>
          <p v-else>
            Maksymalna prędkość {{ slide.maxSpeed }} KM/H&nbsp;
          </p>
          <p v-if="slide.electric">
            Moc do {{ slide.enginePower }} KM
          </p>
          <p v-else>
            Moc silnika {{ slide.maxSpeed }} KM
          </p>
        </p>
        <div :class="$style.offers">
          <p>Dostępny w leasingu z 0% opłat własnej</p>
          <div :class="$style.monthlyPrice">
            <p>Rata netto/mies. od *</p>
            <p>{{ slide.monthlyPrice }} zł</p>
          </div>
          <div :class="$style.totalPrice">
            <p>Cena brutto ju od</p>
            <p>{{ slide.totalPrice }} zł</p>
          </div>
        </div>
        <BaseButtonBlack title="Umów jazdę próbną" />
        <SectionCarsSliderControlers />
      </SwiperSlide>

    </Swiper>
  </section>
</div>

</template>

<script setup lang="ts">

const swiper = useSwiper()

declare type carouselItemType = {
  title: string;
  image: string;
  maxSpeed: string;
  enginePower: string;
  monthlyPrice: string;
  totalPrice: string;
  electric: boolean
}

const carouselItems: carouselItemType[] = [
  {
    title: 'CUPRA Formentor',
    image: '/images/slider/01-CupraFormentor.png',
    maxSpeed: '204',
    enginePower: '150',
    monthlyPrice: '1439',
    totalPrice: '127 800',
    electric: false
  },
  {
    title: 'CUPRA Formentor VZ',
    image: '/images/slider/02-Formentor-VZ.png',
    maxSpeed: '250',
    enginePower: '310',
    monthlyPrice: '1553',
    totalPrice: '152 400',
    electric: false
  },
  {
    title: 'CUPRA Ateca',
    image: '/images/slider/03-Formentor-VZ.png',
    maxSpeed: '247',
    enginePower: '300',
    monthlyPrice: '2334',
    totalPrice: '220 700',
    electric: false
  },
  {
    title: 'Nowa CUPRA Born',
    image: '/images/slider/04-NowaCupraBorn.png',
    maxSpeed: '58',
    enginePower: '204',
    monthlyPrice: '1943',
    totalPrice: '179 600',
    electric: true
  },
  {
    title: 'Leon',
    image: '/images/slider/05-Leon.png',
    maxSpeed: '245',
    enginePower: '300',
    monthlyPrice: '1553',
    totalPrice: '152 400',
    electric: false
  },
  {
    title: 'Leon Sportstourer',
    image: '/images/slider/06-LeonSportstourer.png',
    maxSpeed: '250',
    enginePower: '310',
    monthlyPrice: '1601',
    totalPrice: '156 200',
    electric: false
  },
]

</script>

<style lang="scss" module>
@import '@/assets/scss/main.scss';
.sliderContainer{
  text-align: center;
  color: $black;
  font-family: $font-light;
  width: 100%;
  margin: 80px 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .sliderRow {

    .sliderItem {
      position: relative;

      h1 {
        margin: 0 0 50px 0;
        font-size: 48px;
        line-height: 51.84px;
      }
      .image {
        width: 80%;
        height: auto;
      }

      p {
        line-height: 20px;
        display: flex;
        justify-content: center;

      }

      .offers {
        display: flex;
        justify-content: center;
        margin-bottom: 20px;

        p:first-of-type {
          width: 140px;
        }

        .monthlyPrice {
          margin: 16px 48px 0 48px;

          p {
            text-align: center;
            margin: 0;
            width: 200px;
          }

          p:last-of-type {
            text-align: center;
            font-size: 20px;
            font-family: $font-main;
          }
        }

        .totalPrice {
          margin-top: 16px;

          p {
            text-align: center;
            margin: 0;
          }

          p:last-of-type {
            text-align: center;
            font-size: 20px;
            font-family: $font-main;
          }
        }
      }

    }
  }
}

/* media queries */

@media screen and (min-width: 1024px) {
  .sliderContainer .sliderRow .sliderItem  {
    width: 800px;

    .image {
      width: 70%;
    }
  }
}

@media screen and (max-width: 650px) {


  .sliderContainer .sliderRow .sliderItem {


    h1 {
      font-size: 30px;
    }
    .image {
      width: 70%;
    }

    .offers {
      flex-direction: column;
      justify-content: center;
      align-items: center;

      p:first-of-type {
        text-align: center;
      }

      .monthlyPrice {
        margin: 5px 0;
      }
    }
  }
}

</style>