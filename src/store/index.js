import Vue from "vue";
import Vuex from "vuex";
import constant from "../const";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    timer: 0,
    timerId: 0,
    previousRoute: ""
  },
  getters: {
    state: s => s,
    timer: s => s.timer,
    timerId: s => s.timerId,
    previousRoute: s => s.previousRoute
  },
  mutations: {
    setState(state, payload) {
      console.log("----------mutation setState");
      state = payload;
    },
    setPreviousRoute(state, payload) {
      state.previousRoute = payload;
    },
    setTimerId(state, payload) {
      console.log("----------mutation setTimerId");
      state.timerId = payload;
    },
    decrementTimer(state) {
      state.timer--;
    },
    setTimer(state, payload) {
      console.log("----------mutation setTimer");
      state.timer = payload;
    }
  },
  actions: {
    setState({ commit }, payload) {
      console.log("----------action setState");
      if (payload) {
        commit("setState", payload);
      }
    },
    updateTimer({ state, commit }, { router, activRoute }) {
      console.log("----------action updateTimer");

      if (state.timer <= 0) {
        commit("setTimer", constant.PERIODS[activRoute]);
        // router.push("/red");
      }
      localStorage.state = JSON.stringify(state);
      commit("decrementTimer");
    }
  }
});
