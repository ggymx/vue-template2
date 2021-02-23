<template>
  <div id="home">
    <SideBar />
    <div style="overflow: hidden;">
      <Top />
      <Breadcrumb />
      <Tag />
      <Main />
    </div>
  </div>
</template>

<script>
import Top from "@/components/Top.vue";
import SideBar from "@/components/SideBar.vue";
import Main from "@/components/Main.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
import Tag from "@/components/Tag.vue";
export default {
  name: "Home",
  components: {
    Top,
    SideBar,
    Main,
    Breadcrumb,
    Tag,
  },
};
</script>

<style lang="scss" scoped>
#home {
  height: 100vh;
}
</style>
