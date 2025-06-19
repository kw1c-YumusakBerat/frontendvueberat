<template>
  <form @submit.prevent="handleSubmit" class="contact-form" novalidate>
    <label for="name">Naam</label>
    <input
      id="name"
      v-model="form.name"
      type="text"
      required
      placeholder="Jouw naam"
    />

    <label for="email">E-mail</label>
    <input
      id="email"
      v-model="form.email"
      type="email"
      required
      placeholder="jouw@email.com"
    />

    <label for="message">Bericht</label>
    <textarea
      id="message"
      v-model="form.message"
      rows="5"
      required
      placeholder="Typ hier je bericht"
    ></textarea>

    <button type="submit" :disabled="!isValid">Verstuur</button>
    <p v-if="submitted" class="success-msg">Bedankt voor je bericht!</p>
  </form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: '',
      },
      submitted: false,
    }
  },
  computed: {
    isValid() {
      return (
        this.form.name.trim() !== '' &&
        this.validateEmail(this.form.email) &&
        this.form.message.trim() !== ''
      )
    },
  },
  methods: {
    validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return re.test(email)
    },
    handleSubmit() {
      if (this.isValid) {
        this.submitted = true
        // Hier kun je een API-call toevoegen om het bericht te versturen
        this.form.name = ''
        this.form.email = ''
        this.form.message = ''
        setTimeout(() => (this.submitted = false), 5000)
      }
    },
  },
}
</script>

<style scoped>
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

label {
  font-weight: 600;
  color: #24364c;
}

input,
textarea {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: inherit;
  font-size: 1rem;
}

input:focus,
textarea:focus {
  border-color: #ff4d00;
  outline: none;
}

button {
  background-color: #ff4d00;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.7rem 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

button:hover:not(:disabled) {
  background-color: #e24300;
}

.success-msg {
  color: green;
  font-weight: 600;
  text-align: center;
}
</style>
