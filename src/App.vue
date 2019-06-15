<template>
  <v-app>
    <router-view/>
  </v-app>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Lato:400,700&display=swap');

html, body {
  font-family: 'Lato', sans-serif;
  margin: 0;
  padding: 0;
}

p, h1, h2, h3, h4, h5, h6 {
  margin: 0;
}

a {
  text-decoration: none;
}

/* Custom */

.main-center {
  margin: 0 1.5rem;
}

.page {
  padding-top: 2rem;
  &__section {
    padding: 2rem 0;
    &__title {
      margin-bottom: 1rem;
      display: flex;
      * { font-size: 1rem; }
      h1 {
        color: #5f5f5f;
        width: 70%;
      }
      span {
        width: 30%;
        text-align: right;
        * { color: rgb(2, 175, 132); }
      }
    }
  }
}
</style>
