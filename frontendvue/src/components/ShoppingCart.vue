<template>
  <div class="shopping-cart">
    <h2>Winkelmandje</h2>
    <table v-if="cart.length">
      <thead>
        <tr>
          <th>Product</th>
          <th>Prijs</th>
          <th>Aantal</th>
          <th>Totaal</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) in cart" :key="item.id">
          <td>{{ item.name }}</td>
          <td>€ {{ item.price.toFixed(2) }}</td>
          <td><input type="number" min="1" v-model.number="item.quantity" @change="updateQuantity(i)" /></td>
          <td>€ {{ (item.price * item.quantity).toFixed(2) }}</td>
          <td><button @click="removeItem(i)">Verwijderen</button></td>
        </tr>
      </tbody>
    </table>
    <p v-else>Je winkelmandje is leeg.</p>
    <p v-if="cart.length" class="total">Totaal: € {{ totalPrice.toFixed(2) }}</p>
    <button v-if="cart.length" @click="checkout">Afrekenen</button>
  </div>
</template>

<script>
export default {
  props: ['cart'],
  emits: ['update-cart'],
  computed: {
    totalPrice() {
      return this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
    },
  },
  methods: {
    updateQuantity(i) {
      if (this.cart[i].quantity < 1) this.cart[i].quantity = 1
      this.$emit('update-cart', this.cart)
    },
    removeItem(i) {
      this.cart.splice(i, 1)
      this.$emit('update-cart', this.cart)
    },
    checkout() {
      alert('Checkout nog niet geïmplementeerd!')
    },
  },
}
</script>

<style scoped>
.shopping-cart {
  background: #222;
  padding: 1rem;
  border-radius: 8px;
  table {
    width: 100%;
    border-collapse: collapse;
    th, td {
      padding: 0.5rem;
      border-bottom: 1px solid #444;
      text-align: left;
    }
    input[type="number"] {
      width: 50px;
    }
  }
  .total {
    font-weight: bold;
    margin-top: 1rem;
  }
  button {
    margin-top: 1rem;
  }
}
</style>
