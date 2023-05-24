# ref使用

## 自定义类型
```js
import { ref } from 'vue'
type M = {
    name: string
}
const sex = ref<M>({name: 'female'})
```

##### ts自带的interface[类型比较复杂的时候]
```js
import { ref } from 'vue'
import type { Ref } from 'vue'
type M = {
    name: string
}
const sex:Ref<M> = ref({name: 'man'})
```

###### isRef() 判断类型是否为ref
```
ref 深层次 = shallowRef 浅层次响应 + triggerRef 强制更新视图
ref和shallowRef不能同时使用，ref会影响shallowRef，造成视图更新
```

#### 自定义Ref
track() 收集依赖 trigger() 触发依赖
```js
function MyCustomRef<T>(value: T) {
    return customRef((track, trigger) => {
        return {
            get() {
                track()
                return value
            },
            set(newVal) {
                value = newVal
                trigger()
            }
        }
    })
}
const customTest = MyCustomRef<string>('自定义测试')
```

##### 防抖
```js
function MyCustomRef<T>(value: T) {
    let timer: any
    return customRef((track, trigger) => {
        return {
            get() {
                track()
                return value
            },
            set(newVal) {
                clearTimeout(timer)
                timer = setTimeout(() => {
                    console.log('触发了')
                    value = newVal
                    timer = null
                    trigger()

                }, 500)

            }
        }
    })
}
```

###### 防抖测试
```js
function change() {
    customTest.value = '修改了'
}
```

### 定义dom元素ID
```html
<div ref="dom">1111</div>
<button ref="btn">获取dom元素id</button>

```

```js
const dom = ref<HTMLDivElement>()
const btn = ref<HTMLButtonElement>()

console.log(dom.value?.innerText); // 1111
console.log(btn.value?.innerText); // 获取dom元素id
```

#### toRef(对象，key)
只能修改响应式对象的值，非响应式的视图毫无变化
```html
{{sexname}} // 18
```

```js
const sex: Ref<M> = ref({ name: 'man',age: 18 })
const sexname = toRef(sex.value, 'age')
```

#### toRefs 结构取值---得到的值也是响应式的
```js
let {name, age} = toRefs(sex.value)
```

#### toRaw 获取原始数据，取消响应式
```js
toRaw(sex.value)
```