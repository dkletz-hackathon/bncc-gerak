<template>
  <div class="search" v-if="active">

    <div class="search__header">
      <span>
        <i class="fas fa-long-arrow-alt-left" @click="prevState" />
      </span>
      <span>
        <i class="fas fa-times" @click="close" />
      </span>
    </div>

    <div class="search__content">
      <!-- activity -->
      <div v-if="state === 0">
        <h1>Mau olahraga?</h1>
        <p>Klik kegiatan pilihanmu, akan kita carikan tempat yang cocok.</p>
        <choose-activity
          :items="activityItems"
          @chosen="setActivity"
        />
      </div>
      <!-- place -->
      <div v-if="state === 1">
        hehe
      </div>
    </div>

    <div class="search__continue">
      <button
        :class="isActive ? 'active': ''"
        @click="nextState"
      >
        Selanjutnya
      </button>
    </div>
  
  </div>
</template>

<script>
import ChooseActivity from './ChooseActivity'

export default {
  name: 'SearchScreen',
  props: ['active'],
  components: {
    ChooseActivity
  },
  data () {
    return {
      state: 0,
      search: {
        activity: null,
        place: null
      },
      activityItems: [
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
      this.search = {
        activity: null,
        place: null
      }
      for (let i=0; i<this.activityItems.length; i++) {
        this.activityItems[i].chosen = false
      }
      this.$emit('close')
    },
    setActivity (status) {
      this.search.activity = status
    },
    nextState () {
      if (this.search.activity) this.state = 1
    },
    prevState () {
      this.state--
    }
  },
  computed: {
    isActive () {
      if (this.search.activity && (this.state === 0)) return true
      if (this.search.place && (this.state === 1)) return true
      return false
    }
  }
}
</script>

<style lang="scss" scoped>
.search {
  position: fixed;
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

    >div {
      h1 { color: #2a0269; }
      p {
        margin-top: 0.25rem;
        margin-bottom: 2rem;
        font-size: 1.2rem;
        line-height: 1.5rem;
        color: #444444;
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
