import { Marathon, Place } from "../../../api/sano";

const placeDetailStore = {
  namespaced: true,
  state: {
    place: {
      category: {}
    },
    query: [],
  },
  mutations: {
    setPlace(state, place) {
      state.place = place;
    },
    setQuery(state, query) {
      state.query = query;
    }
  },
  actions: {
    async logPlaceQuery({ state }, id) {
      await Marathon.logQuery(id, state.query);
    },
    async fetchPlace({ commit, dispatch }, id) {
      const place = await Place.getById(id);
      commit("setPlace", place);
      if (query.length !== 0) {
        dispatch("logPlaceQuery", id);
      }
    }
  }
}

export default placeDetailStore;