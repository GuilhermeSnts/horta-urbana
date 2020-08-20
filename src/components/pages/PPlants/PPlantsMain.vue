<template lang="pug">
  t-plants-main( :backgroundUrl="backgroundUrl", :plants="PLANTS" :categories="categories")

</template>

<script>
import TPlantsMain from "@/components/templates/TPlants/TPlantsMain.vue";
import backgroundUrl from "@/assets/bg3.jpg";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "PPlants",

  data: () => ({
    backgroundUrl,

    categories: [
      {
        label: "Vegetables",
        path: "/plants/category/vegetables",
        background:
          "https://images.unsplash.com/photo-1518843875459-f738682238a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
      },
      {
        label: "Ornamentals",
        path: "/plants/category/ornamental",
        background:
          "https://images.unsplash.com/photo-1475872711536-95ec04b9d290?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=60"
      },
      {
        label: "Fruitful",
        path: "/plants/category/fruitful",
        background:
          "https://images.unsplash.com/photo-1521368621301-177527413db1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
      }
    ]
  }),

  computed: {
    ...mapGetters("plants", ["PLANTS", "CATEGORIES"])
  },

  methods: {
    ...mapActions("plants", ["GET_PLANTS"])
  },

  mounted() {
    this.GET_PLANTS();
  },

  components: {
    TPlantsMain
  }
};
</script>
