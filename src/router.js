import { createRouter, createWebHistory } from 'vue-router';
import Home from "./Home.vue";
const routes = [
  { path: '/', component: Home },
  { path: '/imagenes', component: Imagenes },
  { path: '/zona', component: Zona },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
  })

export default router;