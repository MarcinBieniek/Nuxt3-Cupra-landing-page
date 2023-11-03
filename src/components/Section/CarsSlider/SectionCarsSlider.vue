<template>
  <section :class="$style.sliderContainer">
    <div :class="$style.sliderRow">
      <div :class="$style.sliderItem">
        <h1>Nowa CUPRA Born</h1>
        <NuxtImg src="slider/01-CupraBorn.png" :class="$style.image"/>
        <p>Akumulator 58 kWh moc do 204 KM<span>2</span></p>
        <div :class="$style.offers">
          <p>Dostępny w leasingu z 0% opłat własnej</p>
          <div :class="$style.monthlyPrice">
            <p>Rata netto/mies. od *</p>
            <p>1943 zł</p>
          </div>
          <div :class="$style.totalPrice">
            <p>Cena brutto ju od</p>
            <p>179 600 zł</p>
          </div>
        </div>
        <BaseButtonBlack title="Umów jazdę próbną" />
        <div name="ArrowLeft" :class="$style.arrowLeft">
          <NuxtImg src="icons/ArrowLeft.svg" />
        </div>
        <div name="ArrowLeft" :class="$style.arrowRight">
          <NuxtImg src="icons/Arrowright.svg" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" module>
@import '@/assets/scss/main.scss';

.sliderContainer {
  color: $black;
  font-family: $font-light;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;

  .sliderRow {

    .sliderItem {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 900px;
      height: 635px;
      background-color: pink;
      position: relative;

      h1 {
        margin: 0 0 50px 0;
        font-size: 48px;
        line-height: 51.84px;
      }

      .image {
        height: 260px
      }

      p {
        line-height: 20px;

        span {
          font-size: 7px;
          vertical-align: super;
        }
      }

      .offers {
        display: flex;
        justify-content: space-between;
        width: 516px;
        margin-bottom: 20px;

        p:first-of-type {
          width: 140px;
        }

        .monthlyPrice {
          margin: 16px 48px 0 48px;

          p {
            margin: 0;
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

      .arrowLeft {
        position: absolute;
        width: 50px;
        height: 50px;
        left: -3%;
        top: 50;
        background-color: $white;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          width: 14px;
          height: 14px;
        }
      }

      .arrowRight {
        position: absolute;
        width: 50px;
        height: 50px;
        right: -3%;
        top: 50;
        background-color: $white;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          width: 14px;
          height: 14px;
        }
      }
    }
  }
}

</style>