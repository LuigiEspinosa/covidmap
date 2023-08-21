<template>
  <Box custom="flex-1 overflow-auto min-h-fit">
    <template #box>
      <h2 class="font-semibold uppercase text-[#2ab75b] text-[1.6em] my-2">Latest News</h2>

      <ul class="mt-3">
        <li v-for="news in data?.articles" class="mb-2">
          <nuxt-link :to="news?.url" target="_blank" class="text-black dark:text-white group">
            <h2 class="group-hover:text-[#2ab75b] text-[1.2em]">
              {{ news?.title }}
            </h2>
            <h3 class="text-[#2ab75b] text-[1em]">{{ formatDate(news?.publishedAt) }}</h3>
          </nuxt-link>
        </li>
      </ul>
    </template>
  </Box>
</template>

<script setup lang="ts">
import { News } from "~/types/news";
import human from "human-time";

const { data } = await useFetch<News>("/api/news");

const formatDate = (dateString: string | number | Date) => {
  const date = new Date(dateString);
  return human(date);
};
</script>
