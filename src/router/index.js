import Vue from "vue";
import Router from "vue-router";
import Red from "../pages/Red";
import Green from "../pages/Green";
import Yellow from "../pages/Yellow";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "",
      redirect: "/red"
    },
    {
      path: "/red",
      name: "red",
      component: Red
    },
    {
      path: "/green",
      name: "green",
      component: Green
    },
    {
      path: "/yellow",
      name: "yellow",
      component: Yellow
    }
  ]
});
