<template>
  <div v-if="dragondData.isOpen" id="dragond-device" class="dragond-device" :style="{ top: dragondData.topPos + 'px', left: dragondData.leftPos + 'px' }">
    <button class="dragond-menu">a</button>
    <div class="dragond-line"></div>
    <button class="dragond-menu">b</button>
    <button class="dragond-menu">c</button>
    <button class="dragond-menu">c</button>
    <p>aaaaa</p>
  </div>
</template>

<script>
import { dragondData } from '@/components/dragondData.js'

export default {
  name: 'dragond',
  props: {
  },
  data () {
    return {
      dragondData: dragondData
    }
  },
  methods: {
  }
}

</script>

<style scoped>
.dragond-device {
  /* border: 1px solid red; */
  border-radius: .5rem;
  position: absolute;
  padding: .25rem .5rem;
  background-color: white;
  box-shadow: 0px 0px 10px 1px rgba(66, 66, 66, 0.25);
  display: flex;
  align-content: center;
  align-items: center;
}
.dragond-device p {
  margin: 0px;
}
.dragond-device .dragond-menu {
  border: 0px;
  min-width: 1.5rem;
  min-height: 1.5rem;
  margin-left: .25rem;
  margin-right: .25rem;
  background-color: white;
  cursor: pointer;
  outline: none;
}
.dragond-line {
  height: 1rem;
  width: 0px;
  margin-left: .25rem;
  margin-right: .25rem;
  border-right: 1px solid rgba(0, 0, 0, 0.25);
}
</style>
