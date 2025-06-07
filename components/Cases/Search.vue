<template>
	<div class="flex-1 overflow-auto">
		<div
			class="items-center bg-[#ccc] dark:bg-[#262439] rounded-lg flex mb-4 relative w-full pl-4 pr-2"
		>
			<input
				v-model="searchTerm"
				type="text"
				autocomplete="off"
				placeholder="Search by Country"
				class="bg-transparent border-none text-black dark:text-white flex-1 text-base h-10 outline-0"
			/>
		</div>

		<div v-if="pending">Loading...</div>
		<CountryTable v-else :countries="filteredCountries" />
	</div>
</template>

<script setup>
import { ref, computed } from "vue";

const { data, pending } = await useFetch("/api/covid");

const searchTerm = ref("");

function normalize(str) {
	return str
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "")
		.toLowerCase();
}

const filteredCountries = computed(() => {
	if (!data.value?.list) return [];

	const normalizedSearch = normalize(searchTerm.value);
	return data.value.list.filter((country) => normalize(country.name).includes(normalizedSearch));
});
</script>
