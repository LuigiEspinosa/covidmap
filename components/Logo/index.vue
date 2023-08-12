<template>
  <nuxt-link to="https://cuatro.dev/blog" class="flex flex-col min-h-[90px]">
    <nuxt-img
      v-if="darkMode"
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
    <span class="text-black dark:text-white mt-2 ml-auto self-end">CovidMap</span>
  </nuxt-link>
</template>

<script setup>
const emitter = useEmitter();

const darkMode = ref(true);

emitter.$on("toggleDarkMode", () => (darkMode.value = !darkMode.value));
</script>
