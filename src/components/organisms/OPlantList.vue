<template lang="pug">
  .o-plant-list
    a-title(size="subtitle" :caption="caption") {{ title }}
    m-plant-item(
        v-for="(item, index) in plants",
        :key="index",
        :common_name="item.common_name",
        :scientific_name="item.scientific_name"
        :image_url="item.image_url"
        :id="item.id")
</template>

<script>
import MPlantItem from "../molecules/MPlantItem.vue";
import ATitle from "../atoms/ATitle.vue";

export default {
  name: "OPlantList",

  components: {
    MPlantItem,
    ATitle
  },

  props: {
    plants: Array,
    title: {
      type: String,
      default: "Plants"
    },
    caption: String
  }
};
</script>

<style lang="sass">
.o-plant-list
</style>
