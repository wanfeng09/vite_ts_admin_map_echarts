import { createRouter,createWebHashHistory,RouteRecordRaw } from 'vue-router'

import Layout from '@/layout/index.vue'
import baseStudy from '@/router/module/baseStudy.ts'
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: Layout,
        redirect: '/home',
        children: [{
            path: '/home',
            name: 'Home',
            component: () => import('@/views/home/index.vue'),
            meta: { title: '首页'},
        }]
    },
    baseStudy,
    {
        path: '/drag',
        component: Layout,
        children: [{
            path: '/drag',
            name: 'Drag',
            component: import('@/views/VisualDrag/VisualDrag.vue'),
            meta: { title: '拖拽'},
        }]
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})


export default router