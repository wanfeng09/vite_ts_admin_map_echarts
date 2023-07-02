<template>
    <div class="wan-scroll">
        <el-menu background-color="#324157" text-color="#bfcbd9" active-text-color="#20a0ff" :default-active="defaultActive"
            class="el-menu-vertical-demo" :collapse="isCollapse" router>
            <template v-for="(item, index) in getRouter" :key="index">
                <el-sub-menu :index="item.name" v-if="item.children && item.children.length > 1">
                    <template #title>
                        <el-icon>
                            <component :is="item?.meta?.icon ?? 'WarnTriangleFilled'"></component>
                        </el-icon>
                        <span>{{ item.meta?.title }}</span>
                    </template>
                    <template v-for="(x, y) in item.children" :key="y">
                        <el-menu-item :index="x.path">{{ x.meta?.title }}</el-menu-item>
                    </template>
                </el-sub-menu>
                <el-menu-item :index="item.children && item.children[0].path" v-else>
                    <el-icon>
                        <component :is="item?.meta?.icon ?? 'WarnTriangleFilled'"></component>
                    </el-icon>
                    <template #title>{{ item.children && item.children[0]?.meta?.title }}</template>
                </el-menu-item>
            </template>
        </el-menu>
    </div>
</template>


<script setup lang="ts">
import { computed } from 'vue';
import { useRouter } from 'vue-router';

defineProps<{
    isCollapse: boolean
}>()

const router = useRouter()
const defaultActive = router.currentRoute.value.fullPath

const getRouter = computed(() => {
    // 获取路由数组
    const newarr = router.options.routes.filter((current, index, arr) => {
        if (current.meta) {
            if (current.meta.role) {
                return current.meta.role === 'admin'
            } else {
                return current
            }
        }
    })

    // 排序
    newarr.sort((a: any, b: any) => {
        if (a.children) {
            a.children.sort((a: any, b: any) => {
                return a.meta.order - b.meta.order
            })
        }
        return a.meta.order - b.meta.order
    })

    return newarr
})


</script>

<style lang="scss" scoped>
.el-menu {
    border: none;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
}

@include b(scroll) {
    height: 100%;
    overflow: hidden auto;

    ul {
        height: 100%;
    }

    &::-webkit-scrollbar {
        width: 0;
    }
}
</style>
