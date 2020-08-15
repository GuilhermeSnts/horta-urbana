<template lang="pug">
  .search(@click="setFocus()")
    .icon
      .mdi(class="mdi-magnify")
    input(ref="msearchinput" @blur="setBlur()" v-model="search")
    .icon
      .mdi( v-show="search.length" class="mdi-arrow-right")
    div {{search}}
</template>

<script>
export default {
  name: "MSearch",

  computed: {
    search: {
      get() {
        return this.value;
      },
      set(val) {
        this.searchTherm = val;
        this.$emit("change", val);
      }
    }
  },

  methods: {
    setFocus() {
      this.$refs.msearchinput.focus();
      this.$emit("focus");
    },
    setBlur() {
      this.$emit("blur");
    }
  },

  props: {
    value: String
  }
};
</script>

<style lang="sass" scoped>
.search
  box-sizing: border-box
  height: 45px
  width: 100%
  background: $white
  padding: 5px
  display: flex
  flex-direction: row
  align-items: center
  justify-content: space-evenly
  border-radius: 20px
  border: 1px solid grey
  .icon
    width: 25px
    margin: 0px 10px
    font-size: 1.4em
    align-self: center

  input
    border: none
    padding: 3px 5px
    width: 230px
    outline: none
    font-size: 1.2em
</style>
