<template>
  <div class="screen" :style="{ opacity: changeOpacity }"></div>
</template>

<script>
export default {
  name: "Red",
  data() {
    return {
      opacity: 0,
      timer: 0
    };
  },
  computed: {
    changeOpacity() {
      console.log("-----------change opacity");
      return this.opacity;
    }
  },
  methods: {},
  mounted() {
    this.timer = setInterval(() => {
      console.log("timeout");
      this.opacity += 0.1;
      if (this.opacity >= 1) {
        clearInterval(this.timer);
      }
    }, 1000);
  }
};
</script>

<style scoped>
.screen {
  width: 200px;
  height: 200px;
  background-color: red;
  opacity: 0.2;
}
</style>
