
<br/>
<br/>

<p align="center">
  <img src="https://github.com/kyechan99/dragond/raw/master/dragond.png" width="350"/>
</p>
<br/>
<p align="center">
  Show helper device after <strong>dragging</strong>
  <br/>  
</p>

<p align="center">

 <a href="https://www.npmjs.com/package/dragond">
    <img src="https://img.shields.io/npm/v/dragond?style=for-the-badge"/>
 </a>
 <img src="https://img.shields.io/github/license/kyechan99/dragond?style=for-the-badge"/>
 <a href="https://kyechan99.github.io/dragond/">
 	<img src="https://img.shields.io/badge/LIVE-DEMO-%235f5fff?style=for-the-badge"/>
 </a>
</p>



<br/>
<br/>



# Install
## NPM
```
npm install dragond --save
```

## Module
```js
import { dragond, dragondDevice, dragondMenu, dragondLine, dragondIcon } from 'dragond';

components: {
    dragond, dragondDevice, dragondMenu, dragondLine, dragondIcon
}
```

<br/>
<br/>



# Usage

Detailed usage is in the [Docs](https://kyechan99.github.io/dragond/).

## DragondDevice
Create `dragondDevice` component in the parent component to be used in common.

```html
<dragondDevice>
    ...
</dragondDevice>
```

<br/>


## Dragond
Create `dragond` component in the space to recognize the drag.

```html
<dragond @dragondData="dragondData">
    ...
</dragond>
```

And create the following function to retrieve the dragged data.
```js
methods: {
    dragondData: function (data) {
        this.msg = data;
    }
}
```

<br/>


## DragondMenu
Please put it in to add a menu function in the DragondDevice.

```html
<dragondDevice>
    <dragondMenu>drag</dragondMenu>
    <dragondMenu>...</dragondMenu>
</dragondDevice>
```

<br/>


## DragondLine
Use this component if you want to add lines between DragondMenu.

```html
<dragondDevice>
    <dragondMenu>drag</dragondMenu>
    <dragondLine></dragondLine>         <!-- Like this -->
    <dragondMenu>ond</dragondMenu>
</dragondDevice>
```

<br/>


## DragondIcon
Use this component if you want to use the built-in icons.


```html
<dragondMenu>
    <dragondIcon v-bind:icon="'...'"></dragondIcon>
</dragondMenu>
```
