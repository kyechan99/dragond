<template>
  <div>
    <div class="container mg-b-10">
      
      <p><br/>
      <br/></p>
      <p align="center">
        <img src="../../dragond.png" width="500"/>
      </p>
      <br/>
      <p align="center">
        Show helper device after <strong>dragging</strong>
        <br/><br></p>

      <p align="center">
      <img src="https://img.shields.io/npm/v/dragond?style=for-the-badge"/>
      <img src="https://img.shields.io/github/license/kyechan99/dragond?style=for-the-badge"/>
      <br/>
      <a class="" href="https://github.com/kyechan99/dragond">
        <img class="mg-t-3" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width="32"/>
      </a>
      </p>
      
      <br/><br/><br/><br/><br/><br/>

      <h2 class="text-center">{{ intro[language].introTitle }}</h2>
      <h4 class="text-center">{{ intro[language].introDesc }}</h4>
      <div class="mg-tb-2 text-center"><i class="arrow down"></i></div>
      <dragond @dragondData="dragondData"
        v-bind:offsetX="0"
        v-bind:offsetY="0"
        class="dragond-area">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <p class="hide-md">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        <p class="hide-lg">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
      </dragond>
      <div class="mg-tb-2 text-center"><i class="arrow up"></i></div>

      <dragondDevice
        v-bind:darkmode="darkmode">
        <dragondMenu :fontSize="16" :mgLeft="0.25" :mgRight="0.25">d r a g</dragondMenu>
        <dragondLine :borderWidth="1" :borderStyle="'solid'" :borderColor="'rgba(0, 0, 0, 0.25)'"></dragondLine>
        <dragondMenu>o n</dragondMenu>
        <dragondLine></dragondLine>
        <dragondMenu>d</dragondMenu>
        <dragondLine></dragondLine>
        <dragondMenu>
          <dragondIcon v-bind:icon="'search'" :iconSize="16" :viewBox="'0 0 18 18'"></dragondIcon>
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
      


      <br/><br/>
      
      <div class="mg-tb-5 text-center">
        <button class="btn" :class="{'btn-primary' : (language == 'en')}" v-on:click="language = 'en'">EN</button>
        <button class="btn" :class="{'btn-primary' : (language == 'kr')}" v-on:click="language = 'kr'">KR</button>
      </div>
      
      <br/><br/>
      <h1 id="install">🏃 {{ install[language].title }}</h1>
      <h2 id="npm">NPM</h2>
      <pre>npm install dragond --save</pre>
      <br/>
      <h2 id="module">Module</h2>
      <pre>
import { dragond, dragondDevice, dragondMenu, dragondLine, dragondIcon } from 'dragond';

components: {
    dragond, dragondDevice, dragondMenu, dragondLine, dragondIcon
}</pre>

      <br/>
      <br/>
      
      <h1 id="usage">👀 {{ usage[language].title }}</h1>

      <h2 id="dragonddevice">&lt;DragondDevice/></h2>
      <img src="https://kyechan99.github.io/assets/img/2021-3-29-dragond/dragondDevice.png"/>
      <br/>
      <p>{{ usage[language].desc }}</p>
      <pre><code class="lang-html">{{ usage.dragondDevice.code0 }}</code></pre>
      <br/>
      
      <h3 id="darkmode">@:darkmode</h3>
      <p>{{ usage[language].darkmode }}</p>
      <pre><code class="lang-html">{{ usage.dragondDevice.code1 }}</code></pre>
      <p><br/></p>

      <br/>
      <h2 id="dragond">&lt;Dragond/></h2>
      <p>{{ usage[language].dragondDesc }}</p>
      <pre><code class="lang-html">{{ usage.dragond.code0 }}</code></pre>
      <br/>

      <p>{{ usage[language].dragondDataDesc }}</p>
      <pre><code class="lang-html">{{ usage.dragond.code1 }}</code></pre>
      <br/>

      <h3 id="offset-setting">@:Offset-Setting</h3>
      <p>{{ usage[language].dragondOffsetDesc }}</p>
      <pre><code class="lang-html">{{ usage.dragond.code2 }}</code></pre>
      <blockquote>
        <p>{{ usage[language].dragondOffsetQuote }}</p>
      </blockquote>
      <br/>
      <br/>

      <h2 id="dragondmenu">&lt;DragondMenu/></h2>
      <img src="https://kyechan99.github.io/assets/img/2021-3-29-dragond/dragondMenu.png"/>
      <br/>
      <p>{{ usage[language].dragondMenuDesc0 }}</p>
      <p>{{ usage[language].dragondMenuDesc1 }}</p>
      <pre><code class="lang-html">{{ usage.dragondMenu.code0 }}</code></pre>
      <br/>

      <h3 id="dragondMenu-margin-setting">@:Margin-Setting</h3>
      <p>{{ usage[language].dragondMenuMgDesc0 }}</p>
      <p>{{ usage[language].dragondMenuMgDesc1 }}</p>
      <pre><code class="lang-html">{{ usage.dragondMenu.code1 }}</code></pre>
      <blockquote>
        <p>{{ usage[language].dragondMenuMgQuote }}</p>
      </blockquote>
      <br/>

      <h3 id="dragondMenu-fontsize-setting">@:FontSize-Setting</h3>
      <p>{{ usage[language].dragondMenuFontSizeDesc0 }}</p>
      <p>{{ usage[language].dragondMenuFontSizeDesc1 }}</p>
      <pre><code class="lang-html">{{ usage.dragondMenu.code2 }}</code></pre>
      <blockquote>
        <p>{{ usage[language].dragondMenuFontSizeQuote }}</p>
      </blockquote>

      <br/>
      <br/>

      <h2 id="dragondline">&lt;DragondLine/></h2>
      <img src="https://kyechan99.github.io/assets/img/2021-3-29-dragond/dragondLine.png"/>
      <br/>
      <p>{{ usage[language].dragondLineDesc }}</p>
      <pre><code class="lang-html">{{ usage.dragondLine.code0 }}</code></pre>
      <br/>

      <h3 id="dragondline-margin-setting">@:Margin-Setting</h3>
      <p>{{ usage[language].dragondLineMgDesc0 }}</p>
      <p>{{ usage[language].dragondLineMgDesc1 }}</p>
      <pre><code class="lang-html">{{ usage.dragondLine.code1 }}</code></pre>
      <blockquote>
        <p>{{ usage[language].dragondLineMgQuote }}</p>
      </blockquote>
      <br/>

      <h3 id="dragondline-border-setting">@:Border-Setting</h3>
      <p>{{ usage[language].dragondLineBorderDesc0 }}</p>
      <p>{{ usage[language].dragondLineBorderDesc1 }}</p>
      <pre><code class="lang-html">{{ usage.dragondLine.code2 }}</code></pre>

      <br/>
      <br/>

      <h2 id="dragondicon">&lt;DragondIcon/></h2>
      <p>{{ usage[language].dragondIconDesc0 }}</p>
      <p>{{ usage[language].dragondIconDesc1 }} <a href="http://svgicons.sparkk.fr/">svgicons</a></p>
      <br/>

      <h3 id="search-icon">Search Icon &nbsp; <dragondIcon v-bind:icon="'search'"></dragondIcon></h3>
      <pre><code class="lang-html">{{ usage.dragondIcon.search }}</code></pre>
      <br/>

      <h3 id="share-icon">Share Icon &nbsp; <dragondIcon v-bind:icon="'share'"></dragondIcon></h3>
      <pre><code class="lang-html">{{ usage.dragondIcon.share }}</code></pre>
      <br/>

      <h3 id="copy-icon">Copy Icon &nbsp; <dragondIcon v-bind:icon="'copy'"></dragondIcon></h3>
      <pre><code class="lang-html">{{ usage.dragondIcon.copy }}</code></pre>
      <br/>

      <h3 id="like-icon">Like Icon &nbsp; <dragondIcon v-bind:icon="'like'"></dragondIcon></h3>
      <pre><code class="lang-html">{{ usage.dragondIcon.like }}</code></pre>
      <br/>

      <h3 id="sns-icon">SNS Icon &nbsp;
        <dragondIcon v-bind:icon="'twitter'"></dragondIcon>&nbsp;
        <dragondIcon v-bind:icon="'facebook'"></dragondIcon>
      </h3>
      <pre><code class="lang-html">{{ usage.dragondIcon.sns }}</code></pre>
      <br/>

      <h3 id="browser-icon">Browser Icon &nbsp;<dragondIcon v-bind:icon="'browser'"></dragondIcon></h3>
      <pre><code class="lang-html">{{ usage.dragondIcon.browser }}</code></pre>
      <br/>

      <h3 id="custom">Custom</h3>
      <p>{{ usage[language].dragondIconCustomDesc0 }}</p>
      <br/>
      <h4 id="iconSize">@:Custom-Svg-Path</h4>
      <p>{{ usage[language].dragondIconCustomDesc1 }}</p>
      <p>{{ usage[language].dragondIconCustomDesc2 }}</p>
      <pre><code class="lang-html">{{ usage.dragondIcon.custom }}</code></pre>
      <br/>
      <h4 id="iconSize">@:iconSize-Setting</h4>
      <pre><code class="lang-html">{{ usage.dragondIcon.custom2 }}</code></pre>
      <br/>
      <h4 id="viewBox">@:viewBox-Setting</h4>
      <pre><code class="lang-html">{{ usage.dragondIcon.custom3 }}</code></pre>

      <br/><br/>
      <br/>

      <h1 id="note">📝 {{ usage[language].noteTitle }}</h1>
      <p>{{ usage[language].noteDesc0 }}</p>
      <p>{{ usage[language].noteDesc1 }}</p>
      <pre><code class="lang-html">{{ usage.noteCode }}</code></pre>
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
      darkmode: false,
      language: 'en',
      intro: {
        en: {
          introTitle: "Here is Dragond area.", 
          introDesc: "Drag it anywhere here.", 
        },
        kr: {
          introTitle: "아래는 Dragond 가 인식되는 공간입니다.", 
          introDesc: "이곳 아무곳에나 드래그 해보세요.", 
        }
      },
      install: {
        en: {
          title: "Install"
        },
        kr: {
          title: "설치하기"
        }
      },
      usage: {
        dragondDevice: {
          code0: `<dragondDevice>
  ...
</dragondDevice>`,
          code1: `<dragondDevice v-bind:darkmode="darkmode">
    ...
</dragondDevice>`,
        },
        dragond: {
          code0: `<dragond @dragondData="dragondData">
    ...
</dragond>`,
          code1: `methods: {
    dragondData: function (data) {
        this.msg = data;
    }
}`,
          code2: `<dragond @dragondData="dragondData"
    v-bind:offsetX="0"
    v-bind:offsetY="0">
    ...
</dragond>`
        },
        dragondMenu: {
          code0: `<dragondDevice>
    <dragondMenu>drag</dragondMenu>
    <dragondMenu>...</dragondMenu>
</dragondDevice>`,
          code1: `<dragondMenu
    v-bind:mgLeft="0.25"
    v-bind:mgRight="0.25">
    ...
</dragondMenu>`,
          code2: `<dragondMenu
    v-bind:fontSize="16">
    ...
</dragondMenu>`
        },
        dragondLine: {
          code0: `<dragondDevice>
    <dragondMenu>drag</dragondMenu>
    <dragondLine></dragondLine>         <!-- Like this -->
    <dragondMenu>ond</dragondMenu>
</dragondDevice>`,
          code1: `<dragondLine
    v-bind:mgLeft="0.5"
    v-bind:mgRight="0.5">
</dragondLine>`,
          code2: `<dragondLine
    :borderWidth="1"
    :borderStyle="'solid'"
    :borderColor="'rgba(0, 0, 0, 0.25)'">
</dragondLine>`
        },
        dragondIcon:  {
          search: `<dragondMenu>
    <dragondIcon v-bind:icon="'search'"></dragondIcon>
</dragondMenu>`,
          share: `<dragondMenu>
    <dragondIcon v-bind:icon="'share'"></dragondIcon>
</dragondMenu>`,
          copy: `<dragondMenu>
    <dragondIcon v-bind:icon="'copy'"></dragondIcon>
</dragondMenu>`,
          like: `<dragondMenu>
    <dragondIcon v-bind:icon="'like'"></dragondIcon>
</dragondMenu>`,
          sns: `<dragondMenu>
    <dragondIcon v-bind:icon="'twitter'"></dragondIcon>
</dragondMenu>
<dragondMenu>
    <dragondIcon v-bind:icon="'facebook'"></dragondIcon>
</dragondMenu>`,
          browser: `<dragondMenu>
    <dragondIcon v-bind:icon="'browser'"></dragondIcon>
</dragondMenu>`,
          custom: `<dragondMenu>
    <dragondIcon v-bind:icon="'custom'" :d="'....'"></dragondIcon>
</dragondMenu>`,
          custom2: `<dragondIcon v-bind:icon="'...'" :iconSize="16">`,
          custom3: `<dragondIcon v-bind:icon="'...'" :viewBox="'0 0 18 18'">`,
        },
        noteCode: `body {
  width: 100%;
  overflow-x: hidden;
}`,
        en: {
          title: "Usage",
          desc: "Create <dragondDevice> component in the parent component to be used in common. This device is displayed when dragged.",
          darkmode: "If you want to use dark mode, please use as follows.",
          dragondDesc: "Create dragond component in the space to recognize the drag.",
          dragondDataDesc: "And create the following function to retrieve the dragged data.",
          dragondOffsetDesc: "Adjust the position value to launch the DragondDevice.",
          dragondOffsetQuote: "default value is 0.",
          dragondMenuDesc0: "Please put it in to add a menu function in the DragondDevice.",
          dragondMenuDesc1: "It has a button attribute.",
          dragondMenuMgDesc0: "If you want to change the margin value, write as follows.",
          dragondMenuMgDesc1: "Its value is measured in rem.",
          dragondMenuMgQuote: "default value is 0.25 rem",
          dragondMenuFontSizeDesc0: "If you want to change the font-size value, write as follows.",
          dragondMenuFontSizeDesc1: "Its value is measured in rem.",
          dragondMenuFontSizeQuote: "default value is 16 px",
          dragondLineDesc: "Use this component if you want to add lines between DragondMenu.",
          dragondLineMgDesc0: "If you want to change the margin value, write as follows.",
          dragondLineMgDesc1: "Its value is measured in rem.",
          dragondLineMgQuote: "default value is 0.5 rem",
          dragondLineBorderDesc0: "If you want to change the border value, write as follows.",
          dragondLineBorderDesc1: "Border-Width value is measured in px. Default is 1px",
          dragondIconDesc0: "Use this component if you want to use the built-in icons.",
          dragondIconDesc1: "Sources of built-in icons :",
          dragondIconCustomDesc0: "You can customize the icon design as follows :",
          dragondIconCustomDesc1: "If you want to enter the svg path directly, enter it as follows.",
          dragondIconCustomDesc2: "Enter 'custom' in :icon and svg path in :d.",
          noteTitle: "Note",
          noteDesc0: "If you use too many elements in the dragondDevice can be solved Screen overflow.",
          noteDesc1: "It can be solved as follows, but this is not an absolute workaround."
        },
        kr: {
          title: "사용하기",
          desc: "공용으로 사용할 상위 컴포넌트에 <dragondDevice> 컴포넌트를 만듭니다. 드래그 했을때 보여지는 디바이스입니다.",
          darkmode: "다크모드 기능을 사용하고자 한다면 다음과 같이 사용하세요.",
          dragondDesc: "드래그를 인식할 공간을 이 컴포넌트로 생성해줍니다.",
          dragondDataDesc: "드래그 된 데이터를 얻어오고자 한다면 다음과 같은 함수를 만들어 줍니다.",
          dragondOffsetDesc: "DragondDevice를 시작하려면 위치 값을 조정하십시오.",
          dragondOffsetQuote: "기본값은 0 입니다.",
          dragondMenuDesc0: "DragondDevice에 메뉴 기능을 추가하려면 다음과 같이 입력하십시오.",
          dragondMenuDesc1: "내부적으로 버튼 속성을 가지고 있습니다.",
          dragondMenuMgDesc0: "margin 값을 변경하고 싶다면 다음과 같이 사용해주세요.",
          dragondMenuMgDesc1: "데이터 단위는 rem 입니다.",
          dragondMenuMgQuote: "기본값은 0.25 rem 입니다.",
          dragondMenuFontSizeDesc0: "font-size 값을 변경하고 싶다면 다음과 같이 사용해주세요.",
          dragondMenuFontSizeDesc1: "데이터 단위는 px 입니다.",
          dragondMenuFontSizeQuote: "기본값은 16 px 입니다.",
          dragondLineDesc: "DragondMenu 사이에 선을 긋고자 한다면 이 컴포넌트를 사용해주세요.",
          dragondLineMgDesc0: "margin 값을 변경하고 싶다면 다음과 같이 사용해주세요.",
          dragondLineMgDesc1: "데이터 단위는 rem 입니다.",
          dragondLineMgQuote: "기본값은 0.5 rem 입니다.",
          dragondLineBorderDesc0: "border 속성을 변경하고자 한다면 다음과 같이 사용해주세요.",
          dragondLineBorderDesc1: "border-width 는 px 단위이고 기본값은 1px 입니다.",
          dragondIconDesc0: "내장된 아이콘을 사용하고자 한다면 이 컴포넌트를 사용해주세요.",
          dragondIconDesc1: "내장된 아이콘들의 출처 :",
          dragondIconCustomDesc0: "아이콘 디자인을 다음과 같이 커스터마이징 할 수 있습니다.",
          dragondIconCustomDesc1: "직접 svg path 를 입력하고자 한다면 다음과 같이 입력해주세요.",
          dragondIconCustomDesc2: ":icon 에 'custom' 을 입력하고, :d 에 svg path 를 입력하면 됩니다.",
          noteTitle: "참고사항",
          noteDesc0: "dragondDevice에 너무 많은 요소들을 사용하면 화면 overflow 현상이 일어날 수 있습니다",
          noteDesc1: "다음과 같이 해결될 수 있지만 절대적인 해결 방법은 아닙니다."
        }
      }
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
h1 {
  font-weight: 900;
  padding-bottom: .5rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #a77eff42;
}
h2 {
  font-weight: 700;
  font-size: 1.75rem;
  color: #45326b;
}
h3 {
  margin-top: 1rem;
  font-size: 1.25rem;
}
h4 {
  font-size: 1rem;
}
p {
  /* font-weight: 500; */
  margin-bottom: .5rem;
  color: #212529a6;
}
pre {
  background-color: #f7edff;
  padding: 1rem;
  border-radius: .5rem;
  overflow-x: auto;
}
img {
  max-width: 100%;
}
blockquote {
  border-left: 3px solid #b897ff66;
  padding-left: 1rem;
}
.btn {
  border: none;
}

.dragond-device {
  padding: 2rem 1rem;
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
    background-color: #c5a4d84d;
    -webkit-box-shadow: 0px 0px 15px 15px #d1bbddc9;
    box-shadow: 0px 0px 15px 15px #d1bbddc9;
  }
  to {
    background-color: #b897ff71;
    -webkit-box-shadow: 0px 0px 25px -5px #b8b8b8; 
    box-shadow: 0px 0px 25px -5px #b8b8b8;
  }
}
.arrow {
  border: solid #00000036;
  border-width: 0 5px 5px 0;
  display: inline-block;
  padding: 10px;
  -webkit-animation: arrowAnim 1s ease-in-out infinite alternate;
  -moz-animation: arrowAnim 1s ease-in-out infinite alternate;
  animation: arrowAnim 1s ease-in-out infinite alternate;
}
.up {
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
}
.down {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}
@keyframes arrowAnim {
  from {
    border-color: #00000017;
  }
  to {
    border-color: #0000004d;
  }
}

</style>
