<template>
  <div id="main">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Main",
};
</script>

<style lang="scss" scoped>
#main {
  height: calc(100vh - 80px);
  padding: 10px;
}
</style>
