import Vue from "vue";
import Vuex from "vuex";
import SessionStore from "./store/shared/session";
import LoginStore from "./store/views/login";
import CategoryCarouselStore from "./store/views/home/category-carousel";
import PlaceStore from "./store/shared/place";
import ChooseActivityStore from "./store/views/search/choose-activity";
import PlaceDetailStore from "./store/views/place/place-detail";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    session: SessionStore,
    login: LoginStore,
    categoryCarousel: CategoryCarouselStore,
    placeStore: PlaceStore,
    chooseActivityStore: ChooseActivityStore,
    placeDetailStore: PlaceDetailStore
  }
})
