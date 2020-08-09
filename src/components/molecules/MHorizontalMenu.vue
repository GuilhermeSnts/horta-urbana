<template lang="pug">
  .m-horizontal-menu
    a-tile-btn(
        class="item"
        :label="item.label",
        :background="item.background",
        :path="item.path"
        v-for="(item, index) in items",
        :key="index")
</template>

<script>
import ATileBtn from "@/components/atoms/ATileBtn";
export default {
  name: "MHorizontalMenu",

  components: {
    ATileBtn
  },

  props: {
    items: Array
  }
};
</script>

<style lang="sass" scoped>
.m-horizontal-menu
    width: 100%
    height: 180px
    overflow-x: scroll
    display: flex
    flex-direction: row
    .item
        margin: 0px 5px
</style>
