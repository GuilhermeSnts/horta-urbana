<template lang="pug">
  a-page.center( :backgroundUrl="backgroundUrl" )
    div Dashboard
    m-horizontal-menu( :items="pagesMenu")

</template>

<script>
import APage from "../atoms/APage";
import MHorizontalMenu from "../molecules/MHorizontalMenu";

export default {
  name: "TDashboard",

  components: {
    APage,
    MHorizontalMenu
  },

  props: {
    backgroundUrl: String,
    pagesMenu: Array
  }
};
</script>
