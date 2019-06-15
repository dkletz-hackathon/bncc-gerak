import { Place } from "../../api/sano";

const placeStore = {
  namespaced: true,
  state: {
    places: [],
    status: "idle",
  },
  actions: {
    async fetchClosestPlaces({ commit }, { latitude, longitude }) {
      commit("setStatus", "loading");
      const places = await Place.getClosesPlaces(latitude, longitude);
      commit("setPlaces", places);
      commit("setStatus", "done");
    },
    async fetchPlacesByPreferences({ commit }, { preferences }) {
      commit("setStatus", "loading");
      const places = await Place.getPlacesByPreferences(preferences);
      commit("setPlaces", places);
      commit("setStatus", "done");
    }
  },
  mutations: {
    setPlaces(state, places) {
      state.places = places;
    },
    setStatus(state, status) {
      state.status = status;
    }
  }
}

export default placeStore;