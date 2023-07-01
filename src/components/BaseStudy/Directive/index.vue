<template>
    <div class="wan-contain">
        <el-switch v-model="isShow" />
        <div>父组件的值== {{ textInit }}</div>
        <ChildrenTest v-model="isShow" v-model:inputValue.bgChange="textInit" v-bigFont:font.size="{ fontSize: '30px' }" />

        <div style="margin-top: 10px;">
            <el-button type="primary" v-Has-Show="'permission-add'">add</el-button>
            <el-button type="success" v-Has-Show="'permission-edit'">edit</el-button>
            <el-button type="info" v-Has-Show="'permission-del'">del</el-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import ChildrenTest from './ChildrenTest.vue';
import { ref, Directive, DirectiveBinding } from 'vue';
const isShow = ref<boolean>(true)
const textInit = ref<string>('test')
const vBigFont: Directive = {
    created() { },
    beforeMount() { },
    // mounted(...args: Array<any>){
    //     console.log(args);
    // },
    mounted(el: HTMLElement, binding: DirectiveBinding, vnode, prevVnode) {
        // console.log(binding.value.fontSize);
        el.style.fontSize = binding.value.fontSize
    },
    beforeUpdate() { },
    updated() { },
    beforeUnmount() { },
    unmounted() { },
}

// ------------权限控制-----------------------

localStorage.setItem('userid', 'wan')
const permission = [
    'wan:permission-add',
    // 'wan:permission-edit',
    'wan:permission-del'
]
const userid = localStorage.getItem('userid') as string
const vHasShow: Directive<HTMLElement, string> = (el, binding) => {
    if (!permission.includes(userid + ':' + binding.value)) {
        el.style.display = 'none'
    }
}


</script>

