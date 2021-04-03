<template>
  <button
    class="dragond-menu"
    v-on="$listeners"
    :style="[ 
      mgLeft !== 0.25 ? { marginLeft: mgLeft + 'rem' } : {},
      mgRight !== 0.25 ? { marginRight: mgRight + 'rem'} : {},
      fontSize !== 16 ? { fontSize: fontSize + 'px'} : {}
    ]"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'dragondMenu',
  props: {
    mgLeft: {
      type: Number,
      default: 0.25
    },
    mgRight: {
      type: Number,
      default: 0.25
    },
    fontSize: {
      type: Number,
      default: 16
    }
  }
}

</script>

<style scoped>
.dragond-menu {
  border: 0px;
  min-width: 1.5rem;
  min-height: 1.5rem;
  margin-left: .25rem;
  margin-right: .25rem;
  font-size: 1rem;
  background-color: white;
  cursor: pointer;
  outline: none;
}
</style>
