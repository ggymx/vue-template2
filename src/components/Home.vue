<template>
  <div id="home">
    <SideBar />
    <div style="overflow: hidden;">
      <Top />
      <Main />
    </div>
  </div>
</template>

<script>
import Top from "@/components/Top.vue";
import SideBar from "@/components/SideBar.vue";
import Main from "@/components/Main.vue";
export default {
  name: "Home",
  components: {
    Top,
    SideBar,
    Main,
  },
};
</script>

<style lang="scss" scoped>
#home {
  height: 100vh;
}
</style>
