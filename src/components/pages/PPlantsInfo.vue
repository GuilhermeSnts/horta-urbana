<template lang="pug">
  t-plant-info( :backgroundUrl="backgroundUrl", :plant="plant")

</template>

<script>
import TPlantInfo from "../templates/TPlantInfo.vue";
import backgroundUrl from "@/assets/bg3.jpg";
import { mapActions } from "vuex";

export default {
  name: "PPlants",

  data: () => ({
    backgroundUrl,

    plant: {}
  }),

  computed: {
    id() {
      return this.$route.params.id;
    }
  },

  methods: {
    ...mapActions("plants", ["GET_PLANT_BY_ID"]),

    setPlant() {
      this.GET_PLANT_BY_ID(this.id).then(res => (this.plant = res.data));
    }
  },

  mounted() {
    this.setPlant();
  },

  components: {
    TPlantInfo
  }
};
</script>
