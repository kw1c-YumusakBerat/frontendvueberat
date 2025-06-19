<template>
  <article class="news-block">
    <h3>{{ news.title }}</h3>
    <p>{{ news.summary }}</p>
    <router-link :to="'/news'">Lees meer</router-link>
  </article>
</template>

<script>
export default {
  props: ['news'],
}
</script>

<style scoped>
.news-block {
  background: #1e1e1e;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  h3 {
    margin-top: 0;
  }
}
</style>
