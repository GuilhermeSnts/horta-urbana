<template lang="pug">
  a-page.center( :backgroundUrl="backgroundUrl" )
    a-title Dashboard
    m-horizontal-menu( :items="pagesMenu")

</template>

<script>
import APage from "../atoms/APage";
import ATitle from "../atoms/ATitle";
import MHorizontalMenu from "../molecules/MHorizontalMenu";

export default {
  name: "TDashboard",

  components: {
    APage,
    ATitle,
    MHorizontalMenu
  },

  props: {
    backgroundUrl: String,
    pagesMenu: Array
  }
};
</script>
