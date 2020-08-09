import Vue from "vue";
import Vuex from "vuex";

// Modules

import auth from "./modules/auth";
import user from "./modules/user";

// Vuex
Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,
  modules: { auth, user }
});
