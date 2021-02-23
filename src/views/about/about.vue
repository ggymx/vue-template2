<template>
  <div class="about">
    <span class="label">账户信息</span>
    <el-row>
      <el-col :span="8">
        <el-form
          :model="formData"
          :rules="rules"
          ref="form"
          label-width="100px"
        >
          <el-form-item label="头像" prop="userName">
            <el-avatar
              shape="circle"
              :size="100"
              :src="formData.avatarURL"
            ></el-avatar>
          </el-form-item>
          <div v-if="isMofidfy">
            <el-form-item label="用户名：" prop="name">
              <el-input v-model="formData.name" clearable></el-input>
            </el-form-item>
            <el-form-item label="年龄：" prop="age">
              <el-input v-model="formData.age" clearable></el-input>
            </el-form-item>
            <el-form-item label="账号级别：" prop="accountType">
              <el-input v-model="formData.accountType" clearable></el-input>
            </el-form-item>
            <el-form-item label="邮箱：" prop="email">
              <el-input v-model="formData.email" clearable></el-input>
            </el-form-item>
            <el-form-item label="地址：" prop="address">
              <el-input v-model="formData.address" clearable></el-input>
            </el-form-item>
            <el-form-item label="兴趣：" prop="hobby">
              <el-input v-model="formData.hobby" clearable></el-input>
            </el-form-item>
            <el-form-item>
              <el-button
                type="primary"
                class="login-btn"
                @click="submit('form')"
                >提交</el-button
              >
            </el-form-item>
          </div>
          <div v-else>
            <el-form-item label="用户名" prop="name">
              <span>{{ formData.name || "--" }}</span>
            </el-form-item>
            <el-form-item label="年龄" prop="age">
              <span>{{ formData.age || "--" }}</span>
            </el-form-item>
            <el-form-item label="账号级别" prop="accountType">
              <span>{{ formData.accountType || "--" }}</span>
            </el-form-item>
            <el-form-item label="邮箱" prop="email">
              <span>{{ formData.email || "--" }}</span>
            </el-form-item>
            <el-form-item label="地址" prop="address">
              <span>{{ formData.address || "--" }}</span>
            </el-form-item>
            <el-form-item label="兴趣" prop="hobby">
              <span>{{ formData.hobby || "--" }}</span>
            </el-form-item>
          </div>
          <el-form-item>
            <el-button
              type="primary"
              class="login-btn"
              @click="isMofidfy = !isMofidfy"
              >修改信息</el-button
            >
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "about",
  data() {
    return {
      isMofidfy: false,
      formData: {},
      rules: {},
    };
  },
  computed: {
    ...mapGetters(["userInfo"]),
  },
  mounted() {
    this.formData = this.userInfo;
  },
  methods: {
    ...mapActions(["setUserInfo"]),
    submit(formName) {
      this.$refs[formName].validate((valid) => {
        this.isMofidfy = false;
        this.setUserInfo(this.formData);
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.about {
  display: flex;
  flex-direction: column;
}
.label {
  font-size: 22px;
}
</style>
