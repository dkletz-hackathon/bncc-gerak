<template>
  <div class="page home">
    <navbar />

    <div class="home__membership main-center">
      hehe
    </div>
    <div class="page__section">
      <div class="page__section__title main-center">
        <h1>Rekomendasi Tempat</h1>
        <span>
          <router-link to="/recommendation">
            Lihat Semua
          </router-link>
        </span>
      </div>
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
.home {
  &__membership {
    background-color: red;
    padding: 1rem;
    border-radius: 10px;
  }
}
</style>
