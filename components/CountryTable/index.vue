<template>
	<div class="bg-red mb-4">
		<div
			v-for="cases in sortedList"
			class="rounded-lg border border-transparent cursor-pointer w-full flex flex-none justify-between items-center relative group"
		>
			<div
				class="bg-[#ccc] dark:bg-[#262439] rounded-lg bottom-0 cursor-pointer flex left-0 max-w-0 group-hover:max-w-full overflow-hidden absolute right-0 top-0 transition-all z-10"
			>
				<div
					v-for="(value, key) in getStatsByCountry(cases.id)"
					:id="key"
					class="overlayBlocks w-[24%]"
				>
					<span class="casesStats">
						{{ value }} <br />
						{{ key }}
					</span>
				</div>
			</div>

			<div class="w-[30px] mx-2">
				<span :class="`fi fi-${cases.id.toLowerCase()} max-w-full`" :alt="`${cases.name} Flag`" />
			</div>

			<div
				class="items-start flex flex-1 flex-col justify-start min-h-[25px] overflow-hidden whitespace-nowrap w-1/2"
			>
				<div
					class="text-black dark:text-white text-[1em] min-h-[15px] overflow-hidden relative text-ellipsis whitespace-nowrap w-full"
				>
					{{ cases.name }}
				</div>
				<div
					class="text-[#62626f] text-sm min-h-[12px] overflow-hidden text-ellipsis whitespace-nowrap w-full"
				>
					<span class="text-[#a57af2] font-semibold"
						>{{ getStatsByCountry(cases.id)?.active }} Active</span
					>
					<span class="text-[#5f5f88] mx-1">&</span>
					<span class="text-[#ea536f] font-semibold"
						>{{ cases.deaths.toLocaleString() }} Deaths</span
					>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
useHead({
	link: {
		rel: "stylesheet",
		href: "https://cdn.jsdelivr.net/gh/lipis/flag-icons@7.2.3/css/flag-icons.min.css",
	},
});

const props = defineProps({
	countries: {
		type: Array,
		required: true,
	},
});

const sortedList = computed(() => [...props.countries].sort((a, b) => b.confirmed - a.confirmed));

const getStatsByCountry = (countryId) => {
	const country = sortedList.value.find((d) => d.id === countryId);
	if (!country) return null;

	const { confirmed, deaths, recovered } = country;
	const active = confirmed - deaths - recovered;

	return {
		confirmed: confirmed.toLocaleString(),
		deaths: deaths.toLocaleString(),
		recovered: recovered.toLocaleString(),
		active: active.toLocaleString(),
	};
};
</script>
