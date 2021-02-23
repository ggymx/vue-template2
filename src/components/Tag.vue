<template>
  <!-- 页面标签 -->
  <div class="tabs">
    <el-tag
      v-for="page in openPages"
      :key="page.title"
      closable
      :type="
        page.path == activePages[activePages.length - 1].path ? '' : 'info'
      "
      style="margin-right:10px;"
      @click="switchPage(page)"
      @close="closePage(page)"
    >
      {{ page.meta.title }}
    </el-tag>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Tag",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["openPages", "activePages"]),
  },
  methods: {
    ...mapActions(["setActivePage", "setClosePage"]),
    switchPage(page) {
      this.setActivePage(page);
      this.$router.push({
        path: page.path,
      });
    },
    closePage(page) {
      this.setClosePage(page);
      //关闭当前页面后回退到上一次页面
      this.$router.push({
        path: this.activePages.length
          ? this.activePages[this.activePages.length - 1].path
          : "/",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.tabs {
  padding-top: 5px;
}
</style>
