<template>
  <div class="choose-place">
    <div
      class="choose-place__item"
      v-for="(place, i) in places"
      :key="i"
      :class="place.chosen ? 'active' : ''"
      @click="choose(i)"
    >
      <div class="choose-place__item__content">
        <h1>{{place.name}}</h1>
      </div>
      <div class="choose-place__item__overlay"/>
      <img class="choose-place__item__image" :src="place.logo" alt>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions, mapState } from "vuex";
import { getCurrentLocation } from "../../helper/location";

export default {
  name: "ChoosePlace",
  props: ["items"],
  methods: {
    choose(idx) {
      this.setChosen(idx);
    },
    reset() {
      for (let i = 0; i < this.items.length; i++) {
        this.items[i].chosen = false;
      }
    },
    ...mapGetters("chooseActivityStore", [
      "getChosenActivities"
    ]),
    ...mapGetters("placeStore", [
      "getChosenId"
    ]),
    ...mapActions("placeStore", [
      "fetchPlacesByPreferences"
    ]),
    ...mapMutations("placeStore", [
      "setChosen"
    ])
  },
  computed: {
    ...mapState("placeStore", {
      places: "places"
    })
  },
  mounted() {
    const chosenActivities = this.getChosenActivities();
    const { latitude, longitude } = getCurrentLocation();
    this.fetchPlacesByPreferences({ latitude, longitude, chosenActivities });
  }
};
</script>

<style lang="scss" scoped>
.choose-place {
  padding-bottom: 3rem;

  &__item {
    height: 8rem;
    overflow: hidden;
    border-radius: 8px;
    margin-bottom: 1rem;
    position: relative;
    transition-duration: 0.2s;

    -webkit-box-shadow: 0px 12px 30px -17px rgba(0, 0, 0, 0.72);
    -moz-box-shadow: 0px 12px 30px -17px rgba(0, 0, 0, 0.72);
    box-shadow: 0px 12px 30px -17px rgba(0, 0, 0, 0.72);

    &.active {
      transform: scale(1.04);
      .choose-place__item__overlay {
        background: black;
      }
      .choose-place__item__image {
        opacity: 1;
        filter: grayscale(0) contrast(200%);
      }
    }

    &__overlay {
      position: absolute;
      width: 100%;
      height: 100%;
      background: rgb(0,0,0);
      opacity: 0.5;
      z-index: 1;
    }

    &__image {
      width: 100%;
      opacity: 0.5;
      filter: grayscale(100%) contrast(200%);
    }

    &__content {
      position: absolute;
      z-index: 2;
      width: 100%;
      height: 100%;
      padding: 1rem;
      padding-top: 3.5rem;

      h1 {
        padding: 0 0.5rem;
        color: white;
        font-size: 1.25rem;
        // font-size: 0.85rem;
        // letter-spacing: 0.15rem;
        // text-align: center;
      }
    }
  }
}
</style>
