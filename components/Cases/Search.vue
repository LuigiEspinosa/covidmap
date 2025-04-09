<template>
	<div class="flex-1 overflow-auto min-h-fit">
		<div
			class="items-center bg-[#ccc] dark:bg-[#262439] rounded-lg flex mb-4 relative w-full pl-4 pr-2"
		>
			<input
				type="text"
				autocomplete="off"
				placeholder="Search by Country"
				class="bg-transparent border-none text-black dark:text-white flex-1 text-base h-10 outline-0"
			/>
		</div>

		<!-- <div v-if="pending">Loading...</div>
		<CountryTable v-else :countries="data.list" /> -->
	</div>
</template>

<script setup>
const { data, pending } = await useFetch("/api/covid");
</script>

