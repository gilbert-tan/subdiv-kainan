import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Info from "@/views/Info.vue";
import SubdivKainanLayout from "@/layouts/SubdivKainanLayout.vue";
import Subdivisions from "@/views/Subdivisions.vue";
import LatestKainan from "@/views/LatestKainan.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: SubdivKainanLayout,
    children: [
      {
        path: "",
        name: "info",
        component: Info,
      },
      {
        path: "/subdivisions",
        name: "subdivisions",
        component: Subdivisions,
      },
      {
        path: "/latest-kainan",
        name: "latest-kainan",
        component: LatestKainan,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
