import dragond from './components/dragond.vue'
import dragondDevice from './components/dragondDevice.vue'
import dragondMenu from './components/dragondMenu.vue'
import dragondLine from './components/dragondLine.vue'
import dragondIcon from './components/dragondIcon.vue'

module.exports = {
  install: function (Vue, options) {
    Vue.component('dragond', dragond);
    Vue.component('dragondDevice', dragondDevice);
    Vue.component('dragondMenu', dragondMenu);
    Vue.component('dragondLine', dragondLine);
    Vue.component('dragondIcon', dragondIcon);
  }
};

/*

// import dragond from './components/dragond.vue'
// import dragondDevice from './components/dragondDevice.vue'
// import dragondMenu from './components/dragondMenu.vue'
// import dragondLine from './components/dragondLine.vue'
import dragondIcon from './components/dragondIcon.vue'
// import dragondData from 
const dragondData  = require('./components/dragondData.js');

const components = [
//   dragond,
//   dragondDevice,
//   dragondMenu,
//   dragondLine,
  dragondIcon
]

module.exports = {
    install: function (Vue, options) {
      Vue.component('dragondIcon', dragondIcon);
    }
  };

  /*
export function install(Vue) {
	if (install.installed) return;
  	install.installed = true;
    
    components.forEach( component => {
      Vue.component( component.name, component );
    });
}

// Create module definition for Vue.use()
const plugin = {
  install
};

// Auto-install when vue is found (eg. in browser via <script> tag)
let GlobalVue = null;
if (typeof window !== 'undefined') {
 GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
 GlobalVue = global.Vue;
}
if (GlobalVue) {
 GlobalVue.use(plugin);
}

// module.exports = {
//   install: function (Vue, options) {
//     components.forEach( component => {
//       Vue.component( component.name, component );
//     } );
//     // Vue.component('dragond', dragond);
//     // Vue.component('dragondDevice', dragondDevice);
//     // Vue.component('dragondMenu', dragondMenu);
//     // Vue.component('dragondLine', dragondLine);
//     // Vue.component('dragondIcon', dragondIcon);
//     dragondData;
//   }
// };

// export default {
//     dragond,
//     dragondDevice,
//     dragondMenu,
//     dragondLine,
//     dragondIcon,
//     dragondData
// };

// To allow use as module (npm/webpack/etc.) export component
export default { components, dragondData };

*/