<template lang="pug">
    a-card.m-plant-item(@click="goTo(id)")
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

  methods: {
    goTo(id) {
      this.$router.push("plant/info/" + id);
    }
  },

  props: {
    common_name: String,
    family: String,
    scientific_name: String,
    image_url: String,
    id: Number
  }
};
</script>

<style lang="sass" scoped>
.m-plant-item
  margin-bottom: 20px
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
