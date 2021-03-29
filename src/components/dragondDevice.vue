<template>
  <div v-show="checkShow()"
      id="dragond-device"
      ref="dragondDevice"
      class="dragond-device"
      :class="{ 'darkmode' : darkmode }"
      :style="{ 
        top: dragondData.topPos + 'px', 
        left: (this.dragondData.leftPos - this.offsetLeft) + 'px',
        minWidth: this.width * 2 + 'px'
      }"
  >
    <slot></slot>
  </div>
</template>

<script>
import { dragondData } from './dragondData.js'

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
      
      // Left reference point (How much to space, dragondDevice's width / 2)
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
      
      this.offsetLeft = this.width;

      // Exits both left and right sides of the screen
      if (this.dragondData.leftPos + this.offsetLeft >= document.body.clientWidth && this.dragondData.leftPos - this.offsetLeft <= 0) {
        // Paste on the left side
        this.dragondData.leftPos = 5;
        this.offsetLeft = 0;
      }

      // Exit to the right of the screen
      else if (this.dragondData.leftPos + this.offsetLeft >= document.body.clientWidth) {
        // Paste on the right side
        this.dragondData.leftPos = document.body.clientWidth - this.width * 2 - 5;
        this.offsetLeft = 0;
      }

      // Exit to the left of the screen
      else if (this.dragondData.leftPos - this.offsetLeft <= 0) {
        // Paste on the left side
        this.dragondData.leftPos = 5;
        this.offsetLeft = 0;
      }

      // Normal without leaving the screen
      else {
        console.log('__');
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
