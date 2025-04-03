import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import("../views/HomeView.vue"),
    },
    {
        path: '/2',
        name: 'home2',
        component: () => import("../views/HomeView2.vue"),
    },
    {
        path: '/projects',
        name: 'projects',
        component: () => import("../components/projects/ProjectList.vue"),
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router