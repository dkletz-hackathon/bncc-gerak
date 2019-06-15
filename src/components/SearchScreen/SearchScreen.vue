<template>
  <div class="search" v-if="active">
    <div class="search__header">
      <span>
        <i class="fas fa-long-arrow-alt-left" @click="prevState"/>
      </span>
      <span>
        <i class="fas fa-times" @click="close"/>
      </span>
    </div>

    <div class="search__content">
      <!-- activity -->
      <div v-if="state === 0">
        <h1>Mau olahraga?</h1>
        <p>Klik kegiatan pilihanmu, akan kita carikan tempat yang cocok.</p>
        <choose-activity/>
      </div>
      <!-- place -->
      <div v-if="state === 1">
        <h1>Yuk Pilih Tempat!</h1>
        <p>Klik di salah satu tempat pilihanmu, lalu klik selanjutnya.</p>
        <choose-place :items="placeItems" @chosen="setPlace"/>
      </div>
    </div>

    <div class="search__continue">
      <button :class="isActive ? 'active': ''" @click="handleSearchButtonClick">{{button}}</button>
    </div>
  </div>
</template>

<script>
import ChooseActivity from "./ChooseActivity";
import ChoosePlace from "./ChoosePlace";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "SearchScreen",
  props: ["active"],
  components: {
    ChooseActivity,
    ChoosePlace
  },
  data() {
    return {
      button: 'Selanjutnya',
      state: 0,
      search: {
        activity: null,
        place: null
      },
      placeItems: [
        {
          name: "Urban Gym",
          image:
            "https://www.cravendc.gov.uk/media/7104/view-from-free-weights.jpg",
          chosen: false
        },
        {
          name: "Taman Ismail Marzuki",
          image:
            "https://cdn.idntimes.com/content-images/post/20160725/dsc-0328-4ba81e64bff04ed12d3d0465f2d63274.JPG",
          chosen: false
        },
        {
          name: "Futsal Active",
          image:
            "https://www.epd.org/sites/default/files/styles/news_full_width_image/public/images/Futsal-Court-Conrad-Fischer-Park.jpg?itok=4ZuMa8wK",
          chosen: false
        },
        {
          name: "Studio Zumba Axel",
          image: "http://bossgyms.com/wp-content/uploads/2018/02/zumba.jpg",
          chosen: false
        }
      ]
    };
  },
  methods: {
    close() {
      this.search = {
        activity: null,
        place: null
      };
      this.state = 0;
      for (let i = 0; i < this.activityItems.length; i++) {
        this.activityItems[i].chosen = false;
      }
      for (let i = 0; i < this.placeItems.length; i++) {
        this.placeItems[i].chosen = false;
      }
      this.$emit("close");
    },
    setPlace(status) {
      this.search.place = status;
    },
    handleSearchButtonClick() {
      const chosenActivities = this.getChosenActivities();
      if (chosenActivities.length) {
        this.state = 1;
        this.button = "Pilih Tempat";
      }
    },
    prevState() {
      this.state--;
    },
    ...mapGetters("chooseActivityStore", [
      "getChosenActivities"
    ]),
    ...mapMutations("placeDetailStore", {
      setPlaceDetail: "setPlace"
    })
  },
  computed: {
    isActive() {
      if (this.search.activity && this.state === 0) return true;
      if (this.search.place && this.state === 1) return true;
      return false;
    }
  }
};
</script>

<style lang="scss" scoped>
.search {
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100vw;
  padding: 2rem 0;
  z-index: 999;
  background-color: white;
  overflow: auto;
  animation: slideUp 0.4s ease;

  &__header {
    padding: 0 1.5rem;
    display: flex;
    span {
      display: flex;
      width: 50%;
      &:last-child {
        justify-content: flex-end;
      }
      i {
        font-size: 1.5rem;
      }
    }
  }

  &__content {
    margin-top: 2rem;
    padding: 0 1.5rem;

    > div {
      h1 {
        color: #2a0269;
        animation: slideLeft 0.5s ease;
      }
      p {
        margin-top: 0.25rem;
        margin-bottom: 2rem;
        font-size: 1.2rem;
        line-height: 1.5rem;
        color: #444444;
        animation: slideLeft 1s ease;
      }
    }
  }

  &__continue {
    position: fixed;
    bottom: 0;
    padding: 1rem 0;
    width: 100%;
    background-color: white;
    z-index: 2;

    button {
      background-color: rgb(151, 151, 151);
      color: white;
      padding: 1.2rem;
      margin: 0 1.5rem;
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

@keyframes slideUp {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slideLeft {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
