import Vue from "vue";
import Vuex from "vuex";
import constant from "../const";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    timer: 0,
    timerId: 0,
    previousRoute: "red",
    isAfterUpdate: true
  },
  getters: {
    state: s => s,
    timer: s => s.timer,
    timerId: s => s.timerId,
    previousRoute: s => s.previousRoute,
    isAfterUpdate: s => s.isAfterUpdate
  },
  mutations: {
    setState(state, payload) {
      state = payload;
    },
    setTimer(state, payload) {
      state.timer = payload;
    },
    decrementTimer(state) {
      state.timer--;
    },
    setTimerId(state, payload) {
      state.timerId = payload;
    },
    setPreviousRoute(state, payload) {
      state.previousRoute = payload;
    },
    isAfterUpdate(state, payload) {
      console.log("----------store isAfterUpdate");

      state.isAfterUpdate = payload;
    }
  }
});
