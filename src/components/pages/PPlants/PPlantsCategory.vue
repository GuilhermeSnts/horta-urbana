<template lang="pug">
  t-plants-category( :backgroundUrl="backgroundUrl", :plants="PLANTS" :category="category")

</template>

<script>
import TPlantsCategory from "@/components/templates/TPlants/TPlantsCategory.vue";
import backgroundUrl from "@/assets/bg3.jpg";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "PPlantsCategory",

  data: () => ({
    backgroundUrl
  }),

  computed: {
    category() {
      return this.$route.params.category;
    },

    filterForCategory() {
      if (this.category === "vegetables") {
        return "[edible_part]=roots,leaves&[vegetable]=true";
      }
      if (this.category === "vegetables") {
        return "[edible_part]=fruits&[vegetable]=false";
      } else {
        return "[vegetable]=false";
      }
    },
    ...mapGetters("plants", ["PLANTS"])
  },

  methods: {
    ...mapActions("plants", ["GET_PLANTS_WITH_FILTER"])
  },

  mounted() {
    this.GET_PLANTS_WITH_FILTER(this.filterForCategory);
  },

  components: {
    TPlantsCategory
  }
};
</script>
