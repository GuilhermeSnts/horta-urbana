<template lang="pug">
  a-page.center( :backgroundUrl="backgroundUrl" )
    .row
      a-logo
    .row
      a-card
        template(v-slot:title)
          .row Sign in to your account
        o-login-google.row
</template>

<script>
import APage from "../atoms/APage";
import ALogo from "../atoms/ALogo";
import ACard from "../atoms/ACard";
import OLoginGoogle from "../organisms/OLoginGoogle";

export default {
  name: "Login",

  components: {
    APage,
    ALogo,
    ACard,
    OLoginGoogle
  },

  props: {
    backgroundUrl: String
  }
};
</script>

<style lang="sass" scoped>
.title
  margin-top: 20px
  margin-bottom: 45px
</style>
