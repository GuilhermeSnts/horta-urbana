<template lang="pug">
  div.a-logo
    img( src="@/assets/logo.png" alt="Budspace logo")
</template>

<script>
export default {
  name: "ALogo",

  props: {
    icon: String,
    label: String
  }
};
</script>

<style lang="sass" scoped>
.a-logo
  width: 6em
  height: 6em
  padding: 10px
  img
    width: 100%
    height: auto
</style>
