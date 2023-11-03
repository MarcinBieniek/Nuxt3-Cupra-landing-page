<template>
  <section :class="$style.hero">
    <NuxtImg src="/hero.png" :class="$style.image"/>
    <div :class="$style.container">
      <div :class="$style.text">
        <p>CUPRA Formentor</p>
        <p>Wejdź do świata Cupra. Poznaj prawdziwą moc i sportowego ducha marki.</p>
        <BaseButtonSand title="Ruszaj na jazdę testową" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" module>
@import '@/assets/scss/main.scss';

.hero {
  height: calc(100vh - 84px);
  width: 100%;
  position: relative;

  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .container {
    .text {
    position: absolute;
    bottom: 100px;
    max-width: 742px;
    line-height: 64.2px;
    color: $white;


      p:first-of-type {
        opacity: 50%;
        font-size: 20px;
        margin: 0 0 5px 0;
        padding: 0;
      }

      p {
        font-family: $font-light;
        font-size: 60px;
        margin: 0 0 25px 0;
        padding: 0;
      }
    }
  }
}

  /* Media queries*/

  @media screen and (max-width: 724px) {
    .hero {
      height: calc(75vh - 84px);
    }
    .hero .container .text p {
      font-size: 40px;
      line-height: 50px;
    }
  }

  @media screen and (max-width: 393px) {
    .hero .container .text p {
      font-size: 30px;
      line-height: 40px;
    }
  }

</style>