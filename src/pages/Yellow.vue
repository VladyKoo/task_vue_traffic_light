<template>
  <div>
    <router-link
      v-for="(name, idx) of constant.SIGNAL_NAMES"
      :key="idx"
      :to="`/${name}`"
      ><Signal :name="name"
    /></router-link>
  </div>
</template>

<script>
import Signal from "../components/Signal";
import mixin from "../mixins/mixin";

export default {
  name: "yellow",
  components: { Signal },
  mixins: [mixin]
};
</script>
