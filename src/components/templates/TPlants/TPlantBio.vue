<template lang="pug">
  a-page.center( :backgroundUrl="backgroundUrl" )
    a-title(:caption="plant.scientific_name") {{plant.common_name}}
    a-image(:src="plant.image_url")
    
    a-title( size="subtitle") Bio

    a-title(size="subtitle") Growth

    .row
      a-measurer(label="light" icon="mdi-weather-sunny" color="orange" :value="plant.main_species.growth.light")
      a-measurer(label="Soil Nutriments" icon="mdi-grass" color="brown" :value="plant.main_species.growth.soil_nutriments")
    
    br

    a-card( mode="flat") 
      div
        span PH: 
        span {{ plant.main_species.growth.ph_maximum }} ~ 
        span {{ plant.main_species.growth.ph_minimum }}
      div
        span Bloom Months: 
        span(v-for="month in plant.main_species.growth.bloom_months" :key="month")
          a-tag {{month}}
      
</template>

<script>
import APage from "@/components/atoms/APage";
import ATag from "@/components/atoms/ATag";
import AMeasurer from "@/components/atoms/AMeasurer";
import ATitle from "@/components/atoms/ATitle";
import AImage from "@/components/atoms/AImage";
import ACard from "@/components/atoms/ACard";

export default {
  name: "TPlantBio",

  components: {
    APage,
    ATitle,
    AImage,
    ACard,
    ATag,
    AMeasurer
  },

  props: {
    backgroundUrl: String,
    plant: Object
  }
};
</script>

<style lang="sass" scoped>
.row
  display: flex
  flex-direction: row
</style>
