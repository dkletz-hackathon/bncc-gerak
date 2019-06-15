import Vue from "vue";
import Vuex from "vuex";
import SessionStore from "./store/shared/session";
import LoginStore from "./store/views/login";
import CategoryCarouselStore from "./store/views/home/category-carousel";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    session: SessionStore,
    login: LoginStore,
    categoryCarousel: CategoryCarouselStore
  }
})
