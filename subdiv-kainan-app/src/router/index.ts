import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import SubdivKainanLayout from "@/layouts/SubdivKainanLayout.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "",
    name: "home",
    component: SubdivKainanLayout,
    children: [
      {
        path: "/",
        component: Home,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
