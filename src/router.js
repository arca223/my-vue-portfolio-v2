import Home from "@/components/home/HomeContainer";
import Experience from "@/components/experiences/ExperienceContainer";
import Skill from "@/components/skills/SkillContainer";
import About from "@/components/about/AboutContainer";
import Contact from "@/components/contact/ContactContainer"
import {createRouter, createWebHistory} from "vue-router";

export const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/experiences', name: 'experiences', component: Experience },
    { path: '/skills', name: 'skills', component: Skill },
    { path: '/about', name: 'about', component: About },
    { path: '/contact', name: 'contact', component: Contact },
]

export const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
})