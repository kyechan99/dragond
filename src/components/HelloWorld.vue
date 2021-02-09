<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <h2>Essential Links</h2>
    <h2>Essential Links</h2>
    <h2>Essential Links</h2>
    <h2>Essential Links</h2>
    <dragond></dragond>
    <div id="console"></div>
  </div>
</template>

<script>
import dragond from '@/components/dragond'

export default {
  components: { dragond },
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}

function selectText () {
  var selectionText = ''
  if (document.getSelection) {
    selectionText = document.getSelection()
  } else if (document.selection) {
    selectionText = document.selection.createRange().text
  }
  return selectionText
}

document.onmouseup = function () {
  document.getElementById('console').innerHTML = selectText()
}

</script>

<style scoped>
</style>
