import Layout from '@/layout/index.vue'
export default {
    path: '/study',
    name: 'Study',
    component: Layout,
    meta: { title: '基础学习', order: 3, role: 'admin',icon: 'ChatLineSquare'},
    children: [{
        path: '/ref',
        name: 'Ref', 
        component: () => import('@/components/BaseStudy/RefStudy/RefStudy.vue'),
        meta: { title: 'ref系列',order: 1, role: 'admin'}
    },{
        path: '/reactive',
        name: 'Reactive',
        component: () => import('@/components/BaseStudy/ReactiveStudy/ReactiveStudy.vue'),
        meta: { title: 'Reactive系列',order: 2, role: 'admin'}
    },{
        path: '/computerWatch',
        name: 'ComputerWatch',
        component: () => import('@/components/BaseStudy/ComputerWatch/ComputerWatch.vue'),
        meta: { title: 'Computer/Watch',order: 4, role: 'admin'}
    },{
        path: '/usePinia',
        name: 'UsePinia',
        component: () => import('@/components/BaseStudy/UsePinia/UsePinia.vue'),
        meta: { title: 'Pinia',order: 5, role: 'admin'}
    },{
        path: '/directive',
        name: 'Directive',
        component: () => import('@/components/BaseStudy/Directive/index.vue'),
        meta: { title: 'Directive-props',order: 3, role: 'admin'}
    },{
        path: '/charts',
        name: 'basecharts',
        component: () => import('@/views/echarts/index.vue'),
        meta: { title: '图表',order: 6, role: 'admin'}
    }]
}