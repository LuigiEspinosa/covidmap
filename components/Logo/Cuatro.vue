<template>
  <nuxt-link to="/" class="flex flex-col">
    <nuxt-img
      v-if="dark"
      src="/white-logo.png"
      width="{368}"
      height="{132}"
      alt="Numero Cuatro Logo in white"
      format="png"
      preload
    />
    <nuxt-img
      v-else
      src="/black-logo.png"
      width="{368}"
      height="{132}"
      alt="Numero Cuatro Logo in white"
      format="png"
      preload
    />
    <span class="font-normal text-black dark:text-white mt-2 ml-auto self-end"
      >CovidMap</span
    >
  </nuxt-link>
</template>

<script setup>
const props = defineProps({
  dark: {
    type: Boolean,
    default: true,
  },
});
</script>
