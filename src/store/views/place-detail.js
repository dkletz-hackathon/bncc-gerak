import { Marathon } from "../../api/sano";

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
    }
  }
}

export default placeDetailStore;