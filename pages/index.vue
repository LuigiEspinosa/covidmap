<template>
  <section class="main">
    <LeftColumn />

    <div class="card chartmap">
      <div id="chartdiv" class="chartdiv-map"><h2>Center Column</h2></div>
    </div>

    <div class="right-column"><h2 class="card">Right Column</h2></div>
  </section>
</template>

<script>
import LeftColumn from '../components/columns/LeftColumn.vue'

export default {
  name: 'IndexPage',
  components: { LeftColumn }
}
</script>
