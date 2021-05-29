import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)


import Dashboard from "../components/dashboard.vue"
const routes = [
  {
    component: Dashboard,
    path: '/home',
    name: 'dashboard',
  },
  {
    component: () => import("../components/attendancepro"),
    path: '/attendancepro',
    name: 'attendancepro',
  },
  {
    component: () => import("../components/dashboard"),
    path: '/dashboard',
    name: 'dashboard',
  },
  {
    component: () => import("../components/profile"),
    path: '/profile',
    name: 'profile',
  },
  {
    component: () => import("../components/realtimev"),
    path: '/realtimev',
    name: 'realtimev',
  },
  {
    component: () => import("../components/report"),
    path: '/report',
    name: 'report',
  },
  {
    component: () => import("../components/timelogs"),
    path: '/timelogs',
    name: 'timelogs',
  },
  {
    component: () => import("../components/timesheet"),
    path: '/timesheet',
    name: 'timesheet',
  },
  {
    component: () => import("../components/usermanage"),
    path: '/usermanage',
    name: 'usermanage',
  },
 
];

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0, behavior: 'smooth', }
    }
  }
});

export default router;