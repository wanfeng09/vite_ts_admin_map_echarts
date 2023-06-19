import Layout from '@/layout/index.vue'
export default {
    path: '/study',
    name: 'Study',
    component: Layout,
    meta: { title: '基础学习'},
    children: [{
        path: '/ref',
        name: 'Ref',
        component: () => import('@/views/RefStudy/RefStudy.vue'),
        meta: { title: 'ref系列'}
    },{
        path: '/reactive',
        name: 'Reactive',
        component: () => import('@/views/ReactiveStudy/ReactiveStudy.vue'),
        meta: { title: 'Reactive系列'}
    },{
        path: '/computerWatch',
        name: 'ComputerWatch',
        component: () => import('@/views/ComputerWatch/ComputerWatch.vue'),
        meta: { title: 'Computer/Watch'}
    },{
        path: '/usePinia',
        name: 'UsePinia',
        component: () => import('@/views/UsePinia/UsePinia.vue'),
        meta: { title: 'Pinia'}
    }]
}