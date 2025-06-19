<template>
  <section class="over-ons">
    <h1>Over Mad Gamer</h1>
    <p>
      🎲 Mad Gamer is een spellenspeciaalzaak met vestigingen in Bommelskous, Kruishaar en Babyloniënbroek. 
      Wij hebben een ruim assortiment aan bord- en kaartspellen, waaronder Warhammer en Magic the Gathering. 
      Ook organiseren we regelmatig toernooien en activiteiten.
    </p>
    <p>
      🧸 Naast spellen verkopen we ook hoogwaardig kinderspeelgoed van merken zoals Haba, Djeco en Plantoys. 
      Onze webshop is gekoppeld aan de winkel in Bommelskous.
    </p>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
.over-ons {
  padding: 3rem 2rem;
  background: #f2f2f2;
  font-family: 'Poppins', sans-serif;
  max-width: 800px;
  margin: 0 auto;
}

h1 {
  text-align: center;
  color: #24364c;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  font-weight: 700;
}

p {
  color: #24364c;
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  text-align: justify;
}

@media (max-width: 768px) {
  .over-ons {
    padding: 2rem 1rem;
  }

  h1 {
    font-size: 2rem;
  }

  p {
    font-size: 1rem;
  }
}
</style>
