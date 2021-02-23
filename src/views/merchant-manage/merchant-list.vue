<template>
  <div>
    <el-row>
      <el-form :inline="true" :model="formInline">
        <el-form-item label="商家名">
          <el-input
            v-model="formInline.name"
            placeholder="请输入商家名"
          ></el-input>
        </el-form-item>
        <el-form-item label="联系方式">
          <el-input
            v-model="formInline.tel"
            placeholder="请输入联系方式"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">查询</el-button>
        </el-form-item>
      </el-form>
    </el-row>
    <el-row>
      <el-col>
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column prop="date" label="日期" width="180">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="180">
          </el-table-column>
          <el-table-column prop="tel" label="联系方式" width="180">
          </el-table-column>
          <el-table-column prop="address" label="地址"> </el-table-column>
          <el-table-column fixed="right" label="操作" width="100">
            <template slot-scope="scope">
              <el-button
                @click="handleClick('detail', scope.row)"
                type="text"
                size="small"
                >查看</el-button
              >
              <el-button
                type="text"
                @click="handleClick('edit', scope.row)"
                size="small"
                >编辑</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "merchantList",
  data() {
    return {
      formInline: {
        name: "",
        tel: "",
      },
      tableData: [
        {
          name: "周帅帅",
          tel: "152000036",
          date: "2020-12-26",
          address: "浦东新区",
        },
        {
          name: "杨光",
          tel: "152000036",
          date: "2020-12-26",
          address: "浦东新区",
        },
        {
          name: "周帅帅",
          tel: "152000036",
          date: "2020-12-26",
          address: "浦东新区",
        },
        {
          name: "周帅帅",
          tel: "152000036",
          date: "2020-12-26",
          address: "浦东新区",
        },
        {
          name: "周帅帅",
          tel: "152000036",
          date: "2020-12-26",
          address: "浦东新区",
        },
      ],
    };
  },
  methods: {
    handleClick(type, row) {
      if (type == "edit") {
        this.$router.push({
          path: "/merchant/edit",
        });
      } else {
        this.$router.push({
          path: "/merchant/detail",
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
