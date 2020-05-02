<template>
  <div class="preferenceRank">
    <el-steps :space="200" :active="2" finish-status="success">
      <el-step title="add preference"></el-step>
      <el-step title="choice preference"></el-step>
      <el-step title="preference rank"></el-step>
    </el-steps>

    <div v-for="(item,index) in questionList" v-bind:key="item.preferenceRankId">
      <p>{{index+1}}. {{item.question}}</p>
      <el-radio v-model="item.answer" :label="item.preference1">greater</el-radio>
      <el-radio v-model="item.answer" :label="item.preference2">less</el-radio>
    </div>

    <el-button @click="onSubmit" style="margin-top:30px">Submit</el-button>
  </div>
</template>

<script>
import { findPreferenceRank,answerPreferenceRank} from '../api/api';

export default {
  name: "PreferenceRank",
  data() {
    return {
      active: 0,
      groupId:null,
      questionList: [
        {
          id: 11,
          question: "看书 vs 发呆",
          preference1: "1",
          preference2: "2"
        },
        {
          id: 22,
          question: "约会 vs 写代码",
          preference1: "3",
          preference2: "4"
        }
      ]
    };
  },
  created() {
    const ID = this.$route.params.id;
    this.groupId = ID;
    findPreferenceRank(ID).then(data => {
        this.questionList = data;
    })
    // this.questionList = this.questionList.map(item => {
    //   return { ...item, answer: `${item.id}` };
    // });
    console.log(this.questionList);
  },
  methods: {
    onSubmit() {
      let answerList=this.questionList.map(item=>{
        return {preferenceRankId:item.preferenceRankId,answer:item.answer,groupId:item.groupId}
      });
      console.log(answerList);
      answerPreferenceRank(answerList).then(data=>{
        this.$router.push(`/preferenceRankView/`+this.groupId);
      });
    }
  }
};
</script>

<style scoped>
.preferenceRank{
  margin: 0 auto;
  width: 600px;
}
</style>