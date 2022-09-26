<template>
  <ul class="headlines-container">
    <li class="headlines-item">
      <a href="#" target="_blank" rel="noopener noreferrer">
        <h2>
          Willow Smith ventures out of coronavirus isolation with boyfriend
          Tyler Cole
        </h2>
        <h3>17 minutes ago</h3>
      </a>
    </li>
    <li class="headlines-item">
      <a href="#" target="_blank" rel="noopener noreferrer">
        <h2>
          Willow Smith ventures out of coronavirus isolation with boyfriend
          Tyler Cole
        </h2>
        <h3>17 minutes ago</h3>
      </a>
    </li>
    <li class="headlines-item">
      <a href="#" target="_blank" rel="noopener noreferrer">
        <h2>
          Willow Smith ventures out of coronavirus isolation with boyfriend
          Tyler Cole
        </h2>
        <h3>17 minutes ago</h3>
      </a>
    </li>
    <div class="big-screen">
      <li class="headlines-item">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <h2>
            Willow Smith ventures out of coronavirus isolation with boyfriend
            Tyler Cole
          </h2>
          <h3>17 minutes ago</h3>
        </a>
      </li>
      <li class="headlines-item">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <h2>
            Willow Smith ventures out of coronavirus isolation with boyfriend
            Tyler Cole
          </h2>
          <h3>17 minutes ago</h3>
        </a>
      </li>
    </div>
  </ul>
</template>

<script>
export default {
  name: 'NewsHeadlines'
}
</script>

<style lang="scss">
.headlines-container {
  margin-top: 10px;

  .headlines-item {
    margin-bottom: 5px;

    h2 {
      @include SF-Light;
      color: $color-grey;
      font-size: 0.625em;
      line-height: 1.3;
      transition: 0.5s ease;
      max-height: 15px;
      overflow: hidden;
    }

    h3 {
      font-size: 0.58em;
      color: $color-orange;
    }

    a {
      color: $color-white;

      :hover h2 {
        color: $color-orange;
      }
    }
  }
}
</style>
