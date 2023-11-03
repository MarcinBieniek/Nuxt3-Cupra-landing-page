<template>
  <NuxtLink to="/">
    <button :class="$style.button">{{ title }}</button>
  </NuxtLink>
</template>

<script setup lang="ts">

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});

const { title } = props;

</script>

<style lang="scss" module>
@import '@/assets/scss/main.scss';

.button {
  height: 48px;
  padding: 0 36px;
  border: 1px solid $black;
  background-color: $white;
  position: relative;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 1px solid $black;
    transition: opacity 300ms ease-out;
    opacity: 0;
  }

  &:hover::after {
    opacity: 1;
  }
}

</style>