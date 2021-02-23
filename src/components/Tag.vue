<template>
  <!-- 页面标签 -->
  <div class="tabs">
    <el-tag
      v-for="page in openPages"
      :key="page.title"
      closable
      :type="
        activePages.length &&
        page.path == activePages[activePages.length - 1].path
          ? ''
          : 'info'
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
    return {
      currentPage: {},
    };
  },
  computed: {
    ...mapGetters(["openPages", "activePages"]),
  },
  methods: {
    ...mapActions(["setActivePage", "setClosePage", "setBreadcrumbCache"]),
    switchPage(page) {
      //不能重复点击当前页
      if (this.currentPage.path == page.path) {
        return;
      }
      this.setActivePage(page);
      this.setBreadcrumbCache(page);
      this.currentPage = page;
      this.$router.push({
        path: page.path,
      });
    },
    closePage(page) {
      //若删除tag不是当前页，则只删除tag即可
      if (page.path != this.activePages[this.activePages.length - 1]?.path) {
        this.setClosePage(page);
      } else {
        this.setClosePage(page);
        if (this.activePages[this.activePages.length - 1]) {
          this.setBreadcrumbCache(
            this.activePages[this.activePages.length - 1]
          );
        } else {
          this.$router.options.routes.forEach((route) => {
            if (route.name == "Home") {
              //面包屑必须要有一个
              this.setBreadcrumbCache(
                route.children.filter((sdRouter) => {
                  return sdRouter.path == "/about";
                })[0]
              );
            }
          });
        }
        //关闭当前页面后回退到上一次页面
        this.$router.push({
          path: this.activePages.length
            ? this.activePages[this.activePages.length - 1]?.path
            : "/",
        });
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
