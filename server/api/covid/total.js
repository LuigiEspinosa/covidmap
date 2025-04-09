import { worldTimeline } from "~/server/data/worldTimeline";

export default defineEventHandler(() => {
	const latest = worldTimeline.find((d) => d.date === "2021-06-24");

	const total = latest.list.reduce(
		(acc, country) => {
			acc.confirmed += country.confirmed;
			acc.deaths += country.deaths;
			acc.recovered += country.recovered;
			return acc;
		},
		{ confirmed: 0, deaths: 0, recovered: 0 }
	);

	return total;
});
