<template>
  <Box custom="flex-1 overflow-auto min-h-fit">
    <template #box>
      <h2 class="font-semibold uppercase text-[#2ab75b] text-[1.6em] my-2">
        Latest News
      </h2>

      <ul class="mt-3">
        <li v-for="news in newsItems" class="mb-2">
          <nuxt-link
            :to="news.url"
            target="_blank"
            class="text-black dark:text-white group"
          >
            <h2 class="group-hover:text-[#2ab75b] text-[1.2em]">
              {{ news.title }}
            </h2>
            <h3 class="text-[#2ab75b] text-[1em]">{{ news.date }}</h3>
          </nuxt-link>
        </li>
      </ul>
    </template>
  </Box>
</template>

<script setup>
const newsItems = ref([
  {
    title: "Giving Thanks and Looking Ahead: Our Data Collection Work Is Done",
    date: "March 8, 2021",
    url: "https://covidtracking.com/analysis-updates/giving-thanks-and-looking-ahead-our-data-collection-work-is-done",
  },
]);
</script>
