<template>
  <div class="carousel">
    <div
      class="carousel__item"
      v-for="(item, i) in items"
      :key="i"
    >
      <img
        :src="item.image"
        :alt="item.title"
        class="item__image"
      />
      <div class="item__content">
        <i class="fas fa-dumbbell" />
        <h2>{{item.type}}</h2>
        <h1>{{item.title}}</h1>
        <h3>
          <i class="fas fa-map-marker-alt" />
          800 m dari lokasi Anda
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlaceCarousel',
  data () {
    return {
      items: [
        {
          type: 'Weightlifting',
          title: 'Urban Gym',
          image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
        },

        {
          type: 'Jogging Track',
          title: 'Taman Suropati',
          image: 'https://backpackerjakarta.com/wp-content/uploads/2016/08/taman-suropati-4.jpg'
        },
        {
          type: 'Weightlifting',
          title: 'Gold\'s Gym',
          image: 'https://www.cravendc.gov.uk/media/7104/view-from-free-weights.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.carousel {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  overflow-x: auto;
  overflow-y: hidden;

  &__item {
    flex: 0 0 auto;
    width: 53vw;
    height: 17rem;
    overflow: hidden;
    border-radius: 15px;
    margin-right: 1rem;
    position: relative;

    // -webkit-box-shadow: 0px 10px 37px -14px rgba(0,0,0,0.58);
    // -moz-box-shadow: 0px 10px 37px -14px rgba(0,0,0,0.58);
    // box-shadow: 0px 10px 37px -14px rgba(0,0,0,0.58);

    &:first-child {
      margin-left: 1.5rem;
    }
    &:last-child {
      margin-right: 1.5rem;
    }
  }

  .item {

    &__image {
      height: 100%;
      filter: brightness(60%);
    }

    &__content {
      position: absolute;
      top: 0;
      padding: 1rem;
      margin-top: 1rem;
      * { color: white; }
      >i {
        margin-bottom: 7rem;
        right: 0;
      }
      h1 {
        font-size: 1.2rem;
        margin-bottom: 0.75rem;
      }
      h2 {
        font-weight: normal;
        font-size: 0.75rem;
        margin-bottom: 0.25rem;
      }
      h3 {
        font-weight: normal;
        font-size: 0.65rem;
        i { margin-right: 5px; }
      }
    }
  }
}
</style>
