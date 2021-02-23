<template>
  <!-- 面包屑 -->
  <div class="breadcrumb">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item
        :to="{ path: breadcrumb.path }"
        v-for="breadcrumb in breadcrumbCache"
        >{{ breadcrumb.meta.title }}</el-breadcrumb-item
      >
    </el-breadcrumb>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "breadcrumb",
  computed: {
    ...mapGetters(["breadcrumbCache"]),
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.breadcrumb {
  padding: 15px 0;
  background: #eee;
  padding-left: 10px;
}
</style>
