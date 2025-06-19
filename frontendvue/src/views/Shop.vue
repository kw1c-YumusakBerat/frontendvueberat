<template>
  <section>
    <h1>Shop</h1>
    <div class="products-grid">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        @add-to-cart="addToCart"
      />
    </div>
  </section>
</template>

<script>
import ProductCard from '../components/ProductCard.vue'

export default {
  components: { ProductCard },
  data() {
    return {
      products: [
        { id: 1, name: 'Game A', brand: 'Studio X', price: 49.99, image: 'https://placehold.co/300x300?text=Game+A' },
        { id: 2, name: 'Game B', brand: 'Studio Y', price: 59.99, image: 'https://placehold.co/300x300?text=Game+B' },
        { id: 3, name: 'Game C', brand: 'Studio Z', price: 39.99, image: 'https://placehold.co/300x300?text=Game+C' },
      ],
    }
  },
  methods: {
    addToCart(product) {
      this.$emit('add-to-cart', product)  // doorgeven naar parent (App.vue)
    },
  },
}
</script>

<style scoped>
.products-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill,minmax(180px,1fr));
  margin-top: 1rem;
}
</style>
