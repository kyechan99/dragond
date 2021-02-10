<template>
  <div>
    <h1>Essential Links</h1>
    <dragond @dragondData="dragondData">
      <h2>Essential Links</h2>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      <h2>Essential Links</h2>
      <h2>Essential Links</h2>
      <h2>Essential Links</h2>
    </dragond>
    <div id="console"></div>
    {{ msg }}
  </div>
</template>

<script>
import dragond from '@/components/dragond'

export default {
  components: { dragond },
  name: 'HelloWorld',
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    dragondData: function (data) {
      console.log(data)
      this.msg = data
    }
  }
}

</script>

<style scoped>
</style>
