import { createApp, toRaw } from "vue";
import App from "./App.vue";
// 引入路由
import router from  './router';
// 引入pinia
import { createPinia, PiniaPluginContext } from "pinia";
// 引入ElementPlus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

type Options = {
  key?: string;
};

// 默认值
const __piniaKey__: string = "CC";

// 设置存储
const setStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

// 获取存储
const getStorage = (key: string) => {
  let value = localStorage.getItem(key);
  return value ? JSON.parse(value as string) : {};
};

const PiniaPlugin = (options: Options) => {
  return (context: PiniaPluginContext) => {
    const { store } = context;
    const data = getStorage(`${options?.key ?? __piniaKey__}-${store.$id}`);
    // console.log("data", data);
    store.$subscribe(() => {
      // 值变化触发
      setStorage( `${options?.key ?? __piniaKey__}-${store.$id}`, toRaw(store.$state) )
    });
    return { ...data }
  };
};

// 解决刷新数据丢失问题
const store = createPinia();
store.use(
  PiniaPlugin({
    key: "pinia",
  })
); // 使用插件

const app = createApp(App)
app.use(router)
app.use(store)
app.use(ElementPlus)

// 注册elementplus图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.mount("#app");
