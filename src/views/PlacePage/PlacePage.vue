<template>
  <div class="place">
    <schedule :active="active" :schedules="schedules" :place="place" @close="active = false"/>

    <div class="place__content">
      <div class="content-section">
        <h1>Lokasi Tempat</h1>
        <div>
          <GmapMap
            :center="{lat:place.lat, lng:place.long}"
            :zoom="15"
            map-type-id="terrain"
            class="map"
          >
            <GmapMarker
              :key="index"
              v-for="(m, index) in markers"
              :position="m.position"
              :clickable="true"
              :draggable="true"
              :options="{
                disableDefaultUI: true
              }"
              @click="center=m.position"
            />
          </GmapMap>
        </div>
      </div>

      <div class="content-section" v-if="place.events.length != 0">
        <h1 class>Event</h1>
        <div class="routine" v-for="(event, i) in place.events" :key="i">
          <div class="routine__image">
            <img :src="event.image" alt>
          </div>
          <div class="routine__data">
            <h1 class="routine__data__title">{{ event.name }}</h1>
            <div class="routine__data__time">
              <span>
                <i class="far fa-clock"></i>
                <p>{{ event.timeDisplay }}</p>
              </span>
              <span>
                <i class="far fa-calendar-minus"></i>
                <p>{{ event.dayDisplay }}</p>
              </span>
            </div>
            <div class="routine__data__control">
              <button @click="addEvent(i)">TAMBAH REMINDER</button>
              <button @click="shareEventTwitter(i)">
                <i class="fab fa-twitter"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="content-section" v-if="place.routines.length != 0">
        <h1 class>Agenda Rutin</h1>
        <div class="routine" v-for="(event, i) in place.routines" :key="i">
          <div class="routine__image">
            <img src="http://bossgyms.com/wp-content/uploads/2018/02/zumba.jpg" alt>
          </div>
          <div class="routine__data">
            <h1 class="routine__data__title">Daily Zumba Class</h1>
            <div class="routine__data__control">
              <button @click="showModal(i)">LIHAT JADWAL</button>
              <button>
                <i class="fab fa-twitter"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="place__header">
      <div class="main-center">
        <div>
          <span>
            <i class="fas fa-dumbbell"/>
          </span>
          <span>
            <h2>{{ place.category.name }}</h2>
          </span>
        </div>
        <h1>{{ place.name }}</h1>
        <div>
          <span>
            <i class="fas fa-map-marker-alt"/>
          </span>
          <span>{{ place.address }}</span>
        </div>
      </div>
      <img :src="place.logo" alt>
    </div>
  </div>
</template>

<script>
import Schedule from "./Schedule";
import { mapActions, mapState } from "vuex";
import { getStartAndEndDays } from "../../helper/datetime";
import { generateTwitterLink } from "../../helper/twitter";

export default {
  name: "PlacePage",
  components: {
    Schedule
  },
  data() {
    return {
      active: false,
      schedules: []
    };
  },
  computed: {
    ...mapState("placeDetailStore", {
      place: "place"
    }),
    markers() {
      let marker = {
        lat: this.place.lat,
        lng: this.place.long
      };
      return [marker];
    }
  },
  methods: {
    showModal(id) {
      this.schedules = this.place.routines[id].schedules;
      this.active = true;
    },
    addEvent(id) {
      window.open(this.place.events[id].gcUrl);
    },
    shareEventTwitter(id) {
      const url = generateTwitterLink(
        `Ada acara ${
          this.place.events[id].name
        } asik nih di http://139.99.77.25/place/${this.place.id}`
      );
      window.open(url);
    },
    ...mapActions("placeDetailStore", ["fetchPlace"])
  },
  mounted() {
    const place = this.place;
    const id = this.$route.params.id;
    this.fetchPlace(id);
  }
};
</script>

<style lang="scss" scoped>
.map {
  margin-top: 1rem;
  height: 20rem;
  width: 100%;
}

.place {
  &__header {
    position: fixed;
    width: 100%;
    height: 20rem;
    overflow: hidden;
    img {
      height: 100%;
      filter: brightness(50%);
    }
    > div {
      padding-top: 3rem;
      z-index: 1;
      position: absolute;
      * {
        color: white;
      }
      h2 {
        font-weight: normal;
        font-size: 1rem;
      }
      > div {
        margin-top: 0.25rem;
        display: flex;
        i {
          margin-right: 0.5rem;
        }
        &:first-child {
          margin-bottom: 1rem;
          h2 {
            text-transform: uppercase;
            letter-spacing: 0.15rem;
          }
        }
        &:last-child {
          margin-top: 0.8rem;
          font-size: 0.85rem;
        }
      }
    }
  }

  &__content {
    width: 100%;
    z-index: 1;
    position: absolute;
    margin-top: 14.5rem;
    padding: 2rem;
    height: 80vh;
    background-color: white;

    .content-section {
      margin-bottom: 2rem;

      > h1 {
        font-size: 1.2rem;
        color: #27153b;
      }

      .routine {
        margin: 1rem 0;

        &__image {
          height: 6rem;
          overflow: hidden;
          border-radius: 8px;
          > img {
            width: 100%;
            filter: brightness(70%);
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
            margin-top: 5px;
            span {
              display: flex;
              align-items: center;
              width: 50%;
              i {
                margin-right: 8px;
                color: rgb(134, 7, 106);
              }
              &:last-child {
                justify-content: flex-end;
              }
            }
          }

          &__control {
            margin-top: 10px;
            button {
              background-color: rgb(110, 17, 146);
              padding: 0.8rem;
              border-radius: 8px;
              color: white;
              &:first-child {
                width: calc(85% - 8px);
                margin-right: 8px;
                font-size: 0.85rem;
                letter-spacing: 0.12rem;
              }
              &:last-child {
                width: 15%;
                background-color: rgb(30, 147, 201);
              }
            }
          }
        }
      }
    }
  }
}
</style>
