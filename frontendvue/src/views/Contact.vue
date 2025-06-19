<template>
  <section class="contact-section">
    <h1>Contact</h1>
    <ContactForm />
  </section>
</template>

<script>
import ContactForm from '../components/ContactForm.vue'

export default {
  components: { ContactForm },
}
</script>

<style scoped>
.contact-section {
  max-width: 600px;
  margin: 0 auto;
  padding: 1.5rem 2rem;
  font-family: 'Poppins', sans-serif;
  background-color: #f2f2f2;
  color: #24364c;
  border-radius: 8px;
}

h1 {
  text-align: center;
  margin-bottom: 2rem;
  font-weight: 600;
  color: #ff4d00;
}
</style>
