import type { RouteObject } from "react-router";
import HomeLayout from "../components/HomeLayout";

export const routes = [
  {
    path: "/",
    Component: HomeLayout,
    children: [],
  },
] as RouteObject[];
