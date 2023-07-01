<template>
    <div>
        pinia: {{useTest.name}} <br />
        count: {{useTest.current}}
        action： {{useActionName.user}}--{{useActionName.name}}
        <button @click="change">修改pinia值</button>
    </div>
</template>

<script setup lang="ts">
import { useNameStore,useActionNameStore } from '@/store/index'
import { storeToRefs } from 'pinia'
const useTest = useNameStore()
const useActionName = useActionNameStore()
// 值修改
// 1 useTest.current++
// 2 const change = () => { useTest.$patch({current: 999,name: 'BB'})}
// 3 const change = () => { useTest.$patch((state) => { state.current = 888,state.name = 'VV'})}
// 4 const change = () => { useTest.$state = { current : 666,  name : '缺点---必须全部修改' }}
// 5 const change = () => { useTest.setCurrent(668) // 传参 }

    
// const {current,name} = useTest
// const {current,name} = storeToRefs(useTest)
// const change = () => { 
//     console.log(current,name);
// }

const change = () => { 
    // useActionName.setUser()
    useActionName.setAsyncUser()
}

</script>

<style scoped>

</style>