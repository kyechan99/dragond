<template>
  <div v-if="dragondData.isOpen"
      id="dragond-device"
      ref="dragondDevice"
      class="dragond-device"
      :class="{ 'darkmode' : darkmode }"
      :style="{ 
        top: dragondData.topPos + 'px', 
        left: (this.dragondData.leftPos - this.offsetLeft) + 'px'
      }"
  >
    <slot></slot>
  </div>
</template>

<script>
import { dragondData } from '@/components/dragondData.js'

export default {
  name: 'dragondDevice',
  props: {
    darkmode: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      dragondData: dragondData,
      offsetLeft: 0
    }
  },
  mounted () {
    var width = this.$refs.dragondDevice.clientWidth / 2;
    this.offsetLeft = width;

    window.addEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize: function () {
      if (this.$refs.dragondDevice.getBoundingClientRect().right > window.innerWidth) {
        this.dragondData.leftPos = window.innerWidth - this.$refs.dragondDevice.getBoundingClientRect().width;
        this.offsetLeft = 0;
      }
    }
  },
  computed: {
  }
}

</script>

<style scoped>
.dragond-device {
  border-radius: .25rem;
  position: absolute;
  padding: .375rem .5rem;
  background-color: white;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.25);
  font-size: 1.25rem;
  display: flex;
  align-content: center;
  align-items: center;
}
.dragond-device.darkmode {
  background-color: black;
  color: white;
}
.dragond-device.darkmode .dragond-menu {
  background-color: black;
  color: white;
}
.dragond-device.darkmode .dragond-line {
  border-right: 1px solid rgba(255, 255, 255, 0.75);
}
.dragond-device p {
  margin: 0px;
}
</style>
