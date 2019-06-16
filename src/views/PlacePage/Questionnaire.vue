<template>
  <div class="question">
    <div
      class="category-item"
      v-for="(item, i) in items"
      :class="item.chosen ? 'active' : ''"
      :key="i"
      @click="choose(i)"
    >
      <div class="category-item__content">
        <h1>{{item.name}}</h1>
      </div>
      <div class="category-item__overlay"/>
      <img :src="item.url_image" class="category-item__image" alt>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Questionnaire',
  data () {
    return {
      items: [
        {
          id: 1, 
          name: "FUTSAL", 
          url_image: "https://www.epd.org/sites/default/files/styles/news_full_width_image/public/images/Futsal-Court-Conrad-Fischer-Park.jpg?itok=4ZuMa8wK",
          chosen: false
        }, 
        {
          id: 2, 
          name: "JOGGING", 
          url_image: "https://cdn.idntimes.com/content-images/post/20160725/dsc-0328-4ba81e64bff04ed12d3d0465f2d63274.JPG",
          chosen: false
        },
        {
          id: 6, 
          name: "CASUAL",
          url_image: "https://www.liverpool-one.com/wp-content/uploads/2016/10/the-gym.jpg",
          chosen: false
        }, 
        {
          id: 7, 
          name: "SOCIAL",
          url_image: "https://cimg0.ibsrv.net/cimg/www.fitday.com/693x350_85-1/0/gymsocial-123000.jpg",
          chosen: false
        }
      ], 
    }
  },
  methods: {
    choose (i) {
      this.items[i].chosen = !this.items[i].chosen
    }
  }
}
</script>

<style lang="scss" scoped>
.question {
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;

  .category-item {
    width: calc(50% - 0.8rem);
    height: 8rem;
    overflow: hidden;
    border-radius: 8px;
    position: relative;
    margin-bottom: 0.8rem;
    animation: fadeUp 1.5s ease;
    transition-duration: 0.2s;

    -webkit-box-shadow: 0px 12px 30px -17px rgba(0, 0, 0, 0.72);
    -moz-box-shadow: 0px 12px 30px -17px rgba(0, 0, 0, 0.72);
    box-shadow: 0px 12px 30px -17px rgba(0, 0, 0, 0.72);

    &:nth-child(odd) {
      margin-right: 0.8rem;
    }

    &.active {
      transform: scale(1.04);
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
