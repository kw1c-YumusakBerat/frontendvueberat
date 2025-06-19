<template>
  <main class="onepager">
    <section id="home">
      <Slider />
    </section>

    <section id="nieuws">
      <h2>Laatste Nieuws</h2>
      <div class="news-list">
        <NewsBlock v-for="(item, i) in news" :key="i" :news="item" />
      </div>
    </section>

    <section id="over-ons">
      <OverOns />
    </section>

    <section id="producten">
      <Producten />
    </section>

    <section id="contact">
      <ContactForm />
    </section>
  </main>
</template>

<script>
import Slider from '../components/Slider.vue'
import NewsBlock from '../components/NewsBlock.vue'
import OverOns from './OverOns.vue'
import Producten from './Producten.vue'
import ContactForm from '../components/ContactForm.vue'

export default {
  components: { Slider, NewsBlock, OverOns, Producten, ContactForm },
  data() {
    return {
      news: [
        { id: 1, title: 'Game Release 1', summary: 'Nieuwe game komt uit volgende maand.' },
        { id: 2, title: 'Update 2.0', summary: 'Belangrijke update voor je favoriete game.' },
        { id: 3, title: 'Event aankondiging', summary: 'Special event in de game deze zomer.' },
      ],
    }
  },
}
</script>

<style scoped>
.onepager {
  font-family: 'Poppins', sans-serif;
  color: #24364c;
  background-color: #f2f2f2;
  max-width: 900px;
  margin: 0 auto;
  padding: 1.5rem 2rem;
}

section {
  margin-bottom: 3rem;
}

h2 {
  color: #ff4d00;
  text-align: center;
  margin-bottom: 1.5rem;
}

.news-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.2rem;
}

@media (max-width: 768px) {
  .onepager {
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
