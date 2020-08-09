<template lang="pug">
  .a-tile-btn_wrapper
    router-link.a-tile-btn(
      tag="button"
      :to="path"
      @click="$emit('click')",
      :style="{'background-image': `url(${background})`}")
    .label {{ label }}
</template>

<script>
export default {
  name: "ABtn",

  props: {
    background: String,
    label: String,
    path: {
      type: String,
      default: "/"
    }
  },

  methods: {}
};
</script>

<style lang="sass" scoped>
.a-tile-btn_wrapper
  display: flex
  flex-direction: column
  align-items: center
  width: 110px
  height: 145px
  .label
    margin-top: 8px
    font-size: 1em
    width: 100px
    word-break: break-all
    text-align: center
  .a-tile-btn
    padding: 0px
    background-position: center
    background-size: cover
    background-repeat: no-repeat
    border-radius: 25px
    width: 100px
    min-height: 120px
    max-height: 120px
    border: none
    box-shadow: 0px 3px 6px $black-transparent
    color: white
    cursor: pointer
    outline: none
    display: flex
    flex-direction: row
    vertical-align: middle
    align-items: center
    justify-content: center
    &::after
      content: ""
      border-radius: 25px
      width: 100px
      min-height: 120px
      max-height: 120px
      background-position: center
      transition: background 0.5s
    &:hover:after
        background: $black-transparent radial-gradient( circle, transparent 1%,$black-transparent 1%) center/15000%
    &:active:after
        background-size: 100%
        transition: background 0s
</style>
