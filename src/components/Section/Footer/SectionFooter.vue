<template>
  <footer :class="$style.footer">
    <div :class="$style.container">
      <p :class="$style.name">Seat Cupra S.A.U. 2022®</p>
      <div :class="$style.links">
        <p>Obowiązek informacyjny</p>
        <p>Polityka cookies</p>
      </div>
      <div :class="$style.socials">
        <NuxtLink to="/" >
          <img :class="$style.icon" src="../../../assets/images/icons/instagram.png" />
        </NuxtLink>
        <NuxtLink to="/" >
          <img :class="$style.icon" src="../../../assets/images/icons/vimeo.png" />
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" module>
@import '@/assets/scss/main.scss';

.footer {
  background-color: $font-white;

  .container {
    align-items: center;
    height: 116px;
    font-size: 14px;
    font-family: $font-light;
    justify-content: space-between;
    color: $black;

    .name {
      text-transform: uppercase;
    }

    .links {
      display: flex;

      p {
        padding: 0px 16px;
        cursor: pointer;
        text-decoration: underline rgba(0, 0, 0, 0);
        transition: text-decoration-color 300ms;
        text-align: center;

        &:hover {
          text-decoration-color: $font-black;
        }
      }

      p:first-of-type {
        border-right: 1px solid $black;
      }
    }

    .socials {

      .icon {
        width: 24px;
        height: 24px;
        margin-left: 32px;
        opacity: 0.5;
        transition: opacity 300ms ease-out;

        &:hover {
          opacity: 1;
        }
      }
    }
  }
}

/* media queries */

@media screen and (max-width: 674px) {
  .footer .container {
    .links {

    }

    .socials {
      display: flex;

      .icon {
        margin-left: 10px;
      }
    }

  }


}

</style>