import { lazy } from "react";

export default [
  {
    path: "/contacts",
    label: "Contacts",
    exact: true,
    privat: true,
    restricted: false,
    component: lazy(() => import("./pages/ContactsContainer")),
  },
  {
    path: "/register",
    label: "Register",
    exact: true,
    privat: false,
    restricted: true,
    component: lazy(() => import("./pages/RegisterPage")),
  },
  {
    path: "/login",
    label: "Login",
    exact: true,
    privat: false,
    restricted: true,
    component: lazy(() => import("./pages/LoginPage")),
  },
];