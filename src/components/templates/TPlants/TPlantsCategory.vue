<template lang="pug">
  a-page.center( :backgroundUrl="backgroundUrl" )
    a-title {{category}}

    o-search-plant(caption="Search some plant")
    
    o-plant-list( :plants="plants" :caption="'Discover new '+category")

</template>

<script>
import APage from "@/components/atoms/APage";
import ATitle from "@/components/atoms/ATitle";
import OPlantList from "@/components/organisms/OPlantList";
import OSearchPlant from "@/components/organisms/OSearchPlant";
import MHorizontalMenu from "@/components/molecules/MHorizontalMenu";
import MSearch from "@/components/molecules/MSearch";

export default {
  name: "TPlantsCategory",

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
    category: String
  }
};
</script>
