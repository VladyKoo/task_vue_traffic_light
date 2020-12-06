import constant from "../const";

export default {
  data() {
    return {
      constant
    };
  },
  created() {
    this.$store.getters.isAfterUpdate
      ? this.$store.commit("isAfterUpdate", false)
      : this.$store.commit("setTimer", this.constant.PERIODS[this.$route.name]);

    const timerId = setInterval(() => {
      if (this.$store.getters.timer <= 0) {
        this.$store.commit("setTimer", this.constant.PERIODS[this.$route.name]);
        if (this.$route.name === "red" || this.$route.name === "green") {
          this.$router.push("/yellow");
        } else if (this.$store.getters.previousRoute === "green") {
          this.$router.push("/red");
        } else if (this.$store.getters.previousRoute === "red") {
          this.$router.push("/green");
        }
      }
      this.$store.commit("decrementTimer");
    }, this.constant.DELAY);
    this.$store.commit("setTimerId", timerId);
  }
};
