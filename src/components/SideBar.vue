<template>
  <div id="sideBar">
    <div class="collapse-btn-container">
      <i
        :class="[
          isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold',
          'collapse-btn',
        ]"
        :style="{ right: isCollapse ? '25%' : 0 }"
        @click="isCollapse = !isCollapse"
      ></i>
    </div>
    <div class="nav-container">
      <el-menu
        background-color="#000"
        text-color="#fff"
        active-text-color="#ffd04b"
        :collapse="isCollapse"
        :default-active="activePage.path"
        router
        @select="openPage"
      >
        <template v-for="route in routes">
          <el-menu-item :index="route.path">
            <i :class="[route.meta.icon]"></i>
            <span slot="title">{{ route.meta.title }}</span>
          </el-menu-item>
        </template>
      </el-menu>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "SideBar",
  data() {
    return {
      isCollapse: false,
      routes: [],
    };
  },
  mounted() {
    this.initRouter();
  },
  computed: {
    ...mapGetters(["activePage"]),
  },
  methods: {
    ...mapActions(["setOpenPage", "setBreadcrumbCache"]),
    openPage(pageIndex) {
      //将新打开的页面路由添加到tag中
      this.routes.forEach((page) => {
        if (page.path == pageIndex) {
          this.setOpenPage(page);
          console.log("测试66666666");
          // this.setBreadcrumbCache(page);
        }
      });
    },
    //初始化侧边栏路由
    initRouter() {
      this.$router.options.routes.forEach((route) => {
        if (route.name == "Home") {
          route.children.forEach((sdRouter) => {
            if (sdRouter.meta.hidden != false) {
              this.routes.push(sdRouter);
            }
          });
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
#sideBar {
  height: 100%;
  // width: 150px;
  background: $bgColor-default;
  float: left;
  color: #fff;
  margin-right: 1px;
}
.collapse-btn-container {
  height: 80px;
  display: flex;
  align-items: center;
  position: relative;
  .collapse-btn {
    font-size: 30px;
    float: right;
    position: absolute;
    right: 0;
  }
}
.nav-container {
  height: calc(100% - 100px);
  // padding-left: 20px;
  display: flex;
  flex-direction: column;
  /deep/ .el-menu-item {
    font-size: 18px;
  }
}
</style>
