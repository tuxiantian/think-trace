<template>
  <el-card class="box-card">
    <div v-for="(o,index) in preferenceList" :key="o.preferenceId" class="text item">{{index+1}}. {{ o.preferenceText }}</div>
  </el-card>
</template>

<script>
import { getPreference } from "../api/api.js";

export default {
    name:'PreferenceRankView',
    data(){
        return {
            preferenceList:[]
        }
    },
    created() {
        this.id = this.$route.params.id;
        getPreference(this.id).then(data => {
            this.preferenceList=data
        });
    }
};
</script>

<style lang="sass" scoped>
.text {font-size: 14px;text-align:left;}

.item {padding: 18px 0;}

.box-card {width: 480px;}
</style>>