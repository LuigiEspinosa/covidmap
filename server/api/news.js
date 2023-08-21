export default defineEventHandler(() => {
  const config = useRuntimeConfig();

  return $fetch(
    `${config.newsUrl}/everything?q=covid&language=en&searchIn=title&pageSize=20&sortBy=publishedAt&apiKey=${config.newsApiKey}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${config.newsApiKey}`,
      },
    }
  );
});
