<template>
  <div class="news-item-container">
    <a href="#" target="_blank" rel="noopener noreferrer">
      <div class="news-item">
        <div class="img-box">
          <img
            src="~/static/news/news260x159.png"
            alt="News RSS Feed"
            width="260"
            height="159"
          />
        </div>
        <div class="item-box">
          <h1>Myanmar reports first corona virus death</h1>
          <h3>The mercury news - 29 mins</h3>
        </div>
      </div>
    </a>
    <a href="#" target="_blank" rel="noopener noreferrer">
      <div class="news-item">
        <div class="img-box">
          <img
            src="~/static/news/news2-260x159.png"
            alt="News RSS Feed"
            width="260"
            height="159"
          />
        </div>
        <div class="item-box">
          <h1>Myanmar reports first corona virus death</h1>
          <h3>The mercury news - 29 mins</h3>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'NewsCards'
}
</script>

<style lang="scss">
.news-item-container {
  display: flex;
  justify-content: space-between;

  .news-item {
    padding: 2px;
    margin: 0 auto;
    display: block;
    position: relative;

    img {
      display: block;
      max-width: 100%;
      max-height: 100%;
    }

    .img-box {
      width: 122px;
      height: 84px;
      display: block;
      margin: 0 auto;
    }

    .item-box {
      display: block;
      width: 120px;
      padding: 3px;

      h1 {
        @include SF-Light;
        font-size: 0.68em;
        color: $color-grey;
        line-height: 1.3;
        margin-top: 2px;
        transition: 0.5s ease;
        overflow: hidden;
        max-height: 25px;

        &:hover {
          color: $color-orange;
        }
      }

      h3 {
        @include SF-Light;
        font-size: 0.55em;
        font-weight: lighter;
        color: $color-white;
        margin-top: 4px;
        transition: 0.5s ease;
        overflow: hidden;
        white-space: nowrap;
        min-height: 12px;
      }
    }
  }
}
</style>
