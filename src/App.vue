<template>
  <div id="app">
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
body {
  width: 100%;
  overflow-x: hidden;
}
#app {
  color: #212529;
  margin-top: 150px;
}
</style>
