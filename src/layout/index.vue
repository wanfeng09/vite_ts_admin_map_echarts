<template>
    <div class="contain">
        <el-container>
            <el-header>
                <!-- 折叠按钮 -->
                <div class="collapse-btn" @click="() => isCollapse = !isCollapse">
                    <el-icon v-if="isCollapse">
                        <Expand />
                    </el-icon>
                    <el-icon v-else>
                        <Fold />
                    </el-icon>
                    <span style="padding-left: 10px;">后台管理系统</span>
                </div>
                <div class="logo"></div>
                <div>
                    <el-dropdown>
                        <el-button type="primary">
                            {{ useActionNameStore().name }}<el-icon class="el-icon--right"><arrow-down /></el-icon>
                        </el-button>

                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item @click="logout">退出登录</el-dropdown-item>

                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                </div>
            </el-header>
            <el-container>
                <sidebar :isCollapse="isCollapse" />
                <el-main>
                    <RouterView />
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useActionNameStore } from '@/store/index';
import sidebar from './sidebar.vue'
const router = useRouter()
const isCollapse = ref(false)
function logout() {
    useActionNameStore().setUser('')
    router.push('/login')
}
</script>

<style scoped>
.contain{
    width: 100%;
    height: 100%;
}
.el-container{
    height: 100%;
}
.el-header {
    background-color: #242f42;
    color: #fff;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.el-main {
    padding: 0;
}

.example-showcase .el-dropdown-link {
    cursor: pointer;
    color: var(--el-color-primary);
    display: flex;
    align-items: center;
}

.collapse-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    float: left;
    cursor: pointer;
}
</style>