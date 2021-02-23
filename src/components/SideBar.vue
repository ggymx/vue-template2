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
        default-active="2"
        background-color="#000"
        text-color="#fff"
        active-text-color="#ffd04b"
        :collapse="isCollapse"
        router
      >
        <el-menu-item index="/about">
          <i class="el-icon-menu"></i>
          <span slot="title">关于</span>
        </el-menu-item>
        <el-menu-item index="/work">
          <i class="el-icon-document"></i>
          <span slot="title">工作台</span>
        </el-menu-item>
        <el-menu-item>
          <i class="el-icon-setting"></i>
          <span slot="title">商家管理</span>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  data() {
    return {
      isCollapse: false,
    };
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
  a {
    color: #fff;
    font-size: 16px;
    margin-top: 20px;
    text-decoration: none;
  }
}
</style>
