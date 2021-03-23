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
      v-bind:darkmode="darkmode">
      <dragondMenu>d r a g</dragondMenu>
      <dragondLine></dragondLine>
      <dragondMenu>o n</dragondMenu>
      <dragondLine></dragondLine>
      <dragondMenu>d</dragondMenu>
      <dragondLine></dragondLine>
      <dragondMenu>
        <dragondIcon v-bind:icon="'search'"></dragondIcon>
      </dragondMenu>
      <dragondMenu>
        <dragondIcon v-bind:icon="'share'"></dragondIcon>
      </dragondMenu>
      <dragondMenu>
        <dragondIcon v-bind:icon="'copy'"></dragondIcon>
      </dragondMenu>
      <dragondMenu>
        <dragondIcon v-bind:icon="'like'"></dragondIcon>
      </dragondMenu>
      <dragondMenu>
        <dragondIcon v-bind:icon="'twitter'"></dragondIcon>
      </dragondMenu>
      <dragondMenu>
        <dragondIcon v-bind:icon="'facebook'"></dragondIcon>
      </dragondMenu>
      <dragondMenu>
        <dragondIcon v-bind:icon="'browser'"></dragondIcon>
      </dragondMenu>
      <dragondMenu v-on:click="darkmode = !darkmode">
        <dragondIcon v-bind:icon="'custom'" :d="'M3.183,9.381H0.704v1.239h2.479V9.381z M2.989,16.135l0.876,0.877l1.752-1.754l-0.876-0.875L2.989,16.135z M17.012,3.866l-0.877-0.876l-1.752,1.752l0.875,0.876L17.012,3.866z M10.62,0.705H9.38v2.479h1.239V0.705z M5.618,4.742 L3.865,2.989L2.989,3.866l1.753,1.752L5.618,4.742z M14.383,15.258l1.752,1.754l0.877-0.877l-1.754-1.752L14.383,15.258z M9.38,19.297h1.239v-2.48H9.38V19.297z M16.816,9.381v1.239h2.479V9.381H16.816z M10,5.042c-2.738,0-4.958,2.22-4.958,4.958 c0,2.738,2.22,4.959,4.958,4.959c2.738,0,4.958-2.221,4.958-4.959C14.958,7.263,12.738,5.042,10,5.042z M10,13.727 c-2.058,0-3.726-1.668-3.726-3.727c0-2.058,1.668-3.726,3.726-3.726c2.059,0,3.727,1.668,3.727,3.726 C13.727,12.059,12.059,13.727,10,13.727z'"></dragondIcon>
      </dragondMenu>
    </dragondDevice>
  </div>
</template>

<script>
import dragond from '@/dragond'
import dragondDevice from '@/dragondDevice'
import dragondMenu from '@/dragondMenu'
import dragondLine from '@/dragondLine'
import dragondIcon from '@/dragondIcon'

export default {
  components: { dragond, dragondDevice, dragondMenu, dragondLine, dragondIcon },
  name: 'HelloWorld',
  data () {
    return {
      msg: '',
      darkmode: false
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
