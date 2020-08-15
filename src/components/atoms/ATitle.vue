<template lang="pug">
  .a-title
    .text( :class="size") 
      slot
    .caption(v-text="caption")
</template>

<script>
export default {
  name: "ATitle",

  props: {
    size: {
      type: String,
      default: "title"
    },
    caption: String
  }
};
</script>

<style lang="sass" scoped>
.a-title
  font-family: 'Merriweather', serif
  margin-bottom: 20px
  margin-top: 20px
  .title
    font-weight: bold
    font-size: 1.2em
  .subtitle
    font-size: 1em
  .caption
    font-size: 0.8em
    color: $black-transparent
</style>
