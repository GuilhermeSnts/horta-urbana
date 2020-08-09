export default {
  namespaced: true,
  state: {
    profile: {
      email: "",
      family_name: "",
      given_name: "",
      granted_scopes: "",
      id: "",
      locale: "",
      name: "",
      picture: "",
      verified_email: null
    }
  },
  mutations: {
    SET_USER_PROFILE(state, payload) {
      state.profile = payload;
    }
  },
  getters: {},
  actions: {}
};
