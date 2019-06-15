<template>
  <div class="carousel" id>
    <div class="category-item" v-for="(item, i) in items" :key="i">
      <div class="category__content">
        <h1>{{item.name}}</h1>
      </div>
      <div class="category__overlay"/>
      <img :src="item.image" class="category__image" alt>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryCarousel",
  data() {
    return {
      items: [
        {
          name: "GYM",
          image:
            "https://www.cravendc.gov.uk/media/7104/view-from-free-weights.jpg"
        },
        {
          name: "JOGGING TRACK",
          image:
            "https://cdn.idntimes.com/content-images/post/20160725/dsc-0328-4ba81e64bff04ed12d3d0465f2d63274.JPG"
        },
        {
          name: "FUTSAL COURT",
          image:
            "https://www.epd.org/sites/default/files/styles/news_full_width_image/public/images/Futsal-Court-Conrad-Fischer-Park.jpg?itok=4ZuMa8wK"
        },
        {
          name: "ZUMBA STUDIO",
          image: "http://bossgyms.com/wp-content/uploads/2018/02/zumba.jpg"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.category-item {
  flex: 0 0 auto;
  margin-right: 0.8rem;
  width: 8rem;
  height: 6rem;
  overflow: hidden;
  border-radius: 8px;
  position: relative;

  &:first-child {
    margin-left: 1.5rem;
  }

  .category {
    &__overlay {
      position: absolute;
      width: 100%;
      height: 100%;
      background: rgb(134, 7, 106);
      opacity: 0.5;
      z-index: 1;
    }

    &__image {
      height: 100%;
      filter: grayscale(100%) contrast(200%);
      position: absolute;
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
