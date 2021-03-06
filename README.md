
<p align="center">
  <img src="./dragond.png" width="250"/>
</p>
<br/>
<p align="center">
  Show helper device after <strong>dragging</strong>
  <br/>  
</p>

<p align="center">
 <img src="https://img.shields.io/github/repo-size/kyechan99/dragond?style=for-the-badge"/>
 <img src="https://img.shields.io/github/license/kyechan99/dragond?style=for-the-badge"/>
 <a href="/">
 	<img src="https://img.shields.io/badge/LIVE-DEMO-%235f5fff?style=for-the-badge"/>
 </a>
</p>




## DragondDevice
Create `dragondDevice` component in the parent component to be used in common.

```html
<dragondDevice>
    ...
</dragondDevice>
```

### darkmode
If you want to use dark mode, please use as follows.

```html
<dragondDevice v-bind:darkmode="darkmode">
    ...
</dragondDevice>
```




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

### Offset Setting
Adjust the position value to launch the DragondDevice.

```html
<dragond @dragondData="dragondData"
    v-bind:offsetX="0"
    v-bind:offsetY="0">
    ...
</dragond>
```

> default value is 0.




## DragondMenu
Please put it in to add a menu function in the DragondDevice.

```html
<dragondDevice>
    <dragondMenu>drag</dragondMenu>
    <dragondMenu>...</dragondMenu>
</dragondDevice>
```

### Margin Setting
If you want to change the margin value, write as follows.

Its value is measured in `rem`.

```html
<dragondMenu
    v-bind:mgLeft="0.25"
    v-bind:mgRight="0.25">
    ...
</dragondMenu>
```

> default value is 0.25 rem




## DragondLine
Use this component if you want to add lines between DragondMenu.

```html
<dragondDevice>
    <dragondMenu>drag</dragondMenu>
    <dragondLine></dragondLine>         <!-- Like this -->
    <dragondMenu>ond</dragondMenu>
</dragondDevice>
```

### Margin Setting
If you want to change the margin value, write as follows.

Its value is measured in `rem`.

```html
<dragondLine
    v-bind:mgLeft="0.5"
    v-bind:mgRight="0.5">
</dragondLine>
```

> default value is 0.5 rem




## DragondIcon
Use this component if you want to use the built-in icons.

> Sources of built-in icons : [svgicons](http://svgicons.sparkk.fr/)

### Search Icon
```html
<dragondMenu>
    <dragondIcon v-bind:icon="'search'"></dragondIcon>
</dragondMenu>
```

### Share Icon
```html
<dragondMenu>
    <dragondIcon v-bind:icon="'share'"></dragondIcon>
</dragondMenu>
```

### Share Icon
```html
<dragondMenu>
    <dragondIcon v-bind:icon="'share'"></dragondIcon>
</dragondMenu>
```

### Copy Icon
```html
<dragondMenu>
    <dragondIcon v-bind:icon="'copy'"></dragondIcon>
</dragondMenu>
```

### Like Icon
```html
<dragondMenu>
    <dragondIcon v-bind:icon="'like'"></dragondIcon>
</dragondMenu>
```

### SNS Icon
```html
<dragondMenu>
    <dragondIcon v-bind:icon="'twitter'"></dragondIcon>
</dragondMenu>
<dragondMenu>
    <dragondIcon v-bind:icon="'facebook'"></dragondIcon>
</dragondMenu>
```

### Browser Icon
```html
<dragondMenu>
    <dragondIcon v-bind:icon="'browser'"></dragondIcon>
</dragondMenu>
```

### Custom
```html
<dragondMenu>
    <dragondIcon v-bind:icon="'custom'" :d="'M3.183,9.381H0.704v1.239h2.479V9.381z M2.989,16.135l0.876,0.877l1.752-1.754l-0.876-0.875L2.989,16.135z M17.012,3.866l-0.877-0.876l-1.752,1.752l0.875,0.876L17.012,3.866z M10.62,0.705H9.38v2.479h1.239V0.705z M5.618,4.742 L3.865,2.989L2.989,3.866l1.753,1.752L5.618,4.742z M14.383,15.258l1.752,1.754l0.877-0.877l-1.754-1.752L14.383,15.258z M9.38,19.297h1.239v-2.48H9.38V19.297z M16.816,9.381v1.239h2.479V9.381H16.816z M10,5.042c-2.738,0-4.958,2.22-4.958,4.958 c0,2.738,2.22,4.959,4.958,4.959c2.738,0,4.958-2.221,4.958-4.959C14.958,7.263,12.738,5.042,10,5.042z M10,13.727 c-2.058,0-3.726-1.668-3.726-3.727c0-2.058,1.668-3.726,3.726-3.726c2.059,0,3.727,1.668,3.727,3.726 C13.727,12.059,12.059,13.727,10,13.727z'"></dragondIcon>
</dragondMenu>
```
