import { Auth } from "../../api/sano";

const sessionStore = {
  namespaced: true,
  state: {
    user: {},
  },
  getters: {
    getToken(state) {
      const token = localStorage.getItem("token");
      return token;
    }
  },
  mutations: {
    setUser(state) {
      state.user = user;
    }
  },
  actions: {
    // TODO: Integrate validation with backend
    async signUser({ commit }, { token }) {
      try {
        const response = await Auth.validateToken(token);
        commit("setUser", response.user);
        return response.user != null;
      } catch {
        return false;
      }
    }
  }
}

export default sessionStore;