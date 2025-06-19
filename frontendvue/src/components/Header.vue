<template>
  <header class="header">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/news">Nieuws</router-link>
      <router-link to="/shop">Shop</router-link>
      <router-link to="/cart">Winkelmand</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>
  </header>
</template>

<style scoped>
.header {
  background: #222;
  padding: 1rem;
  nav {
    display: flex;
    gap: 1rem;
    a {
      color: white;
      font-weight: bold;
    }
    a.router-link-active {
      color: #1db954;
    }
  }
}
</style>
