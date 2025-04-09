<template>
	<Box custom="flex-1 overflow-auto">
		<template #box>
			<h2 class="font-semibold uppercase text-[#2ab75b] text-[1.6em] my-2">Latest News</h2>

			<ul class="mt-3 overflow-auto">
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

<script setup>
import human from "human-time";

const { data } = await useFetch("/api/news");

const formatDate = (dateString) => {
	const date = new Date(dateString);
	return human(date);
};
</script>

