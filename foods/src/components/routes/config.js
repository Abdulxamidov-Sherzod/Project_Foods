import FoodDetail from "../food-detail";
import Foods from "../foods";
import Login from "../forms/login";
import Register from "../forms/register";

export const routes = [
  {
    path: "/foods",
    component: Foods,
    exact: true,
  },
  {
    path: "/foods/:foodId",
    component: FoodDetail,
    exact: true,
  },
  {
    path: "/login",
    component: Login,
    exact: true,
  },
  {
    path: "/register",
    component: Register,
    exact: true,
  },
  {
    from: "/",
    redirect: "/foods",
    exact: true,
  },
  {
    redirect: "/not-found",
    exact: false,
  },
];
