<template>
    <div v-if="modelValue" class="wan-border" :class="{'wan-bg': active}">
            <div>子组件的值== {{ inputValue }}</div>
            <input type="text" @input="inputChange" :value="inputValue">
        </div>
</template>
<script setup lang="ts">
import { computed } from 'vue';

// vue2 value vue3  modelValue
const props = defineProps<{
    modelValue: boolean,
    inputValue: string,
    inputValueModifiers?:{ // 自定义修饰符
        bgChange: boolean
    }
}>()

const active = computed(() => {
    return props?.inputValueModifiers?.bgChange
})
const emit = defineEmits(['update:inputValue'])

const inputChange = (e: Event) => {
    const target = e.target as HTMLInputElement
    emit('update:inputValue', target.value)
}
</script>

<style lang="scss" scoped>
@include b(border) {
    border: 1px solid #333;
    min-height: 100px;
    width: 500px;
    margin-top: 20px;
    padding: 20px;
}

@include b(bg){
    background-color: aqua;
}
</style>