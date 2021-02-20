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
import { dragondData } from '@/components/dragondData.js'

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
      this.$emit('dragondData', this.selectText);
    },
    mouseUp: function () {
      this.dragondData.selectText = window.getSelection().toString();

      if (this.dragondData.selectText.length > 0) {
        var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        
        const posX = window.getSelection().getRangeAt(0).getBoundingClientRect().x +
                     (window.getSelection().getRangeAt(0).getBoundingClientRect().right - window.getSelection().getRangeAt(0).getBoundingClientRect().left) / 2 +
                     this.offsetX;
        const posY = window.getSelection().getRangeAt(0).getBoundingClientRect().y +
                      30 +
                      scrollTop +
                      this.offsetY;

        // const selection = encodeURIComponent(window.getSelection().toString()).replace(/[!'()*]/g, escape);
        // const shareUrl = 'http://twitter.com/share?text=' + selection + '&url=https://awik.io';

        this.dragondData.topPos = posY;
        this.dragondData.leftPos = posX;
        this.dragondData.isOpen = true;
      } else {
        this.dragondData.isOpen = false;
      }

      this.$emit('dragondData', this.dragondData.selectText);
    }
  }
}

</script>

<style scoped>
</style>
