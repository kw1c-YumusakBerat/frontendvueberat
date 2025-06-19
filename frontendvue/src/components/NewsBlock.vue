<template>
  <article class="news-block">
    <h3>{{ news.title }}</h3>
    <small class="date">{{ formattedDate }}</small>
    <p>{{ news.summary }}</p>
    <router-link :to="`/nieuws/${news.id}`" class="read-more">Lees meer</router-link>
  </article>
</template>

<script>
export default {
  props: ['news'],
  computed: {
    formattedDate() {
      if (!this.news.date) return '';
      const date = new Date(this.news.date);
      if (isNaN(date.getTime())) return '';
      return date.toLocaleDateString('nl-NL', { year: 'numeric', month: 'long', day: 'numeric' });
    }
  }
}
</script>

<style scoped>
.news-block {
  background: white;
  border-radius: 6px;
  padding: 1rem;
  box-shadow: 0 1px 4px rgba(0,0,0,0.1);
}
.date {
  font-size: 0.8rem;
  color: #888;
  margin-bottom: 0.3rem;
  display: block;
}
.read-more {
  display: inline-block;
  margin-top: 1rem;
  color: #ff4d00;
  font-weight: 600;
  text-decoration: none;
}
.read-more:hover {
  text-decoration: underline;
}
</style>
