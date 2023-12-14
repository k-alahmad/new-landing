import { lazy } from "react";
import { Navigate } from "react-router-dom";
import Home from "../pages/home";

export const publicRoutes = [
  { path: "/", element: Home },
  {
    path: "/privacy-policy",
    element: lazy(() => import("../pages/privacy/index.jsx")),
  },
  {
    path: "/404",
    element: lazy(() => import("../components/UI/404NotFound/index.jsx")),
  },
  {
    path: "*",
    element: Navigate,
  },
];

export const protectedRoutes = [];
