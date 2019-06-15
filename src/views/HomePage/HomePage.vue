<template>
  <div class="container">
    <navbar />

    <div class="page__section">
      <place-carousel />
    </div>
  </div>  
</template>

<script>
import Navbar from '@/components/Navbar/Navbar.vue'
import PlaceCarousel from './PlaceCarousel'

export default {
  name: 'HomePage',
  components: {
    Navbar,
    PlaceCarousel
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding-top: 2rem;
}

.page {
  &__section {

  }
}
</style>
