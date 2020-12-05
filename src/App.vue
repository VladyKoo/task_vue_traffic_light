<template>
  <div id="app">
    <h1>Traffic light</h1>
    <div class="container">
      <router-view />
      <!-- <Red />
      <Yellow />
      <Green /> -->
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
p {
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
