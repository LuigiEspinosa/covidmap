<template>
	<section class="hidden lg:flex flex-col h-screen">
		<div class="block w-[220px] xl:w-[350px] max-h-screen">
			<div class="h-full min-h-full flex flex-col">
				<div class="p-2 mt-4 mb-2 mx-auto max-w-[80%] h-auto">
					<Logo />
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
						<div class="text-black dark:text-white">
							<h2 class="font-semibold text-[1.6em] leading-8 mb-4 uppercase">
								The data is not being updated as of June 24, 2021.
							</h2>
							<p class="text-[1em] mb-2">
								This sample COVID-19 data visualization dashboard is here for reference purposes
								only, and is not intended as a source of real statistics.
							</p>
							<p class="text-xs">Data updated: 6/23/2021, 9:00 PM UTC</p>
						</div>

						<div class="mt-4">
							<ul class="flex flex-wrap items-center justify-evenly my-3">
								<li>
									<nuxt-link class="contactLink" to="https://cuatro.dev/" target="_blank"
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
									<button class="contactLink" @click="openModal">Stack</button>
								</li>
							</ul>
						</div>
					</template>
				</Box>
			</div>
		</div>

		<UIModal :isOpen="modalOpen" @onClose="modalOpen = false">
			<UIStack />
		</UIModal>
	</section>
</template>

<script setup>
import { ref } from "vue";

const modalOpen = ref(false);

const openModal = () => {
	modalOpen.value = true;
};
</script>

