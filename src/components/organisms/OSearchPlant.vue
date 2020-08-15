<template lang="pug">
  .o-plant-search
    a-title(size="subtitle" :caption="caption") {{ title }}
    m-search(v-model="search")
</template>

<script>
import MSearch from "../molecules/MSearch.vue";
import ATitle from "../atoms/ATitle.vue";

export default {
  name: "OSearchPlant",

  data: () => ({
    search: ""
  }),

  components: {
    MSearch,
    ATitle
  },

  props: {
    title: {
      type: String,
      default: "Search"
    },
    caption: String
  }
};
</script>

<style lang="sass">
.o-plant-search
  margin-top: 40px
  margin-bottom: 40px
</style>
