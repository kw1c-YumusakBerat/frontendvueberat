<template>
  <section>
    <h1>Nieuws</h1>
    <NewsBlock v-for="(item, i) in news" :key="i" :news="item" />
  </section>
</template>

<script>
import NewsBlock from '../components/NewsBlock.vue'

export default {
  components: { NewsBlock },
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
h1 {
  text-align: center;
  margin: 2rem 0;
}
</style>
