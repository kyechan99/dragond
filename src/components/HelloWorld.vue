<template>
  <div>
    <h1>Essential Links</h1>
    <dragond @dragondData="dragondData"
      v-bind:offsetX="0"
      v-bind:offsetY="0">
      <h2>Essential Links</h2>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      <h2>Essential Links</h2>
      <h2>Essential Links</h2>
      <h2>Essential Links</h2>
    </dragond>
    <dragondDevice
      v-bind:darkmode="true">
      <dragondMenu>d</dragondMenu>
      <dragondMenu>r</dragondMenu>
      <dragondMenu>a</dragondMenu>
      <dragondMenu>g</dragondMenu>
      <dragondLine></dragondLine>
      <dragondMenu>o</dragondMenu>
      <dragondMenu>n</dragondMenu>
      <dragondLine></dragondLine>
      <dragondMenu>d</dragondMenu>
    </dragondDevice>
  </div>
</template>

<script>
import dragond from '@/components/dragond'
import dragondDevice from '@/components/dragondDevice'
import dragondMenu from '@/components/dragondMenu'
import dragondLine from '@/components/dragondLine'

export default {
  components: { dragond, dragondDevice, dragondMenu, dragondLine },
  name: 'HelloWorld',
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    dragondData: function (data) {
      this.msg = data;
    }
  }
}

</script>

<style scoped>
.dragond-device {
  padding: 2rem 1rem;
}
</style>
