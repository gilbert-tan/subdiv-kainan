import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import viewerPortalRoutes from "@/router/viewer-portal";
import adminPortalRoutes from "@/router/admin-portal";

const routes: Array<RouteRecordRaw> = [
  ...viewerPortalRoutes,
  ...adminPortalRoutes,
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
