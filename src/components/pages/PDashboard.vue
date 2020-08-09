<template lang="pug">
  t-dashboard( :backgroundUrl="backgroundUrl")

</template>

<script>
import TDashboard from "@/components/templates/TDashboard.vue";
import backgroundUrl from "@/assets/bg1.jpg";

export default {
  name: "PHome",

  data: () => ({
    backgroundUrl
  }),

  components: {
    TDashboard
  }
};
</script>
