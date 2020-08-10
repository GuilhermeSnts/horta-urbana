<template lang="pug">
  .a-title
    slot
</template>

<script>
export default {
  name: "ATitle"
};
</script>

<style lang="sass" scoped>
.a-title
    font-family: 'Merriweather', serif
    font-weight: bold
    font-size: 1.2em
    margin-bottom: 25px
</style>
