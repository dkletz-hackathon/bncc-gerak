<template>
  <div class="place">

    <div class="place__content">
      test
    </div>

    <div class="place__header">
      <div class="main-center">
        <div>
          <span><i class="fas fa-dumbbell" /></span>
          <span><h2>Weightlifting</h2></span>
        </div>
        <h1>Urban Gym</h1>
      </div>
      <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlacePage'
}
</script>

<style lang="scss" scoped>
.place {

  &__header {
    position: fixed;
    width: 100%;
    img {
      width: 100%;
      filter: brightness(50%);
    }
    >div {
      padding-top: 3rem;
      z-index: 1;
      position: absolute;
      * { color: white; }
      h2 {
        font-weight: normal;
        font-size: 1rem;
      }
      >div {
        display: flex;
        i { margin-right: 0.5rem; }
      }
    }
  }

  &__content {
    width: 100%;
    z-index: 1;
    position: absolute;
    margin-top: 10rem;
    padding: 2rem;
    height: 80vh;
    border-radius: 30px;
    background-color: white;
  }

}
</style>
