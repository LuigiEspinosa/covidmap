export default defineEventHandler(() => {
  const config = useRuntimeConfig();

  return $fetch(
    `${config.newsUrl}/everything?q=covid&searchIn=title&pageSize=20&apiKey=${config.newsApiKey}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${config.newsApiKey}`,
      },
    }
  );
});
