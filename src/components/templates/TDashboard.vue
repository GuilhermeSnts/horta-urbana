<template lang="pug">
  a-page.center( :backgroundUrl="backgroundUrl" )

</template>

<script>
import APage from "../atoms/APage";

export default {
  name: "TDashboard",

  components: {
    APage
  },

  props: {
    backgroundUrl: String
  }
};
</script>
