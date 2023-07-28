<template>
  <section class="flex flex-col h-screen">
    <div class="hidden xl:block w-[350px] max-h-screen">
      <div class="h-full min-h-full flex flex-col">
        <div class="p-2 mt-4 mb-2 mx-auto max-w-[80%] h-auto">
          <LogoCuatro :dark="dark" />
        </div>

        <Box custom="flex-1 overflow-auto min-h-fit">
          <template #box>
            <h2
              class="font-semibold uppercase text-[#2ab75b] text-[1.6em] my-2"
            >
              Latest News
            </h2>

            <ul class="mt-3">
              <li class="mb-2">
                <nuxt-link
                  href="/"
                  target="_blank"
                  class="text-black dark:text-white group"
                >
                  <h2 class="group-hover:text-[#2ab75b] text-[1.2em]">
                    API TITLE
                  </h2>
                  <h3 class="text-[#2ab75b] text-[1em]">API NEWS' DATE</h3>
                </nuxt-link>
              </li>
            </ul>
          </template>
        </Box>

        <Box>
          <template #box>
            <div class="text-center text-black dark:text-white">
              <h2 class="font-semibold text-[1.6em] my-2">
                THIS IS NO LONGER WORKING
              </h2>
              <p class="text-[1em] px-5">
                Most of the APIs are not longer collecting new data. Read more
                here:
                <nuxt-link
                  class="underline hover:text-[#2ab75b]"
                  href="https://covidtracking.com/data/api"
                  target="_blank"
                  >The COVID Tracking Project</nuxt-link
                >.
              </p>
            </div>

            <div class="mt-4">
              <ul class="flex items-center justify-evenly my-3">
                <li>
                  <nuxt-link
                    class="contactLink"
                    href="https://cuatro.dev/"
                    target="_blank"
                    >Cuatro.dev</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link
                    class="contactLink"
                    href="https://www.linkedin.com/in/luigiespinosa/"
                    target="_blank"
                    >LinkedIn</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link class="contactLink" href="mailto:luigi@cuatro.dev"
                    >Contact</nuxt-link
                  >
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
