<template>
  <div class="search">

    <div class="search__header">
      <span>
        <i class="fas fa-long-arrow-alt-left" />
      </span>
      <span>
        <i class="fas fa-times" @click="close" />
      </span>
    </div>

    <div class="search__content">
      <h1>Mau olahraga?</h1>
      <p>Klik kegiatan pilihanmu, akan kita carikan tempat yang cocok.</p>
      <div class="search__content__category">
        <div
          v-for="(item, i) in items"
          :key="i"
          class="category-item"
          :class="item.chosen ? 'active' : ''"
          @click="choose(i)"
        >
          <div class="category-item__content">
            <h1>{{item.name}}</h1>
          </div>
          <div class="category-item__overlay" />
          <img :src="item.image" class="category-item__image" alt="">
        </div>
      </div>
    </div>

    <div class="search__continue">
      <button :class="stateOne ? 'active': ''">Selanjutnya</button>
    </div>
  
  </div>
</template>

<script>
export default {
  name: 'SearchScreen',
  data () {
    return {
      items: [
        {
          name: 'WEIGHTLIFTING',
          image: 'https://www.cravendc.gov.uk/media/7104/view-from-free-weights.jpg',
          chosen: false
        },
        {
          name: 'JOGGING',
          image: 'https://cdn.idntimes.com/content-images/post/20160725/dsc-0328-4ba81e64bff04ed12d3d0465f2d63274.JPG',
          chosen: false
        },
        {
          name: 'FUTSAL',
          image: 'https://www.epd.org/sites/default/files/styles/news_full_width_image/public/images/Futsal-Court-Conrad-Fischer-Park.jpg?itok=4ZuMa8wK',
          chosen: false
        },
        {
          name: 'ZUMBA',
          image: 'http://bossgyms.com/wp-content/uploads/2018/02/zumba.jpg',
          chosen: false
        }
      ]
    }
  },
  methods: {
    close () {
      this.$emit('close')
    },
    choose (idx) {
      this.items[idx].chosen = !this.items[idx].chosen
    }
  },
  computed: {
    stateOne () {
      let state = false
      for (let i=0; i<this.items.length; i++) {
        if (this.items[i].chosen) {
          state = true
          break
        }
      }
      return state
    }
  }
}
</script>

<style lang="scss" scoped>
.search {
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100vw;
  padding: 2rem 1.5rem;
  z-index: 999;
  background-color: white;

  &__header {
    display: flex;
    span {
      display: flex;
      width: 50%;
      &:last-child { justify-content: flex-end; }
      i {
        font-size: 1.5rem;
      }
    }
  }

  &__content {
    margin-top: 2rem;

    >h1 { color: #2a0269; }

    >p {
      margin-top: 0.25rem;
      margin-bottom: 2rem;
      font-size: 1.2rem;
      line-height: 1.5rem;
      color: #444444;
    }

    &__category {
      display: flex;
      flex-wrap: wrap;

      .category-item {
        width: calc(50% - 0.8rem);
        height: 8rem;
        overflow: hidden;
        border-radius: 8px;
        position: relative;
        margin-bottom: 0.8rem;

        &:nth-child(odd) { margin-right: 0.8rem; }

        &.active {
          .category-item__overlay {
            background: rgb(0, 0, 0);
          }
          .category-item__image {
            filter: grayscale(0) contrast(200%);
          }
        }

        &__overlay {
          position: absolute;
          width: 100%;
          height: 100%;
          background: rgb(134, 7, 113);
          opacity: 0.5;
          z-index: 1;
        }

        &__image {
          height: 100%;
          filter: grayscale(100%) contrast(200%);
          position: absolute;
          >img { width: 100%; }
        }

        &__content {
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          z-index: 2;
          width: 100%;
          height: 100%;
          h1 {
            padding: 0 0.5rem;
            color: white;
            font-size: 0.85rem;
            letter-spacing: 0.15rem;
            text-align: center;
          }
        }
      }

    }
  }

  &__continue {
    position: absolute;
    bottom: 0;
    padding: 1rem 0;
    width: 100%;

    button {
      background-color: rgb(151, 151, 151);
      color: white;
      padding: 1.2rem;
      border-radius: 8px;
      text-transform: uppercase;
      letter-spacing: 0.15rem;
      width: calc(100% - 3rem);
      &.active {
        background-color: rgb(7, 58, 134);
      }
    }
  }
}
</style>
