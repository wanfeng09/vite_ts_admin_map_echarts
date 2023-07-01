import Layout from '@/layout/index.vue'
export default {
    path: '/3d',
    name: 'D3',
    component: Layout,
    meta: { title: '3D', order: 4, role: 'admin', icon: 'Promotion' },
    children: [{
        path: '/map',
        name: 'Map',
        component: () => import('@/views/3d/map/Map.vue'),
        meta: { title: '地图3d', order: 2, role: 'admin' },
    }, {
        path: '/three',
        name: 'Three',
        component: () => import('@/views/3d/threejs/index.vue'),
        meta: { title: 'Three', order: 1, role: 'admin' }
    }]
}