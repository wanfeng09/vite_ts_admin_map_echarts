import { createRouter,createWebHashHistory,RouteRecordRaw } from 'vue-router'
import { useActionNameStore } from '@/store/index'
import { storeToRefs } from 'pinia'


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
        children: [{
            path: '/home',
            name: 'Home',
            component: () => import('@/views/home/index.vue'),
            meta: { title: '首页'},
        }]
    },
    baseStudy,
    D3,
    {
        path: '/drag',
        component: Layout,
        children: [{
            path: '/drag',
            name: 'Drag',
            component: () => import('@/views/VisualDrag/VisualDrag.vue'),
            meta: { title: '拖拽'},
        }]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach((to,from,next) => {
     // 获取userToken，根据业务场景可由localStorage也可由cookie中获取
    //  const user = useActionNameStore.get("userinfo")
     // 路由守卫判断
     const {name} = useActionNameStore()
     if (to.name !== "Login" && !name) {
         next({ name: "Login" });
         return;
     }
     next();
})


export default router