<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Lato:400,700&display=swap');
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&display=swap');

$purple: rgb(177, 22, 55);

html, body {
  #app { font-family: 'Lato', sans-serif !important; }
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
  padding-bottom: 7rem;

  &__section {
    padding-top: 2.5rem;
    &__title {
      margin-bottom: 1rem;
      display: flex;
      align-items: center;
      h1 {
        color: #27153b;
        width: 70%;
        font-size: 1.1rem;
      }
      span {
        width: 30%;
        text-align: right;
        font-size: 0.8rem;
        * { color: $purple; }
      }
    }
  }
}

.carousel {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  overflow-x: auto;
  overflow-y: hidden;
}
</style>
