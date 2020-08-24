<template lang="pug">
  .a-measurer
    i.icon.mdi(:class="icon")
    svg(class="ring")
      circle(
        class="ring_circle",
        r="60",
        cx="50%",
        cy="50%",
        stroke-dasharray="270 360",
        stroke-dashoffset="0")
      circle(
        class="ring_circle circle-color",
        r="60",
        cx="50%",
        cy="50%",
        :stroke-dasharray="progress+' 360'",
        stroke-dashoffset="0",
        :style="{stroke: color}"
        )
    .label {{label}}
        
</template>

<script>
export default {
  name: "AMeasurer",
  computed: {
    progress() {
      return this.value * 27;
    }
  },

  props: {
    value: Number,
    icon: String,
    color: String,
    label: String
  }
};
</script>

<style lang="sass">
.a-measurer
  display: flex
  flex-flow: column
  width: fit-content
  background: $white
  justify-content: center
  align-content: center
  padding: 10px
  box-sizing: border-box
  border-radius: 10px
  border: 1px solid grey
  margin: 5px
  position: relative
  .icon
    position: absolute
    left: 0
    right: 0
    top: 50px
    text-align: center
    font-size: 3em
    color: #333333b3
  .ring
    width: 150px
    height: 150px
    .ring_circle
      fill: none
      stroke-stroke-dashoffset: 0
      stroke: #3333331A
      stroke-width: 10
      stroke-linecap: round
      transform-origin: 50% 50%
      transform: rotate(140deg)
    .circle-color
      transition: stroke-dashoffset 1s linear
  .label
    font-size: 1.2em
    color: $black
    margin: 5px
</style>
