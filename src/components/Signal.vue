<template>
  <div>
    <div class="signal" :class="{ blink: doBlink }" :style="background_color">
      <h1 class="timer" :style="color" v-if="name === 'yellow'">
        {{ getTimer }}
      </h1>
    </div>
  </div>
</template>

<script>
import constant from "../const";

export default {
  name: "signal",
  props: {
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    doBlink() {
      return this.$route.name === this.name &&
        this.$store.getters.timer <= constant.BLINK_TIME
        ? true
        : false;
    },
    background_color() {
      const color = constant.COLOR[this.name];
      const opacity = this.$route.name === this.name ? 1 : 0.12;
      return { "background-color": `rgba(${color},${opacity})` };
    },
    color() {
      if (this.$route.name !== "yellow") {
        return { color: `rgb(${constant.COLOR[this.$route.name]})` };
      }
    },
    getTimer() {
      localStorage.state = JSON.stringify(this.$store.getters.state);
      return this.$store.getters.timer;
    }
  }
};
</script>

<style scoped>
.signal {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  width: 150px;
  height: 150px;
  border-radius: 50%;
}
.timer {
  font-size: 5rem;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  color: black;
  text-decoration: none;
}
.blink {
  animation-name: blinker;
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(1, 0, 0, 1);
  animation-duration: 1s;
}
@keyframes blinker {
  from {
    opacity: 1;
  }
  to {
    opacity: 0.3;
  }
}
</style>
