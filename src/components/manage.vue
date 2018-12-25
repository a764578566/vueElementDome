<template>
<div>
  <h1>登录成功！</h1>
  <el-form v-bind:model="product">
    <el-form-item label></el-form-item>
    <el-input v-model="name" placeholder="请输入材料名称"></el-input>
    
     <el-checkbox v-model="lovingVue" disabled checked>备选项</el-checkbox>
  </el-form>
  </div>
</template>
<script>
export default {
  name: "manage",
  data() {
    return {
      product: {
        name: "admin",
        checkPass: "123456"
      }
    };
  }
};
</script>
