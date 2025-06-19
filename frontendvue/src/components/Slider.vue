<template>
  <div class="slider">
    <div class="slides" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div v-for="(slide, i) in slides" :key="i" class="slide">
        <img :src="slide.image" :alt="slide.title" />
        <div class="caption">{{ slide.title }}</div>
      </div>
    </div>
    <button @click="prev" class="nav prev">‹</button>
    <button @click="next" class="nav next">›</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      slides: [
        { image: 'https://placehold.co/600x300?text=Game+1', title: 'Epic Game 1' },
        { image: 'https://placehold.co/600x300?text=Game+2', title: 'Awesome Game 2' },
        { image: 'https://placehold.co/600x300?text=Game+3', title: 'Cool Game 3' },
      ],
    }
  },
  methods: {
    next() {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length
    },
    prev() {
      this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length
    },
  },
  mounted() {
    this.interval = setInterval(this.next, 5000)
  },
  beforeUnmount() {
    clearInterval(this.interval)
  },
}
</script>

<style scoped>
.slider {
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 700px;
  margin: 0 auto 2rem;
}
.slides {
  display: flex;
  transition: transform 0.5s ease;
}
.slide {
  min-width: 100%;
  position: relative;
}
.slide img {
  width: 100%;
  display: block;
  border-radius: 8px;
}
.caption {
  position: absolute;
  bottom: 10px;
  left: 15px;
  color: white;
  background: rgba(0,0,0,0.5);
  padding: 0.3rem 0.7rem;
  border-radius: 4px;
}
.nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0,0,0,0.3);
  border: none;
  color: white;
  font-size: 2rem;
  padding: 0 0.5rem;
  cursor: pointer;
  user-select: none;
}
.prev {
  left: 10px;
}
.next {
  right: 10px;
}
</style>
