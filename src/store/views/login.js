import { Auth } from "../../api/sano";

const loginStore = {
  state: {
    status: "idle",
  },
  actions: {
    async login({ commit }, { username, password }) {
      commit("setStatus", "loading")
      let token;
      try {
        token = await Auth.login(username, password).token;
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