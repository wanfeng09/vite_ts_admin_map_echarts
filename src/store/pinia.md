# Pinia 即 vux5
> 完整的ts支持
足够轻量，压缩后的体积只有1kb左右
去除mutations，只有state，action（支持同步和异步），getters
代码扁平化没有模块嵌套，只有store概念，store之间可以自由使用，每一个store都是独立的
无需手动添加store，store一旦创建便会自动添加
支持vue2/vue3
pinia 解构不具有响应式[解决：storeToRefs]

# 安装
> 官网 vue.js
npm install pinia

```js
import { useNameStore } from '../../store/index'
const useTest = useNameStore()
// 值修改
// 1 useTest.current++
// 2 const change = () => { useTest.$patch({current: 999,name: 'BB'})}
// 3 const change = () => { useTest.$patch((state) => { state.current = 888,state.name = 'VV'})}
// 4 const change = () => { useTest.$state = { current : 666,  name : '缺点---必须全部修改' }}
// 5 const change = () => { useTest.setCurrent(668) // 传参 }
```

```js
// pinia 解构不具有响应式
import { useNameStore } from '../../store/index'
import { storeToRefs } from 'pinia'
const useTest = useNameStore()
// const {current,name} = useTest
// const change = () => { console.log(current,name); } // 1 'AA'
const {current,name} = storeToRefs(useTest)

const change = () => { 
    console.log(current,name);  // ObjectRefImpl
}
```