<template lang="pug">
    a-card.m-plant-item
      .picture( :style="{ 'background-image': `url(${image_url})` }")
      .data
        .common-name {{ common_name }}
        .scientific-name {{ scientific_name }}


</template>

<script>
import ACard from "../atoms/ACard";

export default {
  name: "MPlantItem",

  components: {
    ACard
  },

  props: {
    common_name: String,
    family: String,
    scientific_name: String,
    image_url: String
  }
};
</script>

<style lang="sass" scoped>
.m-plant-item
  margin-bottom: 10px
  display: flex
  flex-flow: row
  .picture
    width: 80px
    height: 80px
    border-radius: 3px
    background: $green
    margin-right: 10px
    background-origin: center
    background-size: cover

  .data
    flex-flow: column
    .common-name
      color: $black
      font-family: 'Merriweather', serif
      font-weight: bold
      font-size: 1.1em

    .scientific-name
      color: $black-transparent
      font-size: 0.9em
</style>
