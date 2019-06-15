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
      const places = await Place.search(latitude, longitude);
      commit("setPlaces", places);
      commit("setStatus", "done");
    },
    async fetchPlacesByPreferences({ commit }, { latitude, longitude, preferences }) {
      commit("setStatus", "loading");
      const places = await Place.search(latitude, longitude, preferences);
      commit("setPlaces", places);
      commit("setStatus", "done");
    }
  },
  mutations: {
    setPlaces(state, places) {
      state.places = places.map(place => {
        place.chosen = false;
        return place;
      });
    },
    setStatus(state, status) {
      state.status = status;
    },
    setChosen(state, chosenIndex) {
      state.places = state.places.map((place, index) => {
        if (chosenIndex === index) {
          place.chosen = !place.chosen;
        } else {
          place.chosen = false;
        }
        return place;
      });
    }
  },
  getters: {
    getChosenId(state) {
      const chosenPlaces = state.places.filter(place => place.chosen);
      console.log(chosenPlaces);
      if (chosenPlaces.length === 0) {
        return -1;
      } else {
        return chosenPlaces[0].id;
      }
    }
  }
}

export default placeStore;