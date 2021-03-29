<template>
  <div
    class="dragond"
    id="dragond"
    @mouseup="mouseUp"
    @mousedown="mouseDown"
  >
    <slot></slot>
  </div>
</template>

<script>
import { dragondData } from './dragondData.js'

export default {
  name: 'dragond',
  props: {
    offsetX: {
      type: Number,
      default: 0
    },
    offsetY: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      dragondData: dragondData
    }
  },
  created () {
  },
  methods: {
    mouseDown: function () {
      this.dragondData.selectText = '';
      this.dragondData.isOpen = false;

      window.getSelection().removeAllRanges();

      this.$emit('dragondData', this.selectText);
    },
    mouseUp: function () {
      this.dragondData.selectText = window.getSelection().toString();

      if (this.dragondData.selectText.length > 0) {
        var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        
        let selectionRect = window.getSelection().getRangeAt(0).getBoundingClientRect();
        const posX = selectionRect.x +
                      (selectionRect.right - selectionRect.left) / 2 +
                      this.offsetX;
        const posY = selectionRect.bottom +
                      16 +
                      scrollTop +
                      this.offsetY;
                      
        this.dragondData.topPos = posY;
        this.dragondData.leftPos = posX;

        this.dragondData.isOpen = true;
        
      } else {
        this.dragondData.topPos = 0;
        this.dragondData.leftPos = 5;

        this.dragondData.isOpen = false;
      }

      this.$emit('dragondData', this.dragondData.selectText);
    }
  }
}

</script>

<style scoped>
</style>
