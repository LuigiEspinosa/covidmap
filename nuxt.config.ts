// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2025-04-09",
	modules: ["@nuxt/image", "@nuxtjs/tailwindcss"],
	css: ["@/assets/global.css"],
	runtimeConfig: {
		newsUrl: process.env.NUXT_NEWS_URL,
		newsApiKey: process.env.NUXT_NEWS_API_KEY,
	},
});

