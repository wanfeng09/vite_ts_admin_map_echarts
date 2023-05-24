# reactive使用
> ref 支持所有类型 reactive 引用类型 Array Object Map Set
reactive proxy 不能直接赋值，否则会破坏响应式对象[解决：1、push 解构 2、对象形式]

```html
<li v-for="(item,index) in list" :key="index">{{item}}</li>
```

```js
// reactive proxy 不能直接赋值，否则会破坏响应式对象
let list = reactive<String[]>([])

// 模仿接口
function add(){
    setTimeout(() => {
        let res = ['AA','BB','CC']
        // list = res 页面没有渲染 解决： push 解构
        list.push(...res)
        console.log('list',list);
    })
}
```

```html
<li v-for="(item,index) in list.arr" :key="index">{{item}}</li>
```

```js
// 对象形式，把数组当作一个属性解决
const list = reactive<{
    arr: String[]
}>({
    arr: []
})
// 模仿接口
function add(){
    setTimeout(() => {
        let res = ['AA','BB','CC']
        list.arr = res
    })
}
```