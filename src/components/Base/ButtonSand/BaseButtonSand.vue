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
  padding: 0px 24px;
  background-color: $light-beige;
  color: $black;
  transition: background-color 300ms ease-out;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: $white;
  }
}

</style>