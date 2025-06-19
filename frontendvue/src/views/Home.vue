<template>
  <section class="home-section">
    <Slider :slides="gamesSlides" />
    <h2>Laatste Nieuws</h2>
    <div class="news-list">
      <NewsBlock v-for="(item, i) in displayedNews" :key="i" :news="item" />
    </div>
    <button
      v-if="isMobile && news.length > 3"
      @click="toggleMore"
      class="more-btn"
    >
      {{ showMore ? 'Minder weergeven' : 'Meer weergeven' }}
    </button>
  </section>
</template>

<script>
import Slider from '../components/Slider.vue';
import NewsBlock from '../components/NewsBlock.vue';
import games from '../data/games';

export default {
  components: { Slider, NewsBlock },
  data() {
    return {
      news: [
        { id: 1, title: 'Game Release 1', summary: 'Nieuwe game komt uit volgende maand.', date: '2025-06-01' },
        { id: 2, title: 'Update 2.0', summary: 'Belangrijke update voor je favoriete game.', date: '2025-06-10' },
        { id: 3, title: 'Event aankondiging', summary: 'Special event in de game deze zomer.', date: '2025-06-15' },
        { id: 4, title: 'Extra Nieuws 1', summary: 'Nog meer nieuws hier.', date: '2025-06-18' },
        { id: 5, title: 'Extra Nieuws 2', summary: 'Nog meer nieuws daar.', date: '2025-06-19' },
      ],
      showMore: false,
      isMobile: false,
    }
  },
  computed: {
    gamesSlides() {
      return games.map(game => ({
        image: game.url_img,
        title: game.naam,
      }));
    },
    displayedNews() {
      if (this.isMobile && !this.showMore) {
        return this.news.slice(0, 3);
      }
      return this.news;
    },
  },
  methods: {
    toggleMore() {
      this.showMore = !this.showMore;
    },
    checkIsMobile() {
      this.isMobile = window.innerWidth <= 768;
    }
  },
  mounted() {
    this.checkIsMobile();
    window.addEventListener('resize', this.checkIsMobile);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkIsMobile);
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
.more-btn {
  display: block;
  margin: 1rem auto;
  padding: 0.6rem 1.2rem;
  background-color: #ff4d00;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
}
.more-btn:hover {
  background-color: #e04300;
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
