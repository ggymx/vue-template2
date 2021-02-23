<template>
  <!-- 面包屑 -->
  <div class="breadcrumb">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item
        :to="{ path: breadcrumb.path }"
        v-for="breadcrumb in breadcrumbCache"
        :key="breadcrumb.path"
        >{{ breadcrumb.meta.title }}</el-breadcrumb-item
      >
    </el-breadcrumb>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "breadcrumb",
  computed: {
    ...mapGetters(["breadcrumbCache"]),
  },
  watch: {
    //监听路由实现选项卡，面包屑，侧边导航联动
    $route: {
      handler(newVal, oldVal) {
        console.log("初始化");
        this.setBreadcrumbCache(newVal);
        this.setOpenPage(newVal);
      },
      immediate: true,
    },
  },
  mounted() {},
  methods: {
    ...mapActions(["setBreadcrumbCache", "setOpenPage"]),
  },
};
</script>

<style lang="scss" scoped>
.breadcrumb {
  padding: 15px 0;
  background: #eee;
  padding-left: 10px;
}
</style>
