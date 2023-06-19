### computer,watch,watchEffect

###### computer
> 有缓存，初始化执行，需要return

```html
        <div> <input v-model="firstName"> </div>
        <div><input v-model="lastName"></div>
        <div>{{ name }}</div>
        <div>
            <button @click="changeName">change name</button>
        </div>
```

```js
import { ref, computed } from 'vue';

const firstName = ref<string>('张')
const lastName = ref<string>('三')
// 选项式写法 get/set
const name = computed({
    get() {
        return firstName.value + lastName.value
    },
    set(newVal) {
        // 可以改变name值
        [firstName.value, lastName.value] = newVal.split('')
    }
})
function changeName() {
    name.value = '小满'  // 函数式写法会报错，点击显示只读属性
}
// 函数式写法 只支持getter,不支持setter
// const name = computed(() => {
//     return firstName.value + lastName.value
// })
```

###### watch   【deep 深度监听 ; immediate 初始化开启监听; flush 监听执行顺序】

```html
 watch: <input v-model="watchName">

 watch1: <input v-model="watchName1">
 watch2: <input v-model="watchName2">

 
```

```js
let watchName = ref<string>('123')
// 监听多个
let watchName1 = ref<string>('123')
let watchName2 = ref<string>('123')
// 可以获取该属性的新/旧值
watch(watchName,(newVal,oldVal) => {
    console.log(newVal,oldVal);
})

// 可以获取该属性的新/旧值
watch([watchName1,watchName2],(newVal,oldVal) => {
    console.log(newVal,oldVal);
})

```

> 监听引用类型
ref 需要开启深度监听 reactive 不需要【源码隐形开启了】


```html
    watch: <input v-model="watchName.name">
```

```js
let watchName = reactive({
    name: '123'
})
// 新值 跟 旧值 相同
watch(() => watchName.name,(newVal,oldVal) => {
    console.log(newVal,oldVal);
})
```

###### watchEffect 调用谁就监听谁 [flush,onTrigger]

```js
let watchName = reactive({
   name: '纳兹'
})

watchEffect((oninvalidate) => {
    console.log(watchName.name);
    oninvalidate(() => {
        console.log('before');
        // 可以在监听之前做些操作，清除一些副作用
    })
})

```


```js
// 停止监听
```

