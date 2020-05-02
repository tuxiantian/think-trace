<template>
  <el-steps :space="200" :active="1" finish-status="success">
    <el-step title="步骤1"></el-step>
    <el-step title="步骤2"></el-step>
    <el-step title="步骤3"></el-step>
    <el-step title="步骤4"></el-step>
  </el-steps>
</template>

<script>
export default {
  name: "Step"
};
</script>