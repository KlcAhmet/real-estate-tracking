<template lang="pug">
.row
  .col-12
    h3 Müşteri Bilgileri
    .row
      .col-6
        label.form-label İsim
        input.form-control(v-model.trim="contact_name" type="text"
          placeholder="İsim"
          )
      .col-6
        label.form-label Soyisim
        input.form-control(v-model.trim="contact_surname" type="text"
          placeholder="Soyisim"
          )
      .col-6
        label.form-label Email
        input.form-control(v-model.trim="contact_email" type="email"
          placeholder="name@example.com"
          )
      .col-6
        label.form-label Telefon
        input.form-control(v-model.trim="contact_phone" type="text"
          placeholder="(___) ___ __ __"
          )
</template>

<script>
export default {
  name: 'newappointment-contacts',
  computed: {
    contact_name: {
      set(value) {
        this.$store.dispatch('setContactKeyAndValue', {
          key: 'contact_name',
          value: value,
        })
      },
      get() {
        return this.$store.getters.getContact.contact_name
      },
    },
    contact_surname: {
      set(value) {
        this.$store.dispatch('setContactKeyAndValue', {
          key: 'contact_surname',
          value: value,
        })
      },
      get() {
        return this.$store.getters.getContact.contact_surname
      },
    },
    contact_email: {
      set(value) {
        this.$store.dispatch('setContactKeyAndValue', {
          key: 'contact_email',
          value: value,
        })
      },
      get() {
        return this.$store.getters.getContact.contact_email
      },
    },
    contact_phone: {
      set(value) {
        this.$store.dispatch('setContactKeyAndValue', {
          key: 'contact_phone',
          value: value,
        })
      },
      get() {
        return this.$store.getters.getContact.contact_phone
      },
    },
  },
}
</script>

<style scoped></style>
