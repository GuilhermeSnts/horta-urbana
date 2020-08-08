<template lang="pug">
    .a-card
      .title
        slot( name="title")
      slot
</template>

<script>
export default {
  name: "ACard"
};
</script>

<style lang="sass" scoped>
.a-card
  box-sizing: border-box
  width: 100%
  height: auto
  padding: 20px
  border: 1px solid grey
  border-radius: 20px
  background: $white
  box-shadow: 0px 10px 10px $black-transparent
  .title
    font-weight: bold
    font-size: 1em
    margin-top: 10px
    margin-bottom: 45px
    font-family: 'Merriweather', serif
</style>
