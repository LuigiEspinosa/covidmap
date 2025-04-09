import { worldTimeline } from "~/server/data/worldTimeline";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";

countries.registerLocale(enLocale);

export default defineEventHandler(() => {
	const data = worldTimeline.find((d) => d.date === "2021-06-24");

	const localizedList = data.list.map((area) => ({
		...area,
		name: countries.getName(area.id, "en") || area.id,
	}));

	return {
		date: data.date,
		list: localizedList,
	};
});
