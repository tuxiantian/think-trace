<template>
  <div class="preferenceRankView">
    <el-steps :space="200" :active="active" finish-status="success">
      <el-step title="add preference"></el-step>
      <el-step title="choice preference"></el-step>
      <el-step title="preference rank"></el-step>
    </el-steps>

    <el-card class="box-card">
      <div
        v-for="(o,index) in preferenceList"
        :key="o.preferenceId"
        class="text item"
      >{{index+1}}. {{ o.preferenceText }}</div>
    </el-card>
  </div>
</template>

<script>
import { getSortedPreference } from "../api/api.js";

export default {
  name: "PreferenceRankView",
  data() {
    return {
      active: 3,
      preferenceList: []
    };
  },
  created() {
    this.id = this.$route.params.id;
    getSortedPreference(this.id).then(data => {
      this.preferenceList = data.data.preferenceList;
      this.active = data.data.stepActive;
    });
  }
};
</script>

<style scoped>
.preferenceRankView{width:600px;margin:0 auto;}
.text {font-size: 14px;text-align:left;}

.item {padding: 18px 0;}

.box-card {width: 480px;margin-top: 30px;}
</style>>