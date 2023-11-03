<template>
  <div :id="echartsId" :style="{ width: ewidth, height: eheight }"></div>
</template>
<script setup lang="ts">
import * as echarts from "echarts";

const props = defineProps({
  echartsId: {
        type: String,
        default: 'BarChart',
      },
      ewidth: {
        type: String,
        default: '100%',
      },
      eheight: {
        type: String,
        default: '300px',
      },
})

// 相父组件暴露方法
defineExpose({
  epRef,
  fetchData
 })

function epRef() {
  return echarts.init(document.getElementById(props.echartsId));
}
interface objType{
  name: string,
  value: number
}

function fetchData(mychart:echarts.ECharts, data:{
  x: objType[],
  y: objType[],
}) {
  const option = {
          // backgroundColor: '#00265f',
          tooltip: {
            trigger: 'axis',
            axisPointer: { type: 'shadow' },
          },
          grid: {
            left: '0%',
            top: '10px',
            right: '0%',
            bottom: '4%',
            containLabel: true,
          },
          xAxis: [
            {
              type: 'category',
              data: data.x,
              axisLine: {
                show: true,
                lineStyle: {
                  color: 'rgba(255,255,255,.1)',
                  width: 1,
                  type: 'solid',
                },
              },

              axisTick: {
                show: false,
              },
              axisLabel: {
                interval: 0,
                // rotate:50,
                show: true,
                splitNumber: 15,
                color: 'rgba(255,255,255,.6)',
                fontSize: '12',
              },
            },
          ],
          yAxis: [
            {
              type: 'value',
              axisLabel: {
                //formatter: '{value} %'
                show: true,
                color: 'rgba(255,255,255,.6)',
                fontSize: '12',
              },
              axisTick: {
                show: false,
              },
              axisLine: {
                show: true,
                lineStyle: {
                  color: 'rgba(255,255,255,.1	)',
                  width: 1,
                  type: 'solid',
                },
              },
              splitLine: {
                lineStyle: {
                  color: 'rgba(255,255,255,.1)',
                },
              },
            },
          ],
          series: [
            {
              type: 'bar',
              data: data.y,
              barWidth: '35%', //柱子宽度
              // barGap: 1, //柱子之间间距
              itemStyle: {
                borderRadius: 5,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: '#83bff6' },
                  { offset: 0.5, color: '#188df0' },
                  { offset: 1, color: '#1456FE' },
                ]),
              },
              emphasis: {
                itemStyle: {
                  borderRadius: 5,
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: '#1456FE' },
                    { offset: 0.7, color: '#2378f7' },
                    { offset: 1, color: '#83bff6' },
                  ]),
                },
              },
            },
          ],
        }
        mychart.setOption(option)
 
}
 
</script>

<style lang="scss" scoped></style>
