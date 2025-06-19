<template>
  <div class="product-card" @mouseover="hover = true" @mouseleave="hover = false">
    <img :src="product.image" :alt="product.name" />
    <h3>{{ product.name }}</h3>
    <p>{{ product.brand }}</p>
    <p>€ {{ product.price.toFixed(2) }}</p>
    <button v-if="hover" @click="$emit('add-to-cart', product)">In winkelmand</button>
  </div>
</template>

<script>
export default {
  props: ['product'],
  data() {
    return { hover: false }
  },
}
</script>

<style scoped lang="scss">
.product-card {
  position: relative;
  background: #222;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  img {
    max-width: 100%;
    border-radius: 4px;
  }
  button {
    position: absolute;
    bottom: 15px;
    right: 15px;
  }
}
</style>
