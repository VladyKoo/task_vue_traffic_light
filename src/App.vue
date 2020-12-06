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
  watch: {
    $route(to, from) {
      this.$store.commit("setPreviousRoute", from.name);
    }
  },
  beforeMount() {
    if (localStorage.state) {
      let storageState = JSON.parse(localStorage.state);
      storageState.isAfterUpdate = true;
      console.log(storageState);
      this.$store.commit("setState", storageState);
      console.log("----------app created");
    } else {
      this.$store.commit("isAfterUpdate", false);
      console.log("----------app isAfterUpdate false");
    }

    // localStorage.state
    //   ? this.$store.commit("setState", JSON.parse(localStorage.state))
    //   : this.$store.commit("isAfterUpdate", false);
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
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px auto;
  padding: 20px;
  width: 400px;
  min-height: 800px;
  background-color: #000;
  border-radius: 50px;
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.5);
}
</style>
