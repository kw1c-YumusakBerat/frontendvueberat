<template>
  <header class="header">
    <div class="logo">
      <img src="@/assets/logo.png" alt="Mad Gamer Logo" />
      <h1>Mad Gamer</h1>
    </div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/over">Over ons</router-link>
      <router-link to="/producten">Producten</router-link>
      <router-link to="/nieuws">Nieuws</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>
  </header>
</template>

<style scoped>
.header {
  background: #24364c;
  padding: 1rem;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.logo img {
  height: 40px;
}
.logo h1 {
  color: #ff4d00;
  font-size: 1.5rem;
  margin: 0;
}
nav {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}
a {
  color: white;
  font-weight: bold;
}
.router-link-active {
  color: #ff4d00;
}
</style>
