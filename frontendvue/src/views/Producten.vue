<template>
  <section class="producten">
    <h1>Onze Spellen</h1>
    <div class="grid">
      <div v-for="game in games" :key="game.id" class="card">
        <img :src="game.image" :alt="game.name" @error="handleImgError" />
        <h2>{{ game.name }}</h2>
        <p><strong>Genre:</strong> {{ game.genre }}</p>
        <p><strong>Uitgever:</strong> {{ game.publisher }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import games from '../data/games.js'

export default {
  data() {
    return {
      games,
    }
  },
  methods: {
    handleImgError(event) {
      event.target.src = 'https://via.placeholder.com/150x150?text=Geen+Afbeelding'
    },
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

.producten {
  padding: 2rem;
  background-color: #f2f2f2;
  font-family: 'Poppins', sans-serif;
  text-align: center;
}

h1 {
  color: #24364c;
  margin-bottom: 2rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.5rem;
}

.card {
  background: white;
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 8px;
  transition: transform 0.2s;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.card img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  margin-bottom: 0.5rem;
  border-radius: 4px;
}

.card h2 {
  font-size: 1.2rem;
  color: #ff4d00;
  margin: 0.5rem 0;
}

.card p {
  margin: 0.3rem 0;
  font-size: 0.9rem;
}
</style>
