import constant from "../const";

export default {
  data() {
    return {
      constant
    };
  },
  created() {
    if (this.$store.getters.isAfterUpdate) {
      this.$store.commit("isAfterUpdate", false);
      console.log("---------- mixin isAfterUpdate false");
    } else {
      this.$store.commit("setTimer", constant.PERIODS[this.$route.name]);
    }

    // this.$store.getters.isAfterUpdate
    //   ? this.$store.commit("isAfterUpdate", false)
    //   : this.$store.commit("setTimer", constant.PERIODS[this.$route.name]);

    const timerId = setInterval(() => {
      // localStorage.state = JSON.stringify(this.$store.getters.state);

      if (this.$store.getters.timer <= 0) {
        this.$store.commit("setTimer", constant.PERIODS[this.$route.name]);
        if (this.$route.name === "red" || this.$route.name === "green") {
          this.$router.push("/yellow");
        } else if (this.$store.getters.previousRoute === "green") {
          this.$router.push("/red");
        } else if (this.$store.getters.previousRoute === "red") {
          this.$router.push("/green");
        }
      }

      this.$store.commit("decrementTimer");
    }, constant.DELAY);
    this.$store.commit("setTimerId", timerId);
  },

  beforeDestroy() {
    clearInterval(this.$store.getters.timerId);
  }
};
