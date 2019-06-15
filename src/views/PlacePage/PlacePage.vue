<template>
  <div class="place">

    <div class="place__content">

      <div class="content-section">
        <h1 class="">Event</h1>
        <div class="routine">
          <div class="routine__image">
            <img src="http://bossgyms.com/wp-content/uploads/2018/02/zumba.jpg" alt="">
          </div>
          <div class="routine__data">
            <h1 class="routine__data__title">Daily Zumba Class</h1>
            <div class="routine__data__time">
              <span>
                <i class="far fa-clock"></i>
                <p>09.00 - 11.30</p>
              </span>
              <span>
                <i class="far fa-calendar-minus"></i>
                <p>Senin - Rabu</p>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="content-section">
        <h1 class="">Agenda Rutin</h1>
        <div class="routine">
          <div class="routine__image">
            <img src="http://bossgyms.com/wp-content/uploads/2018/02/zumba.jpg" alt="">
          </div>
          <div class="routine__data">
            <h1 class="routine__data__title">Daily Zumba Class</h1>
            <div class="routine__data__time">
              <span>
                <i class="far fa-clock"></i>
                <p>09.00 - 11.30</p>
              </span>
              <span>
                <i class="far fa-calendar-minus"></i>
                <p>Senin - Rabu</p>
              </span>
            </div>
          </div>
        </div>
      </div>

    </div>

    <div class="place__header">
      <div class="main-center">
        <div>
          <span><i class="fas fa-dumbbell" /></span>
          <span><h2>Gym</h2></span>
        </div>
        <h1>Urban Gym</h1>
        <div>
          <span><i class="fas fa-map-marker-alt" /></span>
          <span>Jl. Kebon Kacang 35 no. 8, Jakarta Pusat</span>
        </div>
      </div>
      <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlacePage'
}
</script>

<style lang="scss" scoped>
.place {

  &__header {
    position: fixed;
    width: 100%;
    img {
      width: 100%;
      filter: brightness(50%);
    }
    >div {
      padding-top: 3rem;
      z-index: 1;
      position: absolute;
      * { color: white; }
      h2 {
        font-weight: normal;
        font-size: 1rem;
      }
      >div {
        margin-top: 0.25rem;
        display: flex;
        i { margin-right: 0.5rem; }
        &:first-child {
          margin-bottom: 1rem;
          h2 {
            text-transform: uppercase;
            letter-spacing: 0.15rem;
          }
        }
      }
    }
  }

  &__content {
    width: 100%;
    z-index: 1;
    position: absolute;
    margin-top: 13rem;
    padding: 2rem;
    height: 80vh;
    border-radius: 30px;
    background-color: white;

    .content-section {
      margin-bottom: 2rem;

      >h1 {
        font-size: 1.2rem;
        color: #27153b;
      }

      .routine {
        margin: 1rem 0;

        &__image {
          height: 6rem;
          overflow: hidden;
          border-radius: 8px;
          >img {
            width: 100%;
            filter: brightness(70%) grayscale(100%);
          }
        }

        &__data {
          margin-top: 0.5rem;
          &__title {
            font-size: 1.1rem;
            color: rgb(134, 7, 106);
          }
          &__time {
            display: flex;
            align-items: center;
            span {
              display: flex;
              align-items: center;
              width: 50%;
              i {
                margin-right: 8px;
                color: rgb(134, 7, 106);
              }
              &:last-child { justify-content: flex-end; }
            }
          }
        }
      }
    }
  }

}
</style>
