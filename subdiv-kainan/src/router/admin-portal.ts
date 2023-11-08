import { RouteRecordRaw } from "vue-router";
import SubdivKainanAdminLayout from "@/layouts/admin-portal/SubdivKainanAdminLayout.vue";
import Dashboard from "@/views/admin-portal/dashboard/Dashboard.vue";
import ManageSubdivisions from "@/views/admin-portal/subdivision/ManageSubdivisions.vue";
import ManageLatestKainan from "@/views/admin-portal/latest-kainan/ManageLatestKainan.vue";

const adminPortalRoutes: Array<RouteRecordRaw> = [
  {
    path: "/admin",
    component: SubdivKainanAdminLayout,
    children: [
      {
        path: "",
        name: "dashboard",
        component: Dashboard,
      },
      {
        path: "subdivisions",
        name: "manage-subdivisions",
        component: ManageSubdivisions,
      },
      {
        path: "latest-kainan",
        name: "manage-latest-kainan",
        component: ManageLatestKainan,
      },
    ],
  },
];

export default adminPortalRoutes;
