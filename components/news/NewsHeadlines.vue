<template>
  <div class="headlines">
    <p v-if="$fetchState.pending">Fetching news...</p>
    <p v-else-if="$fetchState.error">An error occurred :(</p>
    <ul v-else class="headlines-container">
      <li v-for="(nws, idx) in news" :key="idx" class="headlines-item">
        <h2>
          <a :href="nws.url" target="_blank" rel="noopener noreferrer">
            {{ nws.title }} - <span>{{ getDate(nws.publishedAt) }}</span>
          </a>
        </h2>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NewsHeadlines',

  data() {
    return {
      news: []
    }
  },

  async fetch() {
    const URL = `https://newsapi.org/v2/everything?q=coronavirus&sortBy=relevancy&apiKey=${process.env.NEWS_API_KEY}`
    const news = await fetch(URL).then(res => res.json())
    this.news = news.articles
  },

  methods: {
    getDate(date) {
      const objectDate = new Date(date)
      const day = objectDate.getDate()
      const month = objectDate.getMonth() + 1
      const year = objectDate.getFullYear()

      return `${month}/${day}/${year}`
    }
  }
}
</script>

<style lang="scss">
.headlines-container {
  width: 100%;
  max-height: calc(100vh - 180px - 8rem);
  overflow-y: scroll;
  padding-right: 1rem;
  margin-top: 2rem;

  .headlines-item {
    margin-bottom: 1rem;

    h2 {
      @include SF-Light;
      color: $color-grey;
      font-size: 0.8rem;
      line-height: 1.2rem;
      display: flex;
      flex-wrap: wrap;

      a {
        color: $color-white;

        :hover h2 {
          color: $color-orange;
        }
      }

      span {
        color: $color-orange;
      }
    }
  }
}
</style>
