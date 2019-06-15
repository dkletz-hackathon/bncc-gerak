<template>
  <div class="page home">
    <search-screen
      :active="searchPopup"
      @close="toggleSearchPopup"
    />

    <navbar active="0"/>

    <div class="home__logo main-center">
      <img :src="require('@/assets/gerak.png')" alt="">
    </div>

    <div class="home__search main-center" @click="toggleSearchPopup">
      <i class="fas fa-search"></i>
      <span>Mau olahraga apa hari ini?</span>
    </div>

    <!-- <div class="home__membership main-center">
      <h1 class="membership__title">Silver Membership</h1>
      <div class="membership__line"></div>
    </div> -->

    <div class="page__section">
      <div class="page__section__title main-center">
        <h1>Kategori</h1>
        <span>
          <router-link to="/recommendation">Lihat Semua</router-link>
        </span>
      </div>
      <category-carousel/>
    </div>

    <div class="page__section">
      <div class="page__section__title main-center">
        <h1>Rekomendasi Untukmu</h1>
        <span>
          <router-link to="/recommendation">Lihat Semua</router-link>
        </span>
      </div>
      <place-carousel/>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar/Navbar.vue";
import SearchScreen from '@/components/SearchScreen/SearchScreen.vue'
import PlaceCarousel from "./PlaceCarousel";
import CategoryCarousel from "./CategoryCarousel";

export default {
  name: "HomePage",
  components: {
    Navbar,
    PlaceCarousel,
    CategoryCarousel,
    SearchScreen
  },
  data () {
    return {
      searchPopup: false
    }
  },
  methods: {
    toggleSearchPopup () {
      this.searchPopup = !this.searchPopup
    }
  }
};
</script>

<style lang="scss" scoped>
.home {

  &__logo {
    img {
      width: 8rem;
      margin-bottom: 2rem;
    }
  }

  &__search {
    margin-bottom: 0rem;
    background-color: #e6e6e6;
    border-radius: 8px;
    display: flex;
    align-items: center;
    padding: 0.8rem 1rem;

    i {
      margin-right: 1rem;
    }

    span {
      color: grey;
    }
  }

  &__membership {
    background: rgb(134, 7, 106);
    background: linear-gradient(
      90deg,
      rgba(134, 7, 106, 1) 0%,
      rgba(45, 9, 121, 1) 50%,
      rgba(0, 137, 255, 1) 100%
    );
    padding: 1rem;
    border-radius: 10px;
    color: white;
    -webkit-box-shadow: 0px 10px 37px -14px rgba(0, 0, 0, 0.58);
    -moz-box-shadow: 0px 10px 37px -14px rgba(0, 0, 0, 0.58);
    box-shadow: 0px 10px 37px -14px rgba(0, 0, 0, 0.58);

    .membership {
      &__title {
        font-size: 1rem;
      }
      &__line {
        padding: 0.35rem 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.521);
      }
    }
  }

}
</style>
