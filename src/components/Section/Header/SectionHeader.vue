<template>
  <header :class="$style.header">
    <div :class="$style.container">
      <NuxtLink to="/" >
        <NuxtImg src="/cupra-logo.png" :class="$style.logo"/>
      </NuxtLink>
      <ul>
        <li
          v-for="(option, optionIndex) in menu"
          :key="optionIndex"
        >
          <NuxtLink :to="option.link">{{ option.title }}</NuxtLink>
        </li>
      </ul>
      <div :class="$style.contact">
        <a :class="$style.telephone" href="tel:510210-52552" rel="noindex">+48 58 506 65 65</a>
        <BaseButtonWhite title="Zapytaj o ofertę"/>
        <BaseButtonBlack title="Umów jazdę próbną" />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">

declare type menuType = {
  title: string;
  link?: string;
}

const menu: menuType[] = [
  {
    title: 'Samochody',
    link: '/'
  },
  {
    title: 'Jazda próbna',
    link: '/'
  },
  {
    title: 'Oferta',
    link: '/'
  },
  {
    title: 'Salony Cupra',
    link: '/'
  },
]

</script>

<style lang="scss" module>
@import '@/assets/scss/main.scss';

  .header {
    .container {
      height: 84px;
      justify-content: space-between;
      align-items: center;

      .logo {
        height: 20,33px;
        width: 142px;
      }

      ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;

        li {
          margin-right: 20px;
          font-family: $font-light;
          text-decoration: underline rgba(0, 0, 0, 0);
          transition: text-decoration-color 300ms;

          a {
            text-decoration: none;
            color: inherit;
          }

          &:hover {
            text-decoration-color: $font-black;
          }
        }
      }

      .contact {
        display: flex;
        align-items: center;

        .telephone {
          font-size: 14px;
          font-weight: 500;
          color: inherit;
          text-decoration: underline rgba(0, 0, 0, 0);
          transition: text-decoration-color 300ms;
          margin-right: 40px;

          &:hover {
            text-decoration-color: $font-black;
          }
        }
      }
    }
  }
</style>