import { Marathon, Place } from "../../../api/sano";
import { getStartAndEndDays, getSanitizedDateTime } from "../../../helper/datetime";
import { generateGoogleCalendarLink } from "../../../helper/google-calendar";

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
      state.place.events.forEach(event => {
        const { dayOutput, timeOutput } = getStartAndEndDays(event.startDate, event.endDate);
        event.dayDisplay = dayOutput;
        event.timeDisplay = timeOutput;
        event.gcStart = getSanitizedDateTime(event.startDate);
        event.gcEnd = getSanitizedDateTime(event.endDate);
        event.gcUrl = generateGoogleCalendarLink(event.name, event.description, place.name, event.gcStart, event.gcEnd);
        console.log(event.gcUrl);
      })
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