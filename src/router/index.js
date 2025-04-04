import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/2',
        name: 'home',
        component: () => import("../views/HomeView.vue"),
    },
    {
        path: '/',
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