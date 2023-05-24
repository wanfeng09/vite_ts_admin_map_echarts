<template>
    <div>
        {{ sex }}
        {{ person }}
        自定义测试--- {{ customTest }}
        <button @[event]="change">点击修改</button>
        <div ref="dom">获取div内容</div>
        <button ref="btn">获取dom元素id</button>
        <div>sexname:{{ sexname }}</div>
    </div>
</template>

<script setup lang="ts">
import { ref, isRef, toRef, toRefs, toRaw, shallowRef, customRef, triggerRef } from 'vue'
import type { Ref } from 'vue'
// const定义基本类型的值不能修改，引用类型可修改
const event = 'click'
// 自定义类型
type M = {
    name: string,
    age?: number
}
// const sex = ref<M>({name: 'female'})

const sex: Ref<M> = ref({ name: 'man',age: 18 })

const sexname = toRef(sex.value, 'age')
let {name, age} = toRefs(sex.value)
console.log(toRaw(sex.value));

const person = shallowRef({ name: 'xiaoming' })
function change() {
    // sex.value.name = 'female'
    person.value.name = 'xiaohong'
    triggerRef(person)
    // 自定义ref防抖测试
    customTest.value = '修改了'
    console.log(dom.value?.innerText);
    console.log(btn.value?.innerText);
    
    // 判断类型
    console.log(isRef(person))
}

// 自定义响应
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
const customTest = MyCustomRef<string>('自定义测试')

// 获取dom元素id
const dom = ref<HTMLDivElement>()
const btn = ref<HTMLButtonElement>()
</script>

<style lang="scss" scoped></style>