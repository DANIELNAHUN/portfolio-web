import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import("../views/HomeView.vue"),
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