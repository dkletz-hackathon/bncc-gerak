<template>
  <div class="navbar">
    <div
      class="navbar__item"
      v-for="(item, i) in items"
      :key="item.name"
      :class="active === i ? 'active': ''"
    >
      <i :class="item.icon"/>
      <p>{{item.name}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: ['active'],
  data() {
    return {
      items: [
        {
          name: "Home",
          icon: "fas fa-home"
        },
        {
          name: "Activities",
          icon: "fas fa-volleyball-ball"
        },
        {
          name: "Events",
          icon: "fas fa-calendar-week"
        },
        {
          name: "Profile",
          icon: "fas fa-user"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  justify-content: space-around;
  position: fixed;
  width: 100%;
  bottom: 0;
  z-index: 1;
  background-color: white;

  -webkit-box-shadow: 0px -14px 37px -14px rgba(0,0,0,0.2);
  -moz-box-shadow: 0px -14px 37px -14px rgba(0,0,0,0.2);
  box-shadow: 0px -14px 37px -14px rgba(0,0,0,0.2);

  &__item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1rem 0;

    * { color: #B1B1B1; }

    i {
      margin-bottom: 0.3rem;
      font-size: 1.2rem;
    }

    p {
      font-size: 0.75rem;
    }

    &.active {
      color: rgb(134, 7, 106);
    }
  }
}
</style>

