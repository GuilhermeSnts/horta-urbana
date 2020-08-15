<template lang="pug">
  a-page.center( :backgroundUrl="backgroundUrl" )
    a-title Plants

    o-search-plant(caption="Search your plants")
    
    a-title(size="subtitle") Discover by Category
    m-horizontal-menu( :items="categories")

    o-plant-list( :plants="plants" caption="Discover new Plants")

</template>

<script>
import APage from "../atoms/APage";
import ATitle from "../atoms/ATitle";
import OPlantList from "../organisms/OPlantList";
import OSearchPlant from "../organisms/OSearchPlant";
import MHorizontalMenu from "../molecules/MHorizontalMenu";
import MSearch from "../molecules/MSearch";

export default {
  name: "TDashboard",

  components: {
    APage,
    ATitle,
    OPlantList,
    OSearchPlant,
    MHorizontalMenu,
    MSearch
  },

  props: {
    backgroundUrl: String,
    plants: Array,
    categories: Array
  }
};
</script>
