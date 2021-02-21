<template>
  <div v-show="checkShow()"
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
      // Common data (global)
      dragondData: dragondData,

      // $dragondDevice clientWidth
      width: 0,
      
      // Left reference point (How much to space)
      offsetLeft: 0,

      // Double monitoring data (this.dragondData.isOpen)
      watchData: false
    }
  },
  watch: {
    watchData: {
      handler () {
        if (this.watchData) {
          this.handleResize();
        }
      }
    }
  },
  mounted () {
    // Centered on
    this.width = this.$refs.dragondDevice.clientWidth / 2;
    this.offsetLeft = this.width;

    // Now done using refs, turn it off
    this.dragondData.isOpen = false;

    // Detecting window resizing
    window.addEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize: function () {
      // When dragond leaves the screen, let it in
      console.log(this.$refs.dragondDevice.getBoundingClientRect())
      if (this.$refs.dragondDevice.getBoundingClientRect().right > window.innerWidth && this.$refs.dragondDevice.getBoundingClientRect().left < 0) {
      } else if (this.$refs.dragondDevice.getBoundingClientRect().right > window.innerWidth) {
        this.dragondData.leftPos = window.innerWidth - this.$refs.dragondDevice.getBoundingClientRect().width;
        this.offsetLeft = 0;
      } else if (this.$refs.dragondDevice.getBoundingClientRect().left < 0) {
        this.dragondData.leftPos = 0;
        this.offsetLeft = 0;
      } else {
        this.offsetLeft = this.width;
      }
    },
    checkShow: function () {
      this.watchData = this.dragondData.isOpen;
      return this.dragondData.isOpen;
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
