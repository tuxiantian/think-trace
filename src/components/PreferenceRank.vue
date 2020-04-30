<template>
  <div>
    <div v-for="(item) in questionList" v-bind:key="item.id">
      <p>{{item.question}}</p>
      <el-radio v-model="item.answer" :label="item.preference1">greater</el-radio>
      <el-radio v-model="item.answer" :label="item.preference2">less</el-radio>
    </div>

    <el-button @click="getRank">Get</el-button>
  </div>
</template>

<script>
export default {
  name: "PreferenceRank",
  data() {
    return {
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
    this.questionList = this.questionList.map(item => {
      return { ...item, answer: `${item.id}` };
    });
    console.log(this.questionList);
  },
  methods: {
    getRank() {
      console.log(this.questionList);
    }
  }
};
</script>