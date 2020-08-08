<template lang="pug">
  .a-page( :style="{ 'background-image': `url(${backgroundUrl})` }")
    slot
</template>

<script>
export default {
  name: "APage",

  props: {
    backgroundUrl: String
  }
};
</script>

<style lang="sass" scoped>
.a-page
  box-sizing: border-box
  width: 100%
  height: 100%
  background-position: center
  background-repeat: none
  background-size: cover
  padding: 1em
</style>
