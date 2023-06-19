<template>
    <div>
        <div> <input v-model="firstName"> </div>
        <div><input v-model="lastName"></div>
        <div>{{ name }}</div>
        <div>
            <button @click="changeName">change name</button>
        </div>
        watch: <input v-model="watchName.name">
        <div>
            <button @click="stopWatch">停止监听</button>
        </div>
        <hr>
        <table border width="600px" cellpadding="0" cellspacing="0">
            <thead>
                <tr>
                    <th> 姓名 </th>
                    <th> 性别 </th>
                    <th> 职位 </th>
                    <th> 操作 </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in tableData" :key="item.id">
                    <td>{{item.name}}</td>
                    <td>{{item.sex}}</td>
                    <td>{{item.work}}</td>
                    <td><button>删除</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, reactive, watch, watchEffect } from 'vue';

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


let watchName = reactive({
   name: '纳兹'
})

const stop = watchEffect((oninvalidate) => {
    console.log(watchName.name);
    oninvalidate(() => {
        console.log('before');
        // 可以在监听之前做些操作，清除一些副作用
    })
})

function stopWatch(){
    stop()
}

type M = {
    id: number,
    sex: string,
    name: string,
    work: string
}
const tableData = reactive<M[]>([{
    id: 1,
    name: '纳兹',
    sex: '男',
    work: '火之灭龙魔法'
},{
    id: 2,
    name: '露西',
    sex: '女',
    work: '星灵魔导师'
},{
    id: 3,
    name: '哈比',
    sex: '男',
    work: '翼之魔导士'
},{
    id: 4,
    name: '艾露莎',
    sex: '女',
    work: '铠甲之换装魔导士'
},{
    id: 5,
    name: '格雷',
    sex: '男',
    work: '冰/灭恶魔导师'
}])
</script>

<style></style>