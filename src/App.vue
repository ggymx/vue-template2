<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
import Home from "@/components/Home.vue";

export default {
  components: {
    Home,
  },
};
</script>
<style lang="scss">
#app {
  height: 100vh;
}
</style>
