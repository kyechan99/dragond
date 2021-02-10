<template>
  <div class="dragond" @mouseup="mouseup">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'dragond',
  props: {

  },
  data () {
    return {
    }
  },
  methods: {
    selectText: function () {
      return window.getSelection().toString()
    },
    mouseup: function () {
      this.$emit('dragondData', this.selectText())
    }
  }
}

</script>

<style scoped>
</style>
