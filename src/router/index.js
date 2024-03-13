import { createRouter, createWebHistory } from "vue-router";
import IndexPage from "../pages/IndexPage.vue";
import HelloWorld from '../components/HelloWorld.vue';

const routes = [
    {
        path: "/",
        component: IndexPage,
    },
    {
        path: "/:category",
        component: IndexPage,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;