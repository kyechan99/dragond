<template>
  <button class="dragond-menu">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'dragondMenu',
  props: {
  },
  data () {
    return {
    }
  },
  methods: {
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
