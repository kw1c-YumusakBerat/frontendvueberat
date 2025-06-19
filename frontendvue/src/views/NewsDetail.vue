<template>
  <section class="news-detail">
    <h1>{{ newsItem.title }}</h1>
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
        { id: 1, title: 'Game Release 1', summary: 'Nieuwe game komt uit volgende maand.', content: 'De nieuwe game wordt volgende maand gelanceerd. Het bevat verbeterde graphics en gameplay...' },
        { id: 2, title: 'Update 2.0', summary: 'Belangrijke update voor je favoriete game.', content: 'Update 2.0 brengt nieuwe features, bugfixes en meer stabiliteit naar de game...' },
        { id: 3, title: 'Event aankondiging', summary: 'Special event in de game deze zomer.', content: 'Deze zomer vindt er een speciaal event plaats met exclusieve beloningen en uitdagingen...' },
      ],
    }
  },
  mounted() {
    const id = Number(this.$route.params.id)
    this.newsItem = this.newsData.find(item => item.id === id) || { title: 'Nieuws niet gevonden', content: '' }
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
  margin-bottom: 1rem;
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
