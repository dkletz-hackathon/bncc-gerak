import { Places } from "../../api/sano";

const placesStore = {
  namespaced: true,
  state: {
    places: [],
    status: "idle",
  },
  actions: {
    async fetchClosestPlaces({ commit }, { latitude, longitude }) {
      commit("setStatus", "loading");
      const places = await Places.getClosesPlaces(latitude, longitude);
      commit("setPlaces", places);
      commit("setStatus", "done");
    },
    async fetchPlacesByPreferences({ commit }, { preferences }) {
      commit("setStatus", "loading");
      const places = await Places.getPlacesByPreferences(preferences);
      commit("setPlaces", places);
      commit("setStatus", "done");
    }
  },
  mutations: {
    setPlaces(state, places) {
      state.places = places;
    }
  }
}

export default placesStore;