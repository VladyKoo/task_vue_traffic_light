import Vue from "vue";
import Router from "vue-router";
import Red from "../components/Red";
import Green from "../components/Green";
import Yellow from "../components/Yellow";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/"
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
