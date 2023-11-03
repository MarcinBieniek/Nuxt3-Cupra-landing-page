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
  type: {
    type: String,
    default: "button",
  },
});

const { title, type } = props;

</script>

<style lang="scss" module>
@import '@/assets/scss/main.scss';

.button {
  height: 48px;
  padding: 0px 24px;
  background-color: $button-black;
  color: $white;
  transition: background-color 300ms ease-out;
  border: none;

  &:hover {
    background-color: $button-gray;
  }

  &:active {
    background-color: $black;
  }
}

</style>