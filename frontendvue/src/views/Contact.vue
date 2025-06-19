<template>
  <section>
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
h1 {
  text-align: center;
  margin: 2rem 0;
}
</style>
