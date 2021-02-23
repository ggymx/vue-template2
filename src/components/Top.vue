<template>
  <div id="top">
    <div class="left-container">
      <img src="../assets/imgs/top-banner.jpg" width="120" height="60" />
      <span class="title">洛天依后台管理系统</span>
    </div>
    <div class="right-container">
      <i class="el-icon-rank fullScreen-btn" @click="fullScreenHandler"></i>
      <span class="username">{{ userInfo.name }}</span>
      <el-avatar
        shape="circle"
        size="medium"
        :src="userInfo.avatarURL"
        class="avatar"
      ></el-avatar>
      <el-button type="primary" @click="loginOut">退出登录</el-button>
    </div>
  </div>
</template>

<script>
import screenfull from "screenfull";
import { mapGetters } from "vuex";
export default {
  name: "Top",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["userInfo"]),
  },
  methods: {
    fullScreenHandler() {
      // 判断是否支持
      if (screenfull.enabled) {
        this.$message({
          message: "不支持全屏",
          type: "warning",
        });
        return false;
      }
      screenfull.toggle();
    },
    loginOut() {
      localStorage.removeItem("isLogin");
      this.$router.push({
        path: "/login",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
#top {
  height: 80px;
  // width: 100%;
  background: $bgColor-default;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
}
.title {
  color: #fff;
  font-size: 22px;
}
.right-container {
  display: flex;
  align-items: center;
  min-width: 250px;
  justify-content: space-between;
  color: #fff;
}
.left-container {
  display: flex;
  align-items: center;
}
.fullScreen-btn {
  font-size: 33px;
  color: #fff;
  vertical-align: middle !important;
  // margin-right: 10px;
}
.username {
  font-size: 20px;
  margin-left: 10px;
  margin-right: 10px;
}
.avatar {
  margin-right: 10px;
}
</style>
