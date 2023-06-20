<template>
    <div>
        <ul>
            <!-- <li v-for="item in list" :key="item.id">{{item.name}}</li> -->
            <!-- <li v-for="(item,index) in list" :key="index">{{item}}</li> -->
            <li v-for="(item, index) in list.arr" :key="index">{{ item }}</li>
        </ul>
        <button @click="add">add</button>
        <div class="wan-test">
            test
            <div class="wan-test__inner">
                inner
                <div class="wan-test--success">
                    success
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, readonly } from "vue";
// type M = {
//     id: number,
//     name: String
// }
// const list = reactive<M[]>([{
//     id:1,
//     name: 'AA'
// },{
//     id: 2,
//     name: 'BB'
// }])

// let list = reactive<String[]>([])

// // 模仿接口
// function add(){
//     setTimeout(() => {
//         let res = ['AA','BB','CC']
//         // list = res 页面没有渲染
//         list.push(...res)
//         console.log('list',list);

//     })
// }


const list = reactive<{
    arr: String[]
}>({
    arr: []
})
// 模仿接口
function add() {
    setTimeout(() => {
        let res = ['AA', 'BB', 'CC']
        list.arr = res
    })
}
</script>

<style lang="scss" scoped>
@include b(test) {
    color: greenyellow;

    @include e(inner) {
        color: red;
    }

    @include m(success) {
        background-color: green;
    }
}
</style>
