<template lang="pug">
  a-page.center( :backgroundUrl="backgroundUrl" )
    a-title Plants

    o-search-plant(caption="Search your plants")
    
    a-title(size="subtitle") Discover by Category
    m-horizontal-menu( :items="categories")

    o-plant-list( :plants="plants" caption="Discover new Plants")

</template>

<script>
import APage from "@/components/atoms/APage";
import ATitle from "@/components/atoms/ATitle";
import OPlantList from "@/components/organisms/OPlantList";
import OSearchPlant from "@/components/organisms/OSearchPlant";
import MHorizontalMenu from "@/components/molecules/MHorizontalMenu";
import MSearch from "@/components/molecules/MSearch";

export default {
  name: "TPlantsMain",

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
