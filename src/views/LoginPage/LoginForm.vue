<template>
  <v-container>
    <v-layout column>
      <v-flex>
        <v-text-field label="Email" v-model="email" single-line></v-text-field>
      </v-flex>
      <v-flex>
        <v-text-field label="Password" v-model="password" single-line></v-text-field>
      </v-flex>
      <v-flex grow align-self-center>
        <button @click="login">Login</button>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    async login() {
      const email = this.email;
      const password = this.password;

      this.$store
        .dispatch("login/login", {
          email,
          password
        })
        .then(success => {
          if (success) {
            this.$router.push({ name: "home" });
          }
        })
        .catch(error => console.log(error));
    }
  }
};
</script>

<style>
</style>
