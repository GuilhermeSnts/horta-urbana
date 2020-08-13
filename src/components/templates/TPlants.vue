<template lang="pug">
  a-page.center( :backgroundUrl="backgroundUrl" )
    a-title Plants
    o-plant-list( :plants="plants")

</template>

<script>
import APage from "../atoms/APage";
import ATitle from "../atoms/ATitle";
import OPlantList from "../organisms/OPlantList";

export default {
  name: "TDashboard",

  components: {
    APage,
    ATitle,
    OPlantList
  },

  props: {
    backgroundUrl: String,
    plants: Array
  }
};
</script>
