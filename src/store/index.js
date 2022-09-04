import { createStore } from "vuex";
import search from "./search";

export default createStore({
  state: {
    token: null,
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    search: search,
  },
});
