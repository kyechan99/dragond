<template>
  <div>
    <div class="container">
      
      <p><br/>
      <br/></p>
      <p align="center">
        <img src="../../dragond.png" width="350"/>
      </p>
      <br/>
      <p align="center">
        Show helper device after <strong>dragging</strong>
        <br/><br></p>

      <p align="center">
      <img src="https://img.shields.io/github/repo-size/kyechan99/dragond?style=for-the-badge"/>
      <img src="https://img.shields.io/github/license/kyechan99/dragond?style=for-the-badge"/>
      <a href="/">
          <img src="https://img.shields.io/badge/LIVE-DEMO-%235f5fff?style=for-the-badge"/>
      </a>
      </p>

      <br/><br/><br/><br/><br/><br/>

      <h2>Here is Dragond area.</h2>
      <dragond @dragondData="dragondData"
        v-bind:offsetX="0"
        v-bind:offsetY="0"
        class="dragond-area">
        <h4>Drag it here.</h4>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
      </dragond>
      <dragondDevice
        v-bind:darkmode="darkmode">
        <dragondMenu>d r a g</dragondMenu>
        <dragondLine></dragondLine>
        <dragondMenu>o n</dragondMenu>
        <dragondLine></dragondLine>
        <dragondMenu>d</dragondMenu>
        <dragondLine></dragondLine>
        <dragondMenu>
          <dragondIcon v-bind:icon="'search'"></dragondIcon>
        </dragondMenu>
        <dragondMenu>
          <dragondIcon v-bind:icon="'share'"></dragondIcon>
        </dragondMenu>
        <dragondMenu>
          <dragondIcon v-bind:icon="'copy'"></dragondIcon>
        </dragondMenu>
        <dragondMenu>
          <dragondIcon v-bind:icon="'like'"></dragondIcon>
        </dragondMenu>
        <dragondMenu>
          <dragondIcon v-bind:icon="'twitter'"></dragondIcon>
        </dragondMenu>
        <dragondMenu>
          <dragondIcon v-bind:icon="'facebook'"></dragondIcon>
        </dragondMenu>
        <dragondMenu>
          <dragondIcon v-bind:icon="'browser'"></dragondIcon>
        </dragondMenu>
        <dragondMenu v-on:click="darkmode = !darkmode">
          <dragondIcon v-bind:icon="'custom'" :d="'M3.183,9.381H0.704v1.239h2.479V9.381z M2.989,16.135l0.876,0.877l1.752-1.754l-0.876-0.875L2.989,16.135z M17.012,3.866l-0.877-0.876l-1.752,1.752l0.875,0.876L17.012,3.866z M10.62,0.705H9.38v2.479h1.239V0.705z M5.618,4.742 L3.865,2.989L2.989,3.866l1.753,1.752L5.618,4.742z M14.383,15.258l1.752,1.754l0.877-0.877l-1.754-1.752L14.383,15.258z M9.38,19.297h1.239v-2.48H9.38V19.297z M16.816,9.381v1.239h2.479V9.381H16.816z M10,5.042c-2.738,0-4.958,2.22-4.958,4.958 c0,2.738,2.22,4.959,4.958,4.959c2.738,0,4.958-2.221,4.958-4.959C14.958,7.263,12.738,5.042,10,5.042z M10,13.727 c-2.058,0-3.726-1.668-3.726-3.727c0-2.058,1.668-3.726,3.726-3.726c2.059,0,3.727,1.668,3.727,3.726 C13.727,12.059,12.059,13.727,10,13.727z'"></dragondIcon>
        </dragondMenu>
      </dragondDevice>
      


      <br/><br/><br/><br/>
      <h1 id="install">Install</h1>
      <h2 id="npm">NPM</h2>
      <pre>npm install dragond --save</pre>
      <h2 id="module">Module</h2>
      <pre>
import { dragond, dragondDevice, dragondMenu, dragondLine, dragondIcon } from 'dragond';

components: {
    dragond, dragondDevice, dragondMenu, dragondLine, dragondIcon
}</pre>

      <br/>
      <br/>
      
      <h1 id="usage">Usage</h1>
      <h2 id="dragonddevice">DragondDevice</h2>
      <p>Create <code>dragondDevice</code> component in the parent component to be used in common.</p>
      <pre><code class="lang-html"><span class="hljs-tag">&lt;<span class="hljs-name">dragondDevice</span>&gt;</span>
  ...
<span class="hljs-tag">&lt;/<span class="hljs-name">dragondDevice</span>&gt;</span>
      </code></pre>
      <h3 id="darkmode">darkmode</h3>
      <p>If you want to use dark mode, please use as follows.</p>
      <pre><code class="lang-html"><span class="hljs-tag">&lt;<span class="hljs-name">dragondDevice</span> <span class="hljs-attr">v-bind:darkmode</span>=<span class="hljs-string">"darkmode"</span>&gt;</span>
          ...
      <span class="hljs-tag">&lt;/<span class="hljs-name">dragondDevice</span>&gt;</span>
      </code></pre>
      <p><br/></p>
      <h2 id="dragond">Dragond</h2>
      <p>Create <code>dragond</code> component in the space to recognize the drag.</p>
      <pre><code class="lang-html"><span class="hljs-tag">&lt;<span class="hljs-name">dragond</span> @<span class="hljs-attr">dragondData</span>=<span class="hljs-string">"dragondData"</span>&gt;</span>
          ...
      <span class="hljs-tag">&lt;/<span class="hljs-name">dragond</span>&gt;</span>
      </code></pre>
      <p>And create the following function to retrieve the dragged data.</p>
      <pre><code class="lang-js">methods: {
          dragondData: <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-params">(data)</span> </span>{
              <span class="hljs-keyword">this</span>.msg = data;
          }
      }
      </code></pre>
      <h3 id="offset-setting">Offset Setting</h3>
      <p>Adjust the position value to launch the DragondDevice.</p>
      <pre><code class="lang-html">&lt;dragond @dragondData=<span class="hljs-string">"dragondData"</span>
          v-<span class="hljs-keyword">bind</span>:offsetX=<span class="hljs-string">"0"</span>
          v-<span class="hljs-keyword">bind</span>:offsetY=<span class="hljs-string">"0"</span>&gt;
          ...
      &lt;<span class="hljs-regexp">/dragond&gt;</span>
      </code></pre>
      <blockquote>
      <p>default value is 0.</p>
      </blockquote>
      <p><br/></p>
      <h2 id="dragondmenu">DragondMenu</h2>
      <p>Please put it in to add a menu function in the DragondDevice.</p>
      <pre><code class="lang-html"><span class="hljs-tag">&lt;<span class="hljs-name">dragondDevice</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">dragondMenu</span>&gt;</span>drag<span class="hljs-tag">&lt;/<span class="hljs-name">dragondMenu</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">dragondMenu</span>&gt;</span>...<span class="hljs-tag">&lt;/<span class="hljs-name">dragondMenu</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">dragondDevice</span>&gt;</span>
      </code></pre>
      <h3 id="margin-setting">Margin Setting</h3>
      <p>If you want to change the margin value, write as follows.</p>
      <p>Its value is measured in <code>rem</code>.</p>
      <pre><code class="lang-html"><span class="hljs-tag">&lt;<span class="hljs-name">dragondMenu</span>
          <span class="hljs-attr">v-bind:mgLeft</span>=<span class="hljs-string">"0.25"</span>
          <span class="hljs-attr">v-bind:mgRight</span>=<span class="hljs-string">"0.25"</span>&gt;</span>
          ...
      <span class="hljs-tag">&lt;/<span class="hljs-name">dragondMenu</span>&gt;</span>
      </code></pre>
      <blockquote>
      <p>default value is 0.25 rem</p>
      </blockquote>
      <p><br/></p>
      <h2 id="dragondline">DragondLine</h2>
      <p>Use this component if you want to add lines between DragondMenu.</p>
      <pre><code class="lang-html"><span class="hljs-tag">&lt;<span class="hljs-name">dragondDevice</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">dragondMenu</span>&gt;</span>drag<span class="hljs-tag">&lt;/<span class="hljs-name">dragondMenu</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">dragondLine</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">dragondLine</span>&gt;</span>         <span class="hljs-comment">&lt;!-- Like this --&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">dragondMenu</span>&gt;</span>ond<span class="hljs-tag">&lt;/<span class="hljs-name">dragondMenu</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">dragondDevice</span>&gt;</span>
      </code></pre>
      <h3 id="margin-setting">Margin Setting</h3>
      <p>If you want to change the margin value, write as follows.</p>
      <p>Its value is measured in <code>rem</code>.</p>
      <pre><code class="lang-html"><span class="hljs-tag">&lt;<span class="hljs-name">dragondLine</span>
          <span class="hljs-attr">v-bind:mgLeft</span>=<span class="hljs-string">"0.5"</span>
          <span class="hljs-attr">v-bind:mgRight</span>=<span class="hljs-string">"0.5"</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">dragondLine</span>&gt;</span>
      </code></pre>
      <blockquote>
      <p>default value is 0.5 rem</p>
      </blockquote>
      <p><br/></p>
      <h2 id="dragondicon">DragondIcon</h2>
      <p>Use this component if you want to use the built-in icons.</p>
      <blockquote>
      <p>Sources of built-in icons : <a href="http://svgicons.sparkk.fr/">svgicons</a></p>
      </blockquote>
      <h3 id="search-icon">Search Icon</h3>
      <pre><code class="lang-html"><span class="hljs-tag">&lt;<span class="hljs-name">dragondMenu</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">dragondIcon</span> <span class="hljs-attr">v-bind:icon</span>=<span class="hljs-string">"'search'"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">dragondIcon</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">dragondMenu</span>&gt;</span>
      </code></pre>
      <h3 id="share-icon">Share Icon</h3>
      <pre><code class="lang-html"><span class="hljs-tag">&lt;<span class="hljs-name">dragondMenu</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">dragondIcon</span> <span class="hljs-attr">v-bind:icon</span>=<span class="hljs-string">"'share'"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">dragondIcon</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">dragondMenu</span>&gt;</span>
      </code></pre>
      <h3 id="share-icon">Share Icon</h3>
      <pre><code class="lang-html"><span class="hljs-tag">&lt;<span class="hljs-name">dragondMenu</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">dragondIcon</span> <span class="hljs-attr">v-bind:icon</span>=<span class="hljs-string">"'share'"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">dragondIcon</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">dragondMenu</span>&gt;</span>
      </code></pre>
      <h3 id="copy-icon">Copy Icon</h3>
      <pre><code class="lang-html"><span class="hljs-tag">&lt;<span class="hljs-name">dragondMenu</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">dragondIcon</span> <span class="hljs-attr">v-bind:icon</span>=<span class="hljs-string">"'copy'"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">dragondIcon</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">dragondMenu</span>&gt;</span>
      </code></pre>
      <h3 id="like-icon">Like Icon</h3>
      <pre><code class="lang-html"><span class="hljs-tag">&lt;<span class="hljs-name">dragondMenu</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">dragondIcon</span> <span class="hljs-attr">v-bind:icon</span>=<span class="hljs-string">"'like'"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">dragondIcon</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">dragondMenu</span>&gt;</span>
      </code></pre>
      <h3 id="sns-icon">SNS Icon</h3>
      <pre><code class="lang-html"><span class="hljs-tag">&lt;<span class="hljs-name">dragondMenu</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">dragondIcon</span> <span class="hljs-attr">v-bind:icon</span>=<span class="hljs-string">"'twitter'"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">dragondIcon</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">dragondMenu</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">dragondMenu</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">dragondIcon</span> <span class="hljs-attr">v-bind:icon</span>=<span class="hljs-string">"'facebook'"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">dragondIcon</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">dragondMenu</span>&gt;</span>
      </code></pre>
      <h3 id="browser-icon">Browser Icon</h3>
      <pre><code class="lang-html"><span class="hljs-tag">&lt;<span class="hljs-name">dragondMenu</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">dragondIcon</span> <span class="hljs-attr">v-bind:icon</span>=<span class="hljs-string">"'browser'"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">dragondIcon</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">dragondMenu</span>&gt;</span>
      </code></pre>
      <h3 id="custom">Custom</h3>
      <pre><code class="lang-html">&lt;dragondMenu&gt;
          &lt;dragondIcon v-bind:icon="'custom'" :d="'....'"&gt;&lt;/dragondIcon&gt;
      &lt;/dragondMenu&gt;
      </code></pre>
    </div>
  </div>
</template>

<script>
import dragond from './dragond'
import dragondDevice from './dragondDevice'
import dragondMenu from './dragondMenu'
import dragondLine from './dragondLine'
import dragondIcon from './dragondIcon'

export default {
  components: { dragond, dragondDevice, dragondMenu, dragondLine, dragondIcon },
  name: 'HelloWorld',
  data () {
    return {
      msg: '',
      darkmode: false
    }
  },
  methods: {
    dragondData: function (data) {
      this.msg = data;
    }
  }
}

</script>

<style scoped>
.dragond-device {
  padding: 2rem 1rem;
}
pre {
  background-color: #f1f1f1;
  padding: 1rem;
  border-radius: .5rem;
}
.dragond-area {
  background-color: #e74d4f;
  padding: 1.25rem;
  border-radius: .5rem;
  -webkit-animation: blinking 1s ease-in-out infinite alternate;
  -moz-animation: blinking 1s ease-in-out infinite alternate;
  animation: blinking 1s ease-in-out infinite alternate;

}
@keyframes blinking {
  from {
    background-color: #e74d5023;
    -webkit-box-shadow: 0px 0px 15px 0px #8f5555; 
box-shadow: 0px 0px 15px 0px #8f5555;
  }
  to {
    background-color: #e74d4f14;
    -webkit-box-shadow: 0px 0px 25px -5px #b8b8b8; 
box-shadow: 0px 0px 25px -5px #b8b8b8;
  }
}
</style>
