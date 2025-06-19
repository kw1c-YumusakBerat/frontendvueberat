<template>
  <form @submit.prevent="submitForm" class="contact-form">
    <label>
      Naam:
      <input type="text" v-model="name" required />
    </label>
    <label>
      Email:
      <input type="email" v-model="email" required />
    </label>
    <label>
      Bericht:
      <textarea v-model="message" required></textarea>
    </label>
    <button type="submit">Verzenden</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      message: '',
    }
  },
  methods: {
    submitForm() {
      if (!this.name || !this.email || !this.message) {
        alert('Vul alle velden in.')
        return
      }
      alert(`Bedankt voor je bericht, ${this.name}!`)
      this.name = ''
      this.email = ''
      this.message = ''
    },
  },
}
</script>

<style scoped>
.contact-form {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
  label {
    margin-bottom: 1rem;
    input, textarea {
      width: 100%;
      padding: 0.5rem;
      margin-top: 0.3rem;
      border-radius: 4px;
      border: 1px solid #555;
      background: #333;
      color: #eee;
    }
    textarea {
      resize: vertical;
      height: 100px;
    }
  }
}
</style>
