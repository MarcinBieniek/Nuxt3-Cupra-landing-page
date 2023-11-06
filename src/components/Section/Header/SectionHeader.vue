<template>
  <header :class="$style.header">
    <div :class="$style.container">
      <NuxtLink to="/" >
        <NuxtImg src="cupra-logo.png" :class="$style.logo"/>
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
        <div :class="$style.gap"></div>
        <BaseButtonBlack title="Umów jazdę próbną" />
      </div>
      <div :class="$style.hamburger" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div :class="$style.mobileMenu" v-if="isMenuOpen">
      <div>
        <ul>
          <li
            v-for="(option, optionIndex) in menu"
            :key="optionIndex"
          >
            <NuxtLink :to="option.link">{{ option.title }}</NuxtLink>
          </li>
        </ul>
      </div>
      <div :class="$style.contact">
        <a :class="$style.telephone" href="tel:510210-52552" rel="noindex">+48 58 506 65 65</a>
        <BaseButtonWhite title="Zapytaj o ofertę"/>
        <div :class="$style.gap">asd</div>
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

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

</script>

<style lang="scss" module>
@import '@/assets/scss/main.scss';

  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    background-color:  $mid-gray;
    .container {
      height: 84px;
      justify-content: space-between;
      align-items: center;

      .logo {
        width: 142px;
        padding-right: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;

        li {
          margin-right: 20px;
          font-family: $font-light;
          text-decoration: underline rgba(0, 0, 0, 0);
          transition: text-decoration-color 300ms;
          text-align: center;

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
        justify-content: space-between;

        .telephone {
          font-size: 14px;
          font-weight: 500;
          width: 140px;
          color: inherit;
          text-decoration: underline rgba(0, 0, 0, 0);
          transition: text-decoration-color 300ms;
          padding: 0 10px;

          &:hover {
            text-decoration-color: $font-black;
          }
        }

        .gap {
          width: 10px;
          height: 10px;
        }
      }

      .hamburger {
        width: 30px;
        height: 24px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        cursor: pointer;
        display: none;

        span {
          width: 100%;
          height: 3px;
          background-color: $black;
          transform-origin: left;
          transition: all 1s ease;
        }
      }
    }

    .mobileMenu {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin: 60px 0;
      display: none;

      ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: $black;
        font-size: 20px;

        li {
          margin-bottom: 20px;
          font-family: $font-light;
          text-decoration: underline rgba(0, 0, 0, 0);
          transition: text-decoration-color 300ms;
          text-align: center;

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
        justify-content: space-between;
        flex-direction: column;
        text-align: center;
        height: 150px;

        .telephone {
          font-size: 16px;
          color: $black;
          text-decoration: underline rgba(0, 0, 0, 0);
          transition: text-decoration-color 300ms;
          padding: 10px 10px 30px 10px;
          text-align: center;

          &:hover {
            text-decoration-color: $font-black;
          }
        }

        .gap {
          height: 30px;
        }
      }
    }
  }

  /* Media queries*/

  @media screen and (max-width: 1024px) {
    .header .container .contact .telephone {
      display: none;
    }
  }

  @media screen and (max-width: 794px) {
    .header .container ul, .header .container .contact {
      display: none;
    }

    .header .container .hamburger {
      display: flex;
    }

    .header .mobileMenu {
      display: flex;
    }
  }
</style>