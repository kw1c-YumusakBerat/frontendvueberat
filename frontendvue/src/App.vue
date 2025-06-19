<template>
  <div id="app">
    <Header />
    <component :is="isMobile ? 'OnePager' : 'router-view'" />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import OnePager from './views/OnePager.vue'
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  components: { Header, Footer, OnePager },
  setup() {
    const isMobile = ref(window.innerWidth <= 768)

    const onResize = () => {
      isMobile.value = window.innerWidth <= 768
    }

    onMounted(() => {
      window.addEventListener('resize', onResize)
    })

    onUnmounted(() => {
      window.removeEventListener('resize', onResize)
    })

    return { isMobile }
  },
}
</script>

<style>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
