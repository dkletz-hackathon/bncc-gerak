<template>
  <div class="profile">
    <navbar active="3"/>

    <div class="profile__panel">
      <div class="profile__panel__image">
        <img src="https://cdn.idntimes.com/content-images/community/2019/03/51021013-237686723851021-5419594866899599564-n-383f6bb258383012cb5b5a76ab6cd8a5.jpg" alt="">
      </div>
      <div class="profile__panel__data">
        <h1>{{user.name}}</h1>
        <h2>{{user.email}}</h2>
      </div>
    </div>

    <div class="profile__membership main-center">
      <h1>Membership Info</h1>
      <div class="profile__membership__image">
        <div v-if="!membership" class="membership__title">
          <div>
            <h1>No Membership</h1>
            <i class="fas fa-crown"></i>
          </div>
          <p>Anda tidak mempunyai membership. Yuk daftar di sini!</p>
        </div>
        <div v-else class="membership__title">
          <div>
            <h1 v-if="membership.memberType === 'silver'">Silver Membership</h1>
            <h1 v-else-if="membership.memberType === 'gold'">Gold Membership</h1>
            <h1 v-else>Bronze Membership</h1>
            <i class="fas fa-crown"></i>
          </div>
          <p>{{membership.description}}</p>
        </div>
        <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="">
      </div>
      <div class="profile__membership__qrcode" v-if="membership">
        <qrcode-vue :value="membership.memberType" :size="size"></qrcode-vue>
      </div>
    </div>
  </div>
</template>

<script>
  import QrcodeVue from 'qrcode.vue';
  import Navbar from "@/components/Navbar/Navbar.vue";

  export default {
    name: 'profile',
    components: {
      Navbar, QrcodeVue
    },
    data() {
      return {
        size: 150
      }
    },
    computed: {
      user() {
        return this.$store.state.session.user
      },
      membership() {
        return this.$store.state.session.user.membership;
      }
    },
    mounted() {
      this.$store.dispatch("session/getProfile").then(() => {
        console.log("OK")
      })
    }

  }
</script>

<style lang="scss" scoped>
.profile {
  background-color: #F2F6FE;
  min-height: 100vh;
  padding-bottom: 6rem;

  &__panel {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: white;
    padding: 2.5rem 0;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    -webkit-box-shadow: 0px 12px 40px -34px rgba(0,0,0,0.38);
    -moz-box-shadow: 0px 12px 40px -34px rgba(0,0,0,0.38);
    box-shadow: 0px 12px 40px -34px rgba(0,0,0,0.38);
    animation: slideDown 0.5s ease;

    &__image {
      border-radius: 100px;
      height: 7rem;
      width: 7rem;
      overflow: hidden;
      >img { width: 100%; }
    }

    &__data {
      margin-top: 1rem;
      h1 {
        font-size: 1.35rem;
        text-align: center;
        margin-bottom: 0.2rem;
        color: rgb(41, 25, 59);
      }
      h2 {
        font-size: 0.85rem;
        font-weight: normal;
        text-align: center;
        color: grey;
      }
    }
  }

  &__membership {
    padding-top: 1.5rem;

    >h1 {
      color: #27153b;
      opacity: 0;
      font-size: 1.1rem;
      animation: fadeIn 1s forwards;
      animation-delay: 0.3s;
    }

    &__image {
      opacity: 0;
      animation: fadeIn 1s forwards;
      animation-delay: 0.6s;
      margin-top: 1rem;
      border-radius: 10px;
      height: 10rem;
      overflow: hidden;
      >img {
        width: 100%;
        filter: brightness(50%);
      }
      .membership__title {
        position: absolute;
        z-index: 1;
        padding: 1rem;
        padding-top: 5.5rem;
        * { color: white; }
        >div {
          display: flex;
          align-items: center;
          >h1 {
            font-size: 1.35rem;
            margin-right: 10px;
          }
          >i {
            font-size: 1.5rem;
          }
        }
        >p {
          margin-top: 0.35rem;
        }
      }
    }

    &__qrcode {
      margin-top: 1.5rem;
      display: flex;
      justify-content: center;
      opacity: 0;
      animation: fadeIn 1s forwards;
      animation-delay: 0.9s;
    }
  }
}

@keyframes slideDown {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes slideUp {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
</style>
