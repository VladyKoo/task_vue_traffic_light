<template>
  <div id="app">
    <h1>Traffic light</h1>
    <div class="container">
      <router-view />
    </div>
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
  beforeCreate() {
    console.log("----------app created");
    this.$store.dispatch("setState", JSON.parse(localStorage.state));
  }
};
</script>

<style>
*::before,
*::after {
  box-sizing: border-box;
}

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
  margin: 20px auto;
  padding: 20px;
  width: 1000px;
  min-height: 800px;
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
