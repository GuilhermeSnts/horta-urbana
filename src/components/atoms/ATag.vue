<template lang="pug">
  span.a-tag
    slot
    
</template>

<script>
export default {
  name: "ATag"
};
</script>

<style lang="sass">
.a-tag
  padding: 2px 10px
  margin: 2px
  width: fit-content
  min-width: 20px
  border-radius: 10px
  background: $black-transparent
  color: white
  font-size: 0.8em
</style>
