<template>
     <div class="box" :class="{ full: fullVal }">
          <el-button type="primary" @click="fullVal = !fullVal">切换大屏</el-button>
          <div id="GaodeMap" />
     </div>
</template>

<script setup lang="ts">
import AMapLoader from '@amap/amap-jsapi-loader';
import { ref } from 'vue';
let fullVal = ref<Boolean>(false)
function init() {
     let amap
     AMapLoader.load({
          key: '0482bdf5597735a21bbb2b120df1ff03',
          version: "2.0",
          plugins: []
     }).then((AMap) => {
          amap = new AMap.Map('GaodeMap', {
               zoom: 11,//级别
               center: [116.397428, 39.90923],//中心点坐标
               viewMode: '3D',//使用3D视图
               pitch: 50, // 地图俯仰角度，有效范围 0 度- 83 度
          });
          // amap.canvas.willReadFrequently = true
          // amap.canvas.getContext('2d', { willReadFrequently: true });
     }).catch(e => {
          console.log(e);
     })
     
}

init()
</script>
   
<style lang="scss" scoped>
.box{
     @include bfc
}
#GaodeMap {
     margin: 20px 0;
     height: 100%;
     overflow: hidden;
     /* min-height: 60vh; */
     border: 1px solid #000;
}

.full {
     position: absolute;
     left: 0;
     top: 0;
     width: 100%;
     height: 100vh;
     padding: 0 !important;
     margin: 0 !important;
     background-color: #fff;
}
</style>