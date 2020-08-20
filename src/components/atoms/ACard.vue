<template lang="pug">
    .a-card( :class="'mode-'+mode" @click="$emit('click')")
      .title(v-if="$slots.title")
        slot( name="title")
      slot
</template>

<script>
export default {
  name: "ACard",
  props: {
    mode: {
      default: "elevated",
      type: String
    }
  }
};
</script>

<style lang="sass" scoped>
.a-card
  box-sizing: border-box
  width: 100%
  height: auto
  padding: 20px
  .title
    margin-top: 10px
    margin-bottom: 50px
    font-weight: bold
    font-size: 1em
    font-family: 'Merriweather', serif
.mode-elevated
  border: 1px solid grey
  border-radius: 20px
  background: $white
  box-shadow: 0px 10px 10px $black-transparent
.mode-flat
  border: 1px solid grey
  border-radius: 20px
  background: $white
</style>
