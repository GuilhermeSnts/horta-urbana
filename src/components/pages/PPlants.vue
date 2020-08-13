<template lang="pug">
  t-plants( :backgroundUrl="backgroundUrl", :plants="PLANTS")

</template>

<script>
import TPlants from "../templates/TPlants.vue";
import backgroundUrl from "@/assets/bg3.jpg";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "PPlants",

  data: () => ({
    backgroundUrl
  }),

  computed: {
    ...mapGetters("plants", ["PLANTS"])
  },

  methods: {
    ...mapActions("plants", ["GET_PLANTS"])
  },

  mounted() {
    this.GET_PLANTS();
  },

  components: {
    TPlants
  }
};
</script>
