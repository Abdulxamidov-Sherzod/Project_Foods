import FoodDetail from "../food-detail";
import Foods from "../foods";
import FoodForm from "../forms/food";
import Login from "../forms/login";
import Register from "../forms/register";
import NotFound from "../not-found";

export const routes = [
  {
    path: "/foods",
    component: Foods,
    exact: true,
  },
  {
    path: "/foods/:foodId",
    component: FoodForm,
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
    path: "/not-found",
    component: NotFound,
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
