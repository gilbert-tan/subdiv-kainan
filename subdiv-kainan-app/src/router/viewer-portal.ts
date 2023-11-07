import { RouteRecordRaw } from "vue-router";
import SubdivKainanViewerLayout from "@/layouts/viewer-portal/SubdivKainanViewerLayout.vue";
import Info from "@/views/viewer-portal/Info.vue";
import Subdivisions from "@/views/viewer-portal/Subdivisions.vue";
import LatestKainan from "@/views/viewer-portal/LatestKainan.vue";

const viewerPortalRoutes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: SubdivKainanViewerLayout,
    children: [
      {
        path: "",
        name: "info",
        component: Info,
      },
      {
        path: "subdivisions",
        name: "subdivisions",
        component: Subdivisions,
      },
      {
        path: "latest-kainan",
        name: "latest-kainan",
        component: LatestKainan,
      },
    ],
  },
];

export default viewerPortalRoutes;
