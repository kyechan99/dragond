<template>
  <div class="dragond" @mouseup="mouseUp" @mousedown="mouseDown">
    <slot></slot>
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
  created () {
  },
  methods: {
    emptyFunc: function () {

    },
    mouseDown: function () {
      // console.log(this.mda.posX);

      this.dragondData.selectText = '';
      this.dragondData.isOpen = false;
      this.$emit('dragondData', this.selectText);
    },
    mouseUp: function () {
      // this.mda.posX++;

      // this.device = document.getElementById('dragond-device');
      this.dragondData.selectText = window.getSelection().toString();

      if (this.dragondData.selectText.length > 0) {

        var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        console.log(window.getSelection().getRangeAt(0).getBoundingClientRect());
        const posX = event.clientX;
        const posY = window.getSelection().getRangeAt(0).getBoundingClientRect().y + 40 + scrollTop;
        // const posX = window.getSelection().getBoundingClientRect();
        // const posY = event.clientY + 0 + scrollTop;

        // const selection = encodeURIComponent(window.getSelection().toString()).replace(/[!'()*]/g, escape);
        // const shareUrl = 'http://twitter.com/share?text=' + selection + '&url=https://awik.io';

        this.dragondData.topPos = posY;
        this.dragondData.leftPos = posX;
        this.dragondData.isOpen = true;
      } else {
        this.dragondData.isOpen = false;
      }

      this.$emit('dragondData', this.dragondData.selectText);
      // // clientX/Y gives the coordinates relative to the viewport in CSS pixels.
      // console.log(event.clientX);
      // console.log(event.clientY);

      // // pageX/Y gives the coordinates relative to the <html> element in CSS pixels.
      // console.log(event.pageX);
      // console.log(event.pageY);

      // // screenX/Y gives the coordinates relative to the screen in device pixels.
      // console.log(event.screenX);
      // console.log(event.screenY);
    }
  }
}

</script>

<style scoped>
</style>
