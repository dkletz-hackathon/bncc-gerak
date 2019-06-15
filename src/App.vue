<template>
  <v-app>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
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
</style>
