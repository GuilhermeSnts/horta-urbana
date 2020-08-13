import axios from "axios";

export default {
  namespaced: true,
  state: {
    plants: []
  },
  mutations: {
    SET_PLANTS(state, payload) {
      state.plants = payload;
    }
  },

  getters: {
    PLANTS(state) {
      return state.plants;
    }
  },

  actions: {
    GET_PLANTS(context) {
      return new Promise((resolve, reject) => {
        axios(
          `https://trefle.io/api/v1/plants?token=${process.env.VUE_APP_TREFLE_TOKEN}`
        )
          .then(res => {
            console.log(res.data.data);
            context.commit("SET_PLANTS", res.data.data);
            resolve();
          })
          .catch(err => {
            console.log(err);
            reject(err);
          });
      });
    }
  }
};
