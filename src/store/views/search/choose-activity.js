import { Activity } from "../../../api/sano";

const chooseActivityStore = {
  namespaced: true,
  state: {
    activities: []
  },
  actions: {
    async fetchActivities({ commit }) {
      const activities = await Activity.getAll();
      commit("setActivities", activities);
    }
  },
  mutations: {
    setActivities(state, activities) {
      state.activities = activities.map(activity => {
        activity.chosen = false;
        return activity;
      })
    },
    chooseActivity(state, chosenIndex) {
      state.activities.map((activity, index) => {
        if (chosenIndex === index) {
          activity.chosen = !activity.chosen;
          return activity;
        }
      });
    }
  },
  getters: {
    getChosenActivities(state) {
      const choosenActivities = state.activities.filter(activity => activity.chosen);
      const idxOfChoosenActivities = choosenActivities.map(activity => activity.id);
      return idxOfChoosenActivities;
    }
  }
}

export default chooseActivityStore;