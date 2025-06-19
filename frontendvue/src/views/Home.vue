<template>
  <section class="home-section">
    <Slider :slides="gamesSlides" />
    <h2>Laatste Nieuws</h2>
    <div class="news-list">
      <NewsBlock v-for="(item, i) in news" :key="i" :news="item" />
    </div>
  </section>
</template>

<script>
import Slider from '../components/Slider.vue'
import NewsBlock from '../components/NewsBlock.vue'
import games from '../data/games'  // Importeer je games data

export default {
  components: { Slider, NewsBlock },
  data() {
    return {
      news: [
        { title: 'Game Release 1', summary: 'Nieuwe game komt uit volgende maand.' },
        { title: 'Update 2.0', summary: 'Belangrijke update voor je favoriete game.' },
        { title: 'Event aankondiging', summary: 'Special event in de game deze zomer.' },
      ],
    }
  },
  computed: {
    // Maak een array met objecten die Slider verwacht (image + title)
    gamesSlides() {
      return games.map(game => ({
        image: game.url_img,
        title: game.naam,
      }))
    }
  }
}
</script>

<style scoped>
.home-section {
  padding: 1.5rem 2rem;
  max-width: 900px;
  margin: 0 auto;
  font-family: 'Poppins', sans-serif;
  background-color: #f2f2f2;
  color: #24364c;
}

h2 {
  margin: 2rem 0 1rem;
  text-align: center;
  font-weight: 600;
  font-size: 1.8rem;
  color: #ff4d00;
}

.news-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.2rem;
}

@media (max-width: 768px) {
  .home-section {
    padding: 1rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  .news-list {
    grid-template-columns: 1fr;
  }
}
</style>
