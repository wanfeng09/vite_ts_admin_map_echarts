<template>
    <div class="contain">
        <el-container>
            <el-header>
                <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
                    <el-radio-button :label="false">expand</el-radio-button>
                    <el-radio-button :label="true">collapse</el-radio-button>
                </el-radio-group>
                heaser
            </el-header>
            <el-container>
                <el-scrollbar>
                    <el-menu default-active="/home" class="el-menu-vertical-demo" :collapse="isCollapse" router>
                        <template v-for="(item, index) in router" :key="index">
                            <el-sub-menu :index="item.name" v-if="item.children && item.children.length > 1 ">
                                <template #title>
                                    <el-icon>
                                        <document />
                                    </el-icon>
                                    <span>{{ item.meta?.title }}</span>
                                </template>
                                <template v-for="(x, y) in item.children" :key="y">
                                    <el-menu-item :index="x.path" :router="{name: x.name}">{{ x.meta?.title }}</el-menu-item>
                                </template>
                            </el-sub-menu>
                            <el-menu-item :index="item.children ? item.children[0].path : index" v-else>
                                <el-icon>
                                    <icon-menu />
                                    <!-- <location /> -->
                                    <!-- <setting /> -->
                                </el-icon>
                                <template #title>{{ item.children ? item.children[0]?.meta?.title : '' }}</template>
                            </el-menu-item>
                        </template>
                    </el-menu>
                </el-scrollbar>
                <el-main>
                    <RouterView />
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
} from '@element-plus/icons-vue'

const isCollapse = ref(false)
const router = computed(() => {
    return useRouter().options.routes
})

</script>

<style scoped>
.el-header {
    background-color: #1e4949;
    color: #fff;
}

.el-aside {
    background-color: rgb(179 227 227);
}

.el-menu {
    min-height: calc(100vh - 60px);
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: calc(100vh - 60px);
}
</style>