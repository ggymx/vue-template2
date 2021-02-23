<template>
  <!-- 页面标签 -->
  <div class="tabs">
    <el-tag
      v-for="page in openPages"
      :key="page.title"
      closable
      :type="page.path == activePage.path ? '' : 'info'"
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
    return {
      currentPage: {},
    };
  },
  computed: {
    ...mapGetters(["openPages", "activePage"]),
  },
  methods: {
    ...mapActions(["setActivePage", "setClosePage", "setBreadcrumbCache"]),
    switchPage(page) {
      //不能重复点击当前页
      if (this.currentPage.path == page.path) {
        return;
      }
      this.setActivePage(page);
      // this.setBreadcrumbCache(page);
      this.currentPage = page;
      this.$router.push({
        path: page.path,
      });
    },
    closePage(page) {
      //若删除tag不是当前页，则只删除tag即可
      if (page.path != this.activePage.path) {
        this.setClosePage(page);
      } else {
        //关闭当前激活页时 默认跳转前一个tag，若激活的是第一个则跳转到后一个tag，tag全部关闭时不跳转
        const lastPageIndex =
          this.openPages.findIndex((item) => item.path == page.path) - 1;
        this.setClosePage(page);
        //关闭当前页面后回退到上一次页面
        if (this.openPages.length) {
          this.$router.push({
            path:
              lastPageIndex == -1
                ? this.openPages[lastPageIndex + 1]?.path
                : this.openPages[lastPageIndex]?.path,
          });
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.tabs {
  padding-top: 5px;
}
</style>
