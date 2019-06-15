import { Marathon, Place } from "../../../api/sano";

const placeDetailStore = {
  namespaced: true,
  state: {
    place: {},
    query: [],
  },
  mutations: {
    setPlace(state, place) {
      state.place = place;
    }
  },
  actions: {
    async logPlaceQuery({ }) {
      await Marathon.logQuery(place.id, query);
    },
    async fetchPlace({ commit }, id) {
      const place = await Place.getById(id);
      commit("setPlace", place);
    }
  }
}

export default placeDetailStore;