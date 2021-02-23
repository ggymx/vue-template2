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
  height: calc(100vh - 165.6px);
  padding: 10px;
}
</style>
