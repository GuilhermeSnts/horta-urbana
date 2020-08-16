<template lang="pug">
  .a-image( :style="{ 'background-image': `url(${src})` }")
</template>

<script>
export default {
  name: "AImage",

  props: {
    src: String
  }
};
</script>

<style lang="sass" scoped>
.a-image
  box-sizing: border-box
  width: 220px
  height: 220px
  padding: 20px
  border: 1px solid grey
  border-radius: 20px
  background: $white
  background-size: cover
  background-repeat: none
</style>
