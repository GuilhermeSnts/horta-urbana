<template lang="pug">
  a-page.center( :backgroundUrl="backgroundUrl" )
    a-title(:caption="plant.scientific_name") {{plant.common_name}}
    a-image(:src="plant.image_url")
    
    a-title( size="subtitle") Bio

    a-title(size="subtitle") Growth

    a-card
      div
        span
          .icon.mdi(class="mdi-sun") 
        span {{ plant.main_species.growth.light }}
      div
        span Soil Nutriments: 
        span {{ plant.main_species.growth.soil_nutriments }}
      div
        span PH: 
        span {{ plant.main_species.growth.ph_maximum }} ~ 
        span {{ plant.main_species.growth.ph_minimum }}
      div
        span Bloom Months: 
        span {{ plant.main_species.growth.bloom_months }}
      
</template>

<script>
import APage from "../atoms/APage";
import ATitle from "../atoms/ATitle";
import AImage from "../atoms/AImage";
import ACard from "../atoms/ACard";

export default {
  name: "TPlantInfo",

  components: {
    APage,
    ATitle,
    AImage,
    ACard
  },

  props: {
    backgroundUrl: String,
    plant: Object
  }
};
</script>
