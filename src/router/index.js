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
      path: "*",
      redirect: "/red"
    },
    {
      path: "/red",
      name: "Red",
      component: Red
    },
    {
      path: "/green",
      name: "Green",
      component: Green
    },
    {
      path: "/yellow",
      name: "Yellow",
      component: Yellow
    }
  ]
});
