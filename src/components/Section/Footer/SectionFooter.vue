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
          <NuxtImg :class="$style.icon" src="/icons/instagram.png" />
        </NuxtLink>
        <NuxtLink to="/" >
          <NuxtImg :class="$style.icon" src="/icons/vimeo.png" />
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
    @apply $styles.container;
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

</style>