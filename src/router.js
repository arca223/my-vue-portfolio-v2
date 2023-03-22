import Home from "@/components/home/Home";
import ExperienceContainer from "@/components/experiences/ExperienceContainer";
import {createRouter, createWebHistory} from "vue-router";

export const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/experiences', name: 'experiences', component: ExperienceContainer },
    { path: '/skills', name: 'skills', component: Home },
    { path: '/about', name: 'about', component: Home },
    { path: '/contact', name: 'contact', component: Home },
]

export const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
})