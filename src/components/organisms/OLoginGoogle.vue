<template lang="pug">
  .o-login-google
    a-btn( label="Login with google" icon="mdi-google")
</template>

<script>
import ABtn from "../atoms/ABtn";
export default {
  name: "OLoginGoogle",

  components: {
    ABtn
  }
};
</script>
