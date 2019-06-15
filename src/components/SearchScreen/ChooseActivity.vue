<template>
  <div class="search__content__category">
    <div
      v-for="(activity, i) in activities"
      :key="i"
      class="category-item"
      :class="activity.chosen ? 'active' : ''"
      @click="chooseActivity(i)"
    >
      <div class="category-item__content">
        <h1>{{activity.name}}</h1>
      </div>
      <div class="category-item__overlay"/>
      <img :src="activity.urlImage" class="category-item__image" alt>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  name: "ChooseActivity",
  props: ["items"],
  computed: {
    ...mapState("chooseActivityStore", {
      activities: "activities"
    })
  },
  methods: {
    ...mapMutations("chooseActivityStore", [
      "chooseActivity"
    ]),
    ...mapActions("chooseActivityStore", [
      "fetchActivities"
    ])
  },
  mounted() {
    this.fetchActivities();
  }
};
</script>

<style lang="scss" scoped>
.search__content__category {
  display: flex;
  flex-wrap: wrap;

  .category-item {
    width: calc(50% - 0.8rem);
    height: 8rem;
    overflow: hidden;
    border-radius: 8px;
    position: relative;
    margin-bottom: 0.8rem;

    -webkit-box-shadow: 0px 12px 30px -17px rgba(0, 0, 0, 0.72);
    -moz-box-shadow: 0px 12px 30px -17px rgba(0, 0, 0, 0.72);
    box-shadow: 0px 12px 30px -17px rgba(0, 0, 0, 0.72);

    &:nth-child(odd) {
      margin-right: 0.8rem;
    }

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
      > img {
        width: 100%;
      }
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
</style>
