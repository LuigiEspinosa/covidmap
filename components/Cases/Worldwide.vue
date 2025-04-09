<template>
	<div class="mb-4">
		<h1
			class="flex items-center justify-center bg-white rounded-lg text-black text-sm py-1 px-3 text-center uppercase font-semibold shadow-sm shadow-slate-600 dark:shadow-none"
		>
			Worldwide Cases
		</h1>

		<div class="flex flex-wrap justify-around my-[10px]">
			<div v-for="cases in worldCases" class="p-1 w-1/2">
				<div
					:id="cases.id"
					class="flex flex-col relative bg-[#ccc] dark:bg-[#262439] rounded-md text-blank dark:text-white text-sm py-[6px] text-center"
				>
					<p class="font-semibold text-[1.2em] mb-1 casesStats">
						{{ cases.stats }}
					</p>
					<p class="font-normal text-sm overflow-hidden text-ellipsis uppercase whitespace-nowrap">
						{{ cases.title }}
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
const worldCases = ref([
	{ id: "infection", stats: "Loading...", title: "Confirmed" },
	{ id: "death", stats: "Loading...", title: "Deaths" },
	{ id: "recover", stats: "Loading...", title: "Recoveries" },
	{ id: "active", stats: "Loading...", title: "Active" },
]);

const { data, error } = await useFetch("/api/covid/total");

if (data.value) {
	const { confirmed, deaths, recovered } = data.value;
	const active = confirmed - deaths - recovered;

	worldCases.value = [
		{ id: "infection", stats: confirmed?.toLocaleString(), title: "Confirmed" },
		{ id: "death", stats: deaths?.toLocaleString(), title: "Deaths" },
		{ id: "recover", stats: recovered?.toLocaleString(), title: "Recoveries" },
		{ id: "active", stats: active?.toLocaleString(), title: "Active" },
	];
} else {
	console.warn("Failed to fetch COVID stats", error.value);
}
</script>

