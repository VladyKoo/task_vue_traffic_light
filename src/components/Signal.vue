<template>
  <div>
    <div
      :style="[background_color]"
      :class="[{ signal: true }, { blink: isBlink }]"
    >
      <h1 class="timer" :style="[color]" v-if="name === 'yellow'">
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
    isBlink() {
      return this.$route.name === this.name &&
        this.$store.getters.timer <= constant.BLINK_TIME
        ? true
        : false;
    },
    background_color() {
      const opacity = this.$route.name === this.name ? 1 : 0.2;
      const color = constant.COLOR[this.name];

      return { "background-color": `rgba(${color},${opacity})` };
    },
    color() {
      const color =
        this.$route.name === this.name
          ? "0,0,0"
          : constant.COLOR[this.$route.name];
      return { color: `rgb(${color})` };
    },
    getTimer() {
      return this.$store.getters.timer;
    }
  },
  created() {}
};
</script>

<style scoped>
.signal {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  border-radius: 50%;
}
.timer {
  font-size: 10rem;
  font-family: "Courier New", Courier, monospace;
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
    opacity: 0;
  }
}
</style>
