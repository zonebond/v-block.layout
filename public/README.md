# v-block.layout
<br>

> Layout library that based on Flexbox technology.
>
> Group组件是基于Flexbox技术实现的布局组件。能够很大程度上简化使用传统样式方式布局复杂的、灵活的和自适应性布局场景的难度。简化了理解布局样式的难度。统一布了局方式。避免使用不同风格的代码写出布局样式，以至于增加维护成本。屏蔽了跨浏览器、跨平台设备兼容性问题的处理过程。<br>Flexbox 是一种新技术，但在如今各个浏览器都广泛支持的情况下，它已经开始准备广泛应用了。Flexbox提供了工具，允许快速创建曾经被证明用CSS很难实现的一些复杂，灵活的布局和功能。[关于Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)

<br>

<br>

> #### Install :: 安装

---

```bash
# npm
npm install v-block.layout@latest --save-dev

# yarn
yarn add v-block.layout@latest --save-dev
```

<br>

> #### Usage :: 使用

---

```jsx
# quick start

import { HGroup, VGroup } from 'v-block.layout'

const Header = props => (
  <HGroup vertical="center" height="40px" flex>
    {props.caption}
  </HGroup>
);

const Content = props => (
	...render content corresponding to selected side-menu, code here!...
);

function App() {
  
  return (
    <VGroup width="100vw" height="100vh" horizontal="stretch">
      <Header caption="V-BLOCK.LAYOUT LAB!"/>
      <HGroup flex>
      	<VGroup className="side-menu">
        	...render side-menu items code here!...
        </VGroup>
        <Content />
      </HGroup>
    </VGroup>
  )
}
```

<br>

<br>

## [Github document] https://github.com/zonebond/v-block.layout#readme

<br>

<br>

> #### Concepts & Terms :: 概念&术语

### main-axis :

The main axis in [flexbox](https://developer.mozilla.org/en-US/docs/Glossary/Flexbox) is defined by the direction set by the [`flex-direction`](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction) property. There are four possible values for `flex-direction`. 

主轴，布局方向上的轴线。

![basics1](https://developer.mozilla.org/en-US/docs/Glossary/Main_Axis/basics1.png)

![basics2](https://developer.mozilla.org/en-US/docs/Glossary/Main_Axis/basics2.png)

### cross-axis :

The cross axis in [flexbox](https://developer.mozilla.org/en-US/docs/Glossary/Flexbox) runs perpendicular to the [main axis](https://developer.mozilla.org/en-US/docs/Glossary/Main_Axis), therefore if your [`flex-direction`](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction) is either `row` or `row-reverse` then the cross axis runs down the columns.

交叉轴，垂直于布局方向上的轴。即，垂直于主轴的轴。

### HGroup :

HGroup is the layout container of the **main-axis** in the **horizontal** direction.

横向布局组容器

```jsx
import { HGroup } from "v-block.layout"

function View() {
  return <HGroup>{children}</HGroup>
}
```

### VGroup :

VGroup is the layout container of the **main-axis** in the **vertical** direction.

竖向布局组容器

```jsx
import { VGroup } from "v-block.layout"

function View() {
  return <VGroup>{children}</VGroup>
}
```



> #### Properties :: 属性

### horizontal  |  vertical

> **This property defines how the browser distributes space between and around content items along the axis of a flex container, and the inline axis of a grid container.**
>
> **如何分配顺着弹性容器主轴(或交叉轴) 的元素之间及其周围的空间。**
>
> **alias :: horizontalAlign | verticalAlign**

```jsx
<HGroup horizontalAlign="center">
  ... render items code here! ...
</HGroup>
```

> **options**

| Value         | Description                                                  |
| :------------ | ------------------------------------------------------------ |
| center        | Pack items around the center <br />居中排列                  |
| flex-start    | Pack flex items from the start <br />从行首起始位置开始排列  |
| flex-end      | Pack flex items from the end <br />从行尾位置开始排列        |
| stretch       | Distribute items evenly Stretch 'auto'-sized items to fit the container <br />均匀排列每个元素 'auto'-sized 的元素会被拉伸以适应容器的大小 |
| space-between | Distribute items evenly The first item is flush with the start, the last is flush with the end<br />均匀排列每个元素，首个元素放置于起点，末尾元素放置于终点 |
| space-around  | Distribute items evenly Items have a half-size space on either end<br />均匀排列每个元素，每个元素周围分配相同的空间 |

> **PS** :: **注意**

```css
stretch, only works on corss-axis
拉伸，只适用于交叉轴

HGroup :: horizontal = main-axis | vertical = cross-axis

VGroup :: horizontal = corss-axis | vertical = main-axis
```

### flex

> **The `flex` sets how a flex *item* will grow or shrink to fit the space available in its flex container.**
>
> **`flex` 设置了弹性项目如何增大或缩小以适应其弹性容器中可用的空间。**

```jsx
import { HGroup } from "v-block.layout"

function App() {
  return (
    <HGroup flex></HGroup>
  )
}

// jsx :: props "flex" same as "flex={true}"
```

>**options**

| Value      | Description                                                  |
| ---------- | ------------------------------------------------------------ |
| false      | disabled flex<br />无flex效果                                |
| true       | enabled flex and assign value : "1 0 0%"<br />启用flex，相当于设置值为“1 0 0%” |
| *[string]* | 1. One value, unitless number: flex-grow<br />一个值, 无单位数字: flex-grow<br /><br />2. One value, width/height: flex-basis<br />一个值, width/height: flex-basis<br /><br />3. Two values: flex-grow \| flex-basis<br />两个值: flex-grow \| flex-basis<br /><br />4. Two values: flex-grow \| flex-shrink<br />两个值: flex-grow \| flex-shrink<br /><br />5.Three values: flex-grow \| flex-shrink \| flex-basis<br />三个值: flex-grow \| flex-shrink \| flex-basis |

```css

/* One value, unitless number: flex-grow */
/* 一个值, 无单位数字: flex-grow */
flex: 2;

/* One value, width/height: flex-basis */
/* 一个值, width/height: flex-basis */
flex: 10em;
flex: 30px;
flex: min-content;

/* Two values: flex-grow | flex-basis */
/* 两个值: flex-grow | flex-basis */
flex: 1 30px;

/* Two values: flex-grow | flex-shrink */
/* 两个值: flex-grow | flex-shrink */
flex: 2 2;

/* Three values: flex-grow | flex-shrink | flex-basis */
/* 三个值: flex-grow | flex-shrink | flex-basis */
flex: 2 2 10%;

```

### gap

> **The interval between adjacent items in the flexbox container**
>
> **flexbox容器中相邻元素之间的间隔**

```jsx

import { HGroup } from "v-block.layout"

function App() {
  
  return (
    <HGroup gap={10}>
      <ElementA />
      <ElementB />
      ...
    </HGroup>
  )
}

```

> **options**

| Value                             | Description                                                  |
| --------------------------------- | ------------------------------------------------------------ |
| [Number] 数字类型                 | The interval between adjacent items in the flexbox container.<br />flexbox容器中相邻元素之间的间隔。<br />数字间隔相当于设置了“数字+px” |
| [String] 字符串类型               | The interval between adjacent items in the flexbox container.<br />flexbox容器中相邻元素之间的间隔。<br />字符串间隔相当于设置了“css样式长度” |
| [React Element] React element类型 | Use the specified react element to fill the gap of items in the flexbox container.<br />使用指定的react element填充flexbox容器中的项目的间隙 |

```jsx

// [number]
return <HGroup gap={10}>...</HGroup>

// [string]
return <HGroup gap="10px">...</HGroup>
return <HGroup gap="10rem">...</HGroup>

// [react element]
function DividingLine() {
  return <span className="dividing-line"></span>
}
... ...
return <HGroup gap={<DividingLine />}>...</HGroup>

```

### width、height、padding、margin、overflow

> **html box-model properties**
>
> **html盒模型属性**

```jsx

# width | height  :: [number、string]
return <HGroup width="10rem" height={10}>...</HGroup>
/* 
* You can write both number and string data-types 
* When use number type, it auto transform into number+px
* eg. width={10} is equal to width="10px"
*/

# padding | margin  :: [string]
return <HGroup padding="10px 10px" margin="10px">...</HGroup>
/*
* Same as css styles property
* One value, Apply to all four sides
* Two values, top and top | left and right
* Four values, top | right | bottom | left
*/

# overflow
return <HGroup overflow="auto">...</HGroup>
/*
* overflow="hidden"
* overflow="auto"
* overflow="visible"
* overflow="clip"
* overflow="scroll"
* overflow="hidden visible"
*/
```

<br>

<br>

---

<br>

<br>

> powered by Zonebond of Oneteams studio F2D (F2D is "front-end design and development" team)<br>

> author <zonebond@126.com>

> 知乎 https://www.zhihu.com/people/zonebond/posts

