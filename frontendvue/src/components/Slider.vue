<template>
  <div class="slider">
    <div class="slides" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div v-for="(slide, i) in slides" :key="i" class="slide">
        <img :src="slide.image" :alt="slide.title" />
        <div class="caption">{{ slide.title }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    slides: {
      type: Array,
      required: true,
      default: () => [], 
    }
  },
  data() {
    return {
      currentIndex: 0,
      interval: null,
    }
  },
  methods: {
    next() {
      if (this.slides && this.slides.length > 0) {
        this.currentIndex = (this.currentIndex + 1) % this.slides.length;
      }
    },
    prev() {
      if (this.slides && this.slides.length > 0) {
        this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
      }
    },
  },
  mounted() {
    this.interval = setInterval(this.next, 5000);
  },
  beforeUnmount() {
    clearInterval(this.interval);
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
</style>
