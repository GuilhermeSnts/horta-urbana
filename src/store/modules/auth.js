import firebase from "firebase";

export default {
  namespaced: true,
  state: {
    accessToken: "",
    idToken: ""
  },
  mutations: {
    SET_ACCESS_TOKEN(state, payload) {
      state.accessToken = payload;
    },
    SET_ID_TOKEN(state, payload) {
      state.idToken = payload;
    }
  },
  getters: {},
  actions: {
    SIGN_IN_WITH_GOOGLE(context) {
      return new Promise((resolve, reject) => {
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase
          .auth()
          .signInWithPopup(provider)
          .then(result => {
            context.commit("SET_ACCESS_TOKEN", result.credential.accessToken);
            context.commit("SET_ID_TOKEN", result.credential.idToken);
            context.commit(
              "user/SET_USER_PROFILE",
              result.additionalUserInfo.profile,
              { root: true }
            );
            resolve(result);
          })
          .catch(err => {
            reject(err);
          });
      });
    },
    SIGN_OUT() {
      //
    }
  }
};
