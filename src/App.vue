<template>
  <div id="app">
    <h1>Traffic light</h1>
    <div class="container">
      <router-view />
    </div>
    <div class="tube"></div>
  </div>
</template>

<script>
import Green from "./pages/Green.vue";
import Red from "./pages/Red.vue";
import Yellow from "./pages/Yellow.vue";

export default {
  name: "app",
  components: {
    Red,
    Green,
    Yellow
  },
  watch: {
    $route(to, from) {
      this.$store.commit("setPreviousRoute", from.name);
    }
  },
  created() {
    if (localStorage.state) {
      const storageState = JSON.parse(localStorage.state);
      if (
        this.$route.name !== "yellow" &&
        storageState.previousRoute !== "yellow"
      ) {
        this.$store.commit("setPreviousRoute", storageState.previousRoute);
      }
      this.$store.commit("setTimer", storageState.timer);
      this.$store.commit("isAfterUpdate", true);
    } else {
      this.$store.commit("isAfterUpdate", false);
    }
  },
  beforeUpdate() {
    clearInterval(this.$store.getters.timerId);
  }
};
</script>

<style>
body,
h1,
h2,
p,
a {
  text-decoration: none;
  margin: 0;
}

#app {
  font-family: Georgia, serif;
  font-size: 16px;
  text-align: center;
  margin-top: 60px;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  padding: 20px;
  width: 400px;
  background-color: #000;
  border-radius: 50px;
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.5);
}
.tube {
  margin: 0 auto;
  width: 100px;
  height: 300px;
  background-color: #000;
}
</style>
