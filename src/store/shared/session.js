import {Auth} from "../../api/sano";

const sessionStore = {
  namespaced: true,
  state: {
    user: {},
  },
  getters: {
    getToken(state) {
      return localStorage.getItem("token");
    }
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    }
  },
  actions: {
    async getProfile({ state, commit }) {
      try {
        const response = await Auth.getProfile();
        commit("setUser", response.data);
        return response.user !== null;
      } catch {
        return false;
      }
    }
  }
}

export default sessionStore;