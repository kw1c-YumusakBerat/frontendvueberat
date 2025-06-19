<template>
  <section class="news-detail">
    <h1>{{ newsItem.title }}</h1>
    <small class="date">{{ formattedDate }}</small>
    <p>{{ newsItem.content }}</p>
    <router-link to="/nieuws" class="back-link">← Terug naar nieuws</router-link>
  </section>
</template>

<script>
export default {
  data() {
    return {
      newsItem: {},
      newsData: [
        {
          id: 1,
          title: 'Game Release 1',
          summary: 'Nieuwe game komt uit volgende maand.',
          content: 'De nieuwe game wordt volgende maand gelanceerd...',
          date: '2025-06-01'
        },
        {
          id: 2,
          title: 'Update 2.0',
          summary: 'Belangrijke update voor je favoriete game.',
          content: 'Update 2.0 brengt nieuwe features...',
          date: '2025-06-10'
        },
        {
          id: 3,
          title: 'Event aankondiging',
          summary: 'Special event in de game deze zomer.',
          content: 'Deze zomer vindt er een speciaal event plaats...',
          date: '2025-06-15'
        }
      ]
    }
  },
  computed: {
    formattedDate() {
      if (!this.newsItem.date) return '';
      const date = new Date(this.newsItem.date);
      if (isNaN(date.getTime())) return '';
      return date.toLocaleDateString('nl-NL', { year: 'numeric', month: 'long', day: 'numeric' });
    }
  },
  mounted() {
    const id = Number(this.$route.params.id);
    this.newsItem = this.newsData.find(item => item.id === id) || { title: 'Nieuws niet gevonden', content: '', date: '' };
  }
}
</script>

<style scoped>
.news-detail {
  max-width: 700px;
  margin: 2rem auto;
  padding: 1.5rem 2rem;
  font-family: 'Poppins', sans-serif;
  background-color: #f2f2f2;
  color: #24364c;
  border-radius: 8px;
}
h1 {
  color: #ff4d00;
  margin-bottom: 0.3rem;
}
.date {
  color: #888;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  display: block;
}
.back-link {
  display: inline-block;
  margin-top: 2rem;
  color: #24364c;
  text-decoration: none;
  font-weight: 600;
}
.back-link:hover {
  text-decoration: underline;
}
</style>
