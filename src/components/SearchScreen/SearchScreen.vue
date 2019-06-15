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
        <choose-place/>
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
import { mapGetters, mapMutations, mapState } from "vuex";

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
      }
    };
  },
  methods: {
    close() {
      this.search = {
        activity: null,
        place: null
      };
      this.state = 0;
      this.$emit("close");
    },
    setPlace(status) {
      this.search.place = status;
    },
    handleSearchButtonClick() {
      console.log("Hayo");
      console.log(this.state);
      const chosenActivities = this.getChosenActivities();
      if (this.state == 0 && chosenActivities.length) {
        this.state = 1;
        this.button = "Pilih Tempat";
        this.setQuery(chosenActivities);
        return;
      }
      if (this.state == 1) {
        const id = this.getChosenId();
        console.log(id);
        this.$router.push(`/place/${id}`);
      }
    },
    prevState() {
      this.state--;
      if (this.state === 0) {
        this.setQuery([]);
      }
    },
    ...mapGetters("chooseActivityStore", [
      "getChosenActivities"
    ]),
    ...mapGetters("placeStore", [
      "getChosenId"
    ]),
    ...mapMutations("placeDetailStore", [
      "setQuery"
    ])
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
