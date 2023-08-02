<template>
  <section class="hidden lg:flex flex-col h-screen">
    <div class="block w-[220px] xl:w-[350px] max-h-screen">
      <div class="h-full min-h-full flex flex-col">
        <div class="p-2 mt-4 mb-2 mx-auto max-w-[80%] h-auto">
          <Logo :dark="dark" />
        </div>

        <News />

        <Box custom="!bg-[#2ab75b]">
          <template #box>
            <p class="text-[1em]">
              Based on
              <nuxt-link
                class="underline hover:text-black"
                to="http://coronavirusapp.io/"
                target="_blank"
                >http://coronavirusapp.io/</nuxt-link
              >
              by Guillermo Alarcon.
            </p>
          </template>
        </Box>

        <Box>
          <template #box>
            <div class="text-center text-black dark:text-white">
              <h2 class="font-semibold text-[1.6em] leading-8 mb-4 uppercase">
                No longer collecting new data!
              </h2>
              <p class="text-[1em]">
                <nuxt-link
                  class="underline hover:text-[#2ab75b]"
                  to="https://covidtracking.com/data/api"
                  target="_blank"
                  >The COVID Tracking Project</nuxt-link
                >
                has ended all data collection as of March 7, 2021. The existing
                API will continue to work until May 2021.
              </p>
            </div>

            <div class="mt-4">
              <ul class="flex flex-wrap items-center justify-evenly my-3">
                <li>
                  <nuxt-link
                    class="contactLink"
                    to="https://cuatro.dev/"
                    target="_blank"
                    >Cuatro.dev</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link
                    class="contactLink"
                    to="https://www.linkedin.com/in/luigiespinosa/"
                    target="_blank"
                    >LinkedIn</nuxt-link
                  >
                </li>
                <li>
                  <button class="contactLink">Stack</button>
                </li>
              </ul>
            </div>
          </template>
        </Box>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  dark: {
    type: Boolean,
    default: true,
  },
});
</script>
