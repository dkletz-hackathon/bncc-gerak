<template>
  <div class="navbar">
    <div class="navbar__item" v-for="item in items" :key="item.name">
      <i :class="item.icon"/>
      <p>{{item.name}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      items: [
        {
          name: "Home",
          icon: "fas fa-home"
        },
        {
          name: "Profile",
          icon: "fas fa-user"
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
  justify-content: space-evenly;
  position: fixed;
  width: 100%;
  bottom: 0;

  &__item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1rem 0;

    i {
      margin-bottom: 0.25rem;
      font-size: 1.25rem;
    }
    
    p {
      font-size: 0.85rem;
    }
  }
}
</style>

