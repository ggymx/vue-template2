<template>
  <div class="login">
    <el-row>
      <el-col :span="8" :offset="8">
        <div class="title">洛天依后台管理系统</div>
        <el-form
          :model="formData"
          :rules="rules"
          ref="form"
          label-width="100px"
        >
          <el-form-item label="用户名" prop="userName">
            <el-input v-model="formData.userName" clearable></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pwd">
            <el-input v-model="formData.pwd" show-password clearable></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              class="login-btn"
              @click="submitForm('form')"
              >登录</el-button
            >
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      formData: {
        userName: "",
        pwd: "",
      },
      rules: {
        userName: [{ required: true, message: "请输入姓名", trigger: "blur" }],
        pwd: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //模拟登录
          if (
            this.formData.userName == "test" &&
            this.formData.pwd == "123456"
          ) {
            localStorage.setItem("isLogin", "true");
            localStorage.setItem(
              "userInfo",
              JSON.stringify({
                avatarURL:
                  "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2056950016,1236310222&fm=26&gp=0.jpg",
                name: "洛天依",
                age: 23,
                accountType: "admin",
                email: "5566333@qq.com",
                address: "上海市静安区",
                hobby: "动漫",
              })
            );
            this.$router.push({
              path: "/",
            });
          } else {
            this.$message({
              message: "账户名密码有误",
              type: "error",
            });
          }
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  height: 100vh;
  width: 100vw;
  background-image: url("../../assets/imgs/login-bg.jpg");
  background-size: 100% 100%;
  padding-top: 30vh;
  /deep/ .el-form-item__label {
    color: #fff;
  }
}
.title {
  text-align: center;
  margin-bottom: 20px;
  font-size: 25px;
  padding-left: 100px;
  color: #fff;
}
.login-btn {
  width: 100%;
}
</style>
