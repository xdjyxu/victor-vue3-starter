import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const constantRoute: RouteRecordRaw[] = []
export const router = createRouter({
    routes: constantRoute,
    history: createWebHashHistory()
})