import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

// Modules

import auth from "./modules/auth";
import user from "./modules/user";
import plants from "./modules/plants";

// Vuex
Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,
  modules: { auth, user, plants },
  plugins: [createPersistedState()]
});
