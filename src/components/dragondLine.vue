<template>
  <div
    class="dragond-line"
    :style="[ 
      mgLeft !== 0.5 ? { marginLeft: mgLeft + 'rem' } : {},
      mgRight !== 0.5 ? { marginRight: mgRight + 'rem'} : {}
    ]"
  >
  </div>
</template>

<script>
export default {
  name: 'dragondLine',
  props: {
    mgLeft: {
      type: Number,
      default: 0.5
    },
    mgRight: {
      type: Number,
      default: 0.5
    }
  }
}
</script>

<style scoped>
.dragond-line {
  height: 1rem;
  width: 0px;
  margin-left: .5rem;
  margin-right: .5rem;
  border-right: 1px solid rgba(0, 0, 0, 0.25);
}
</style>
