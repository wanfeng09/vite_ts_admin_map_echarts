<template>
  <LayoutScreen :ifFull="ifFull">
    <template #header>
      <ToHeader>
        <div @click="ifFull = !ifFull">
          {{ ifFull ? "返回" : "全屏模式" }}
        </div>
      </ToHeader>
    </template>
    <template #left-top>
      <LineChart ref="LineChartRef" eheight="100%" />
    </template>
    <template #left-bottom>
      <BarChart ref="BarChartRef" eheight="100%" />
    </template>
    <template #center-top>
      <SphereAnimation lHeight="100%">
        <div class="select">
          <div
            v-for="(item, index) in optionsDate"
            :key="index"
            class="text"
            :class="{ 'select-active': item.isActive }"
            @click="activeDateClick(index)"
          >
            {{ item.name }}
          </div>
        </div>
        <DynamicBar ref="DynamicBarRef" eheight="100px" />
      </SphereAnimation>
    </template>
    <template #center-bottom>
      <BarLineChart ref="BarLineChartRef" eheight="100%" />
    </template>
    <template #right-top>
      <PieChart ref="PieChartRef" eheight="100%" />
    </template>
    <template #right-bottom>
        <LiquidFill ref="LiquidFilltRef" eheight="100%" />
        <!-- <el-carousel
          :autoplay="true"
          height="250px"
          indicator-position="outside"
        >
          <el-carousel-item v-for="item in pieList" :key="item">
           {{ item }}
          </el-carousel-item>
        </el-carousel> -->
    </template>
  </LayoutScreen>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive } from "vue";
import LayoutScreen from "./HEchatsData/index.vue"; // 布局组件
import ToHeader from "./HEchatsData/components/ToHeader.vue"; // 标题
import BarLineChart from "./HEchatsData/components/BarLineChart.vue"; // 柱状折线图
import BarChart from "./HEchatsData/components/BarChart.vue"; // 柱状图
import SphereAnimation from "./HEchatsData/components/SphereAnimation.vue"; // 球体动画
import DynamicBar from "./HEchatsData/components/DynamicBar.vue"; // 动态柱状图
import LineChart from "./HEchatsData/components/LineChart.vue"; // 折线图
import PieChart from "./HEchatsData/components/PieChart.vue"; // 饼图
import LiquidFill from './HEchatsData/components/LiquidFill.vue'
// 全屏控制
let ifFull = ref(false);
// 组件实例
let BarLineChartRef = ref(); // 柱状折线图
let BarChartRef = ref(); // 柱状图
let DynamicBarRef = ref(); // 动态柱状图
let LineChartRef = ref(); // 折线图
let PieChartRef = ref(); // 饼图
let LiquidFilltRef = ref(); // 水晶球

// echarts实例数据
let echartsData = ref([
  {
    ref: "BarLineChartRef",
    data: {
      x: [
        {
          name: "测试1",
          value: 10,
        },
        {
          name: "测试2",
          value: 5,
        },
        {
          name: "测试3",
          value: 20,
        },
        {
          name: "测试4",
          value: 30,
        },
      ],
      y: [
        {
          name: "测试1",
          value: 3,
        },
        {
          name: "测试2",
          value: 15,
        },
        {
          name: "测试3",
          value: 6,
        },
        {
          name: "测试4",
          value: 20,
        },
      ],
    },
  },
  {
    ref: "BarChartRef",
    data: {
      x: ["测试1", "测试2", "测试3"],
      y: [10, 20, 5],
    },
  },
  {
    ref: "DynamicBarRef",
    data: [],
  },
  {
    ref: "LineChartRef",
    data: {
      x: [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月",
      ],
      y: ["10", "2", "6", "6", "6", "0", "0", "0", "20", "16", "12", "6"],
    },
  },
  {
    ref: "PieChartRef",
    data: [
      {
        name: "测试1",
        value: 10,
      },
      {
        name: "测试2",
        value: 11,
      },
      {
        name: "测试3",
        value: 12,
      },
      {
        name: "测试4",
        value: 30,
      },
    ],
  },
  {
    ref: 'LiquidFilltRef',
    data: 0.3
  }
]);

// 选框
const optionsDate = reactive([
  {
    name: "周",
    isActive: true,
  },
  {
    name: "月",
    isActive: false,
  },
  {
    name: "年",
    isActive: false,
  },
]);

// 定义实例【不能使用代理】
let echartsInstance = [
  {
    ref: "BarLineChartRef",
    instance: null,
  },
  {
    ref: "BarChartRef",
    instance: null,
  },
  {
    ref: "DynamicBarRef",
    instance: null,
  },
  {
    ref: "LineChartRef",
    instance: null,
  },
  {
    ref: "PieChartRef",
    instance: null
  },
  {
    ref: 'LiquidFilltRef',
    instance: null
  }
];

// 饼图
let pieList = ref([
  ["测试1", "测试2", "测试3", "测试4", "测试5"],
  ["数据1", "数据2", "数据3"],
  ["测试1", "测试2", "测试3", "测试4", "测试5"],
  ["测试1", "测试2", "测试3"],
]);

onMounted(() => {
  mountEcharts();
  // 监听窗口变化
  window.addEventListener("resize", function () {
    echartsInstance.map((ele) => {
      if (ele.instance) {
        ele.instance.resize();
      }
    });
  });
});

// 挂载图表实例
function mountEcharts() {
  // 柱状折线图
  echartsInstance[0].instance = BarLineChartRef.value.epRef();
  BarLineChartRef.value.fetchData(
    echartsInstance[0].instance,
    echartsData.value[0].data
  );
  // 柱状图
  echartsInstance[1].instance = BarChartRef.value.epRef();
  BarChartRef.value.fetchData(
    echartsInstance[1].instance,
    echartsData.value[1].data
  );
  // 动态柱状图
  for (let i = 0; i < 2; ++i) {
    echartsData.value[2].data.push(Math.round(Math.random() * 200)); // 随机数
  }
  echartsInstance[2].instance = DynamicBarRef.value.epRef();
  DynamicBarRef.value.fetchData(
    echartsInstance[2].instance,
    echartsData.value[2].data
  );
  setInterval(function () {
      runtest()
  }, 3000);

  // 折线图
  echartsInstance[3].instance = LineChartRef.value.epRef();
  LineChartRef.value.fetchData(
    echartsInstance[3].instance,
    echartsData.value[3].data
  );

  // 饼图
  echartsInstance[4].instance = PieChartRef.value.epRef();
  PieChartRef.value.fetchData(
    echartsInstance[4].instance,
    echartsData.value[4].data
  );

  // 水晶球
  echartsInstance[5].instance = LiquidFilltRef.value.epRef();
  LiquidFilltRef.value.fetchData(
    echartsInstance[5].instance,
    echartsData.value[5].data
  );
}

function runtest() {
  for (var i = 0; i < echartsData.value[2].data.length; ++i) {
    if (Math.random() > 0.9) {
      echartsData.value[2].data[i] += Math.round(Math.random() * 2000);
    } else {
      echartsData.value[2].data[i] += Math.round(Math.random() * 200);
    }
  }
  if (echartsInstance[2].instance) {
    echartsInstance[2].instance.setOption({
      series: [
        {
          type: "bar",
          data: echartsData.value[2].data,
        },
      ],
    });
  }
}

function activeDateClick(i: number) {
  optionsDate.map((ele, index) => {
    ele.isActive = index === i;
  });
}
</script>

<style lang="scss" scoped>
@include b(flex) {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.select {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  .text {
    flex: none !important;
    padding: 10px 20px;
    margin-right: 20px;
    margin-bottom: 20px;
    font-size: 12px;
    color: #fff;
    background-image: url(../../assets/echarts_images/bnt.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }

  .text:last-child {
    margin-left: 0 !important;
  }

  &-active {
    background-image: url(../../assets/echarts_images/bntactive.png) !important;
  }
}
</style>
