<template>
  <section>
    <Slider />
    <h2>Laatste Nieuws</h2>
    <NewsBlock v-for="(item, i) in news" :key="i" :news="item" />
  </section>
</template>

<script>
import Slider from '../components/Slider.vue'
import NewsBlock from '../components/NewsBlock.vue'

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
}
</script>

<style scoped>
h2 {
  margin: 2rem 0 1rem;
  text-align: center;
}
</style>
