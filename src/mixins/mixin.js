import constant from "../const";

export default {
  data() {
    return {
      constant
    };
  },
  created() {
    const options = {
      activRoute: this.$route.name,
      router: this.$router
    };
    const activRoute = this.$route.name;
    // this.$store.commit("setPreviousRoute", activRoute);
    this.$store.commit("setTimer", constant.PERIODS[activRoute]);

    const timerId = setInterval(() => {
      if (1) {
      }

      this.$store.dispatch("updateTimer", options);
    }, constant.DELAY);

    this.$store.commit("setTimerId", timerId);

    console.log("---------created");
  },

  beforeDestroy() {
    clearInterval(this.$store.getters.timerId);
    console.log("---------destroyed");
  }
};
