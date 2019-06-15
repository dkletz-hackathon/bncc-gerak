import { Auth } from "../../api/sano";

const loginStore = {
  namespaced: true,
  state: {
    status: "idle",
  },
  actions: {
    async login({ commit }, { email, password }) {
      commit("setStatus", "loading")
      let token;
      try {
        token = await Auth.login(email, password).token;
      } finally {
        commit("setStatus", "done");
      }
      return !!token;
    }
  },
  mutations: {
    setStatus(state, status) {
      state.status = status;
    }
  }
}

export default loginStore;