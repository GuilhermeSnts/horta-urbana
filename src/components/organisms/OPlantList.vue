<template lang="pug">
  .o-plant-list
    m-plant-item(
        v-for="(item, index) in plants",
        :key="index",
        :common_name="item.common_name",
        :scientific_name="item.scientific_name"
        :image_url="item.image_url",
    )
</template>

<script>
import MPlantItem from "../molecules/MPlantItem.vue";

export default {
  name: "OPlantList",

  components: {
    MPlantItem
  },

  props: {
    plants: Array
  }
};
</script>

<style lang="sass">
.o-plant-list
</style>
