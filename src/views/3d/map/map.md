##### 地图

> npm i @amap/amap-jsapi-loader --save

```html
<div id="GaodeMap" />
```

```js
import AMapLoader from '@amap/amap-jsapi-loader';
import { ref } from 'vue';
let fullVal = ref<Boolean>(false)
function init() {
     AMapLoader.load({
          key: '0482bdf5597735a21bbb2b120df1ff03',
          version: "2.0",
     }).then((AMap) => {
          let map = new AMap.Map('GaodeMap', {
               zoom: 11,//级别
               center: [116.397428, 39.90923],//中心点坐标
               viewMode: '3D',//使用3D视图
               pitch: 50 // 地图俯仰角度，有效范围 0 度- 83 度
          });
     }).catch(e => {
          console.log(e);
     })
}

init()
```