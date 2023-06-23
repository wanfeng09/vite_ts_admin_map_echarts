import Layout from '@/layout/index.vue'
export default {
    path: '/3d',
    name: 'D3',
    component: Layout,
    meta: { title: '3D'},
    children: [{
        path: '/map',
            name: 'Map',
            component: () => import('@/views/3d/map/Map.vue'),
            meta: { title: '地图3d'},
    },{
        path: '/three',
        name: 'Three',
        component: () => import('@/views/3d/threejs/index.vue'),
        meta: { title: 'Three'}
    }]
}