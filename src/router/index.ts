import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { useLoginName } from '@/store/index'

import Layout from '@/layout/index.vue'

//  modules
import baseStudy from '@/router/module/baseStudy'
import D3 from '@/router/module/3d'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/login/index.vue'),
    },
    {
        path: '/',
        component: Layout,
        redirect: '/home',
        meta: { title: '首页', order: 1,icon: 'HomeFilled'},
        children: [{
            path: '/home',
            name: 'Home',
            component: () => import('@/views/home/index.vue'),
            meta: { title: '首页', order: 1 },
        }]
    },
    baseStudy,
    D3,
    {
        path: '/drag',
        component: Layout,
        meta: { title: '拖拽', order: 2, role: 'admin',icon: 'StarFilled' },
        children: [{
            path: '/drag',
            name: 'Drag',
            component: () => import('@/views/VisualDrag/VisualDrag.vue'),
            meta: { title: '拖拽', order: 1, role: 'admin' },
        }]
    },
    {
        path: '/charts',
        component: Layout,
        meta: { title: '图表', order: 8, role: 'admin',icon: 'Histogram'},
        children: [{
            path: '/charts',
            name: 'basecharts',
            component: () => import('@/views/echarts/index.vue'),
            meta: { title: '图表', order: 1, role: 'admin'  },
        }]
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    // 路由守卫判断
    const { username } = useLoginName()
    if (to.name !== "Login" && !username) {
        next({ name: "Login" });
        return;
    }
    //  document.title = `${to.meta.title} | vue-manage-system`;
    // const role = localStorage.getItem('ms_username');
    // const permiss = usePermissStore();
    // if (!role && to.path !== '/login') {
    //     next('/login');
    // } else if (to.meta.permiss && !permiss.key.includes(to.meta.permiss)) {
    //     // 如果没有权限，则进入403
    //     next('/403');
    // } else {
    //     next();
    // }
    next();
})


export default router