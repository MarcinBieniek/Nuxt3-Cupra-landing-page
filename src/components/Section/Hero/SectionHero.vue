
import type { Style } from '#build/components';

import type { Style } from '#build/components';

import type { Style } from '#build/components';
<template>
  <section :class="$style.hero">
    <NuxtImg src="/hero.png" :class="$style.image"/>
    <div :class="$style.container">
      <div :class="$style.text">
        <p>CUPRA Formentor</p>
        <p>Wejdź do świata Cupra. Poznaj prawdziwą moc i sportowego ducha marki.</p>
        <button :class="$style.button">Ruszaj na jazdę testową.</button>
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
    top: 200px;
    width: 742px;
    line-height: 64.2px;
    color: $white;

      p:first-of-type {
        opacity: 50%;
        font-size: 20px;
        margin: 0;
        padding: 0;
      }

      p {
        font-family: $font-light;
        font-size: 60px;
        margin: 0;
        padding: 0;
        margin-bottom: 20px;
      }

      .button {
        height: 48px;
        padding: 0px 24px;
        background-color: $light-beige;
        color: $black;
        transition: background-color 300ms ease-out;
        border: none;

        &:hover {
          background-color: $white;
        }
      }
    }
  }


}
</style>