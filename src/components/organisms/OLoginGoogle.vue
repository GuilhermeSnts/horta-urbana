<template lang="pug">
  .o-login-google
    a-btn( label="Login with google" icon="mdi-google" @click="SignIn()")
</template>

<script>
import ABtn from "../atoms/ABtn";
import { mapActions } from "vuex";

export default {
  name: "OLoginGoogle",

  components: {
    ABtn
  },

  methods: {
    ...mapActions("auth", ["SIGN_IN_WITH_GOOGLE"]),

    SignIn() {
      this.SIGN_IN_WITH_GOOGLE()
        .then(() => {
          this.$router.push({ name: "Dashboard" });
        })
        .catch(err => alert(err.message));
    }
  }
};
</script>
