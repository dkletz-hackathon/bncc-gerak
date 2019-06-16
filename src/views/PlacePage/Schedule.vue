<template>
  <div class="schedule" v-if="active">
    <div class="schedule__close" @click="$emit('close')"/>
    <div class="schedule__modal">
      <!-- Jadwal -->
      <h1 class="modal__header">Pilih Jadwal</h1>
      <div class="modal__date">
        <div
          class="modal__date__item"
          v-for="(item, i) in items"
          :key="i"
          :class="`${itemClass(i)} ${item.chosen ? 'chosen': ''}`"
          @click="choose(i)"
        >
          <h2>{{item.startDate || ""}}</h2>
          <h1>{{item.day}}</h1>
        </div>
      </div>
      <!-- Reminder -->
      <button @click="addReminder" class="modal__button">Tambah Reminder</button>
    </div>
  </div>
</template>

<script>
import { sanitizeRoutineDateTime } from "../../helper/datetime";
import { generateGoogleCalendar } from "../../helper/google-calendar";

export default {
  name: "Schedule",
  props: ["active", "schedules", "place"],
  data() {
    return {
      items: [
        {
          date: "17 Jun",
          day: "Sen",
          available: false,
          chosen: false
        },
        {
          date: "18 Jun",
          day: "Sel",
          available: false,
          chosen: false
        },
        {
          date: "15 Jun",
          day: "Rab",
          available: false,
          chosen: false
        },
        {
          date: "16 Jun",
          day: "Kam",
          available: false,
          chosen: false
        },
        {
          date: "17 Jun",
          day: "Jum",
          available: false,
          chosen: false
        },
        {
          date: "15 Jun",
          day: "Sab",
          available: false,
          chosen: false
        },
        {
          date: "16 Jun",
          day: "Min",
          available: false,
          chosen: false
        }
      ],
      chosen: -1
    };
  },
  methods: {
    choose(idx) {
      this.reset();
      console.log(this.chosen);
      console.log(this.items[idx].available);
      if (this.items[idx].chosen) {
        this.chosen = -1;
      } else if (this.items[idx].available) {
        this.items[idx].chosen = true;
        this.chosen = idx;
      }
    },
    reset() {
      for (let i = 0; i < this.items.length; i++) this.items[i].chosen = false;
    },
    itemClass(idx) {
      let name = "",
        item = this.items[idx];
      if (item.available === true) name += "available";
      return name;
    },
    addReminder() {
      if (this.chosen != -1) {
        const chosen = this.schedules.filter(
          schedule => schedule.day == this.chosen
        )[0];
        const url = generateGoogleCalendar(
          this.place.name,
          this.place.description,
          this.place.address,
          chosen.startAt.split(":")[0],
          chosen.endAt.split(":")[0]
        );
        console.log(url);
        window.open(url);
      }
    }
  },
  watch: {
    schedules(newValue, oldValue) {
      newValue.forEach(schedule => {
        const item = this.items[schedule.day];
        item.available = true;
        item.startDate = schedule.startAt;
        item.endDate = schedule.endAt;
        console.log(item);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.schedule {
  z-index: 2;
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.6);
  animation: fadeIn 0.5s ease;

  &__close {
    background-color: rgba(0, 0, 0, 0);
    height: 28.5rem;
    width: 100vw;
    position: absolute;
  }

  &__modal {
    position: absolute;
    bottom: -5rem;
    width: 100%;
    background-color: white;
    border-radius: 25px;
    min-height: 21rem;
    padding: 2rem 1.5rem;
    animation: slideUp 0.3s ease;

    .modal {
      &__header {
        font-size: 1.35rem;
        margin-bottom: 1.2rem;
      }

      &__date {
        display: flex;
        justify-content: space-around;

        &__item {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          border: 1px solid #cacaca;
          padding: 4px 5px;
          border-radius: 5px;
          background-color: rgb(216, 216, 216);

          * {
            color: rgb(145, 145, 145);
          }
          h2 {
            font-size: 0.7rem;
            font-weight: normal;
          }
          h1 {
            font-size: 1.1rem;
          }

          &.available {
            background-color: white;
            h2 {
              color: rgb(83, 83, 83);
            }
            h1 {
              color: black;
            }
          }
          &.chosen {
            background-color: rgb(112, 17, 100);
            border: 1px solid rgb(112, 17, 100);
            * {
              color: white !important;
            }
          }
        }
      }

      &__button {
        margin-top: 2rem;
        width: 100%;
        background-color: rgb(48, 27, 165);
        color: white;
        padding: 1.2rem;
        border-radius: 8px;
        text-transform: uppercase;
        letter-spacing: 0.15rem;
        font-size: 0.85rem;
      }
    }
  }
}

@keyframes slideUp {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>

