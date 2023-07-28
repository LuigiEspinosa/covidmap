<template>
  <section class="flex flex-col h-screen">
    <div class="hidden xl:block w-[350px]">
      <div class="sticky top-0">
        <div class="p-2 my-2 max-w-[70%] h-auto">
          <LogoCuatro :dark="dark" />
        </div>

        <Box>
          <template #box>
            <div class="font-normal text-center text-blank dark:text-white">
              <h2 class="text-[1.6em] my-2">THIS IS NO LONGER WORKING</h2>
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
