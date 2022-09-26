<template>
  <div class="left-column">
    <div class="card news">
      <NewsHeader />
      <NewsCards />
      <NewsHeadlines />
    </div>
  </div>
</template>

<script>
import NewsHeader from '../news/NewsHeader.vue'
import NewsCards from '../news/NewsCards.vue'
import NewsHeadlines from '../news/NewsHeadlines.vue'

export default {
  name: 'LeftColumn',
  components: { NewsHeader, NewsCards, NewsHeadlines }
}
</script>

<style lang="scss">
.news {
  @include SF-Light;
  padding: 0.4em 1em;
  position: relative;
  margin: 4em 0;
}
</style>
