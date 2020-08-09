<template lang="pug">
  t-auth( :backgroundUrl="backgroundUrl")
</template>

<script>
import TAuth from "@/components/templates/TAuth.vue";
import backgroundUrl from "@/assets/bg2.jpg";

export default {
  name: "PLogin",

  data: () => ({
    backgroundUrl
  }),

  components: {
    TAuth
  }
};
</script>
