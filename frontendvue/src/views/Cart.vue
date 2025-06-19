<template>
  <section>
    <ShoppingCart :cart="cart" @update-cart="updateCart" />
  </section>
</template>

<script>
import ShoppingCart from '../components/ShoppingCart.vue'

export default {
  components: { ShoppingCart },
  data() {
    return {
      cart: JSON.parse(localStorage.getItem('cart') || '[]'),
    }
  },
  methods: {
    updateCart(newCart) {
      this.cart = newCart
      localStorage.setItem('cart', JSON.stringify(this.cart))
    },
  },
}
</script>

<style scoped>
section {
  max-width: 900px;
  margin: 2rem auto;
}
</style>
