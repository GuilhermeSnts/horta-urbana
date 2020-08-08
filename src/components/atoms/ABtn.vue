<template lang="pug">
  button.a-btn.ripple
    .icon.mdi(:class="icon")
    .label {{label}}
</template>

<script>
export default {
  name: "ABtn",

  props: {
    icon: String,
    label: String
  }
};
</script>

<style lang="sass" scoped>
.a-btn
  background: $black
  border-radius: 25px
  font-size: 1.2em
  padding: 6px 16px
  border: none
  box-shadow: 0px 3px 6px $black-transparent
  color: white
  cursor: pointer
  outline: none
  display: flex
  flex-direction: row
  vertical-align: middle
  align-items: center
  .icon
    margin-right: 10px
    font-size: 1.4em
    align-self: center


.ripple
  background-position: center
  transition: background 0.8s
  &:hover
    background: rgb(61, 61, 61) radial-gradient(circle, transparent 1%, #333 1%) center/15000%
  &:active
    background-color: rgb(92, 92, 92)
    background-size: 100%
    transition: background 0s
</style>
