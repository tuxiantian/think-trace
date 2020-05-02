<template>
  <div class="preference">
    <el-steps :space="200" :active="1" finish-status="success">
      <el-step title="add preference"></el-step>
      <el-step title="choice preference"></el-step>
      <el-step title="preference rank"></el-step>
    </el-steps>

    <div>
      <div class="preference-header">
        <el-input type="text" v-model="preferenceText" clearable />
        <el-button @click="addNewPreference" style="margin-left:20px">添加</el-button>
      </div>
      <ul>
        <li v-for="preference in preferenceList" :key="preference.id">
          <span v-text="preference.preferenceText"></span>
          <el-button @click="deletePreference(preference.id)" size="small">删除</el-button>
        </li>
      </ul>
      <div class="footer">
        <el-button @click="insertPreferenceRank(groupId)" :disabled="preferenceList.length==0">完成</el-button>
        <el-button @click="nextStep()">Next</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import {
  deletePreference,
  addPreference,
  getPreference,
  insertPreferenceRank
} from "../api/api.js";

export default {
  name: "Preference",
  data() {
    return {
      active: 0,
      groupId: null,
      preferenceText: "",
      preferenceList: []
    };
  },
  created() {
    const ID = this.$route.params.id;
    if (ID != undefined) {
      this.groupId = ID;
      getPreference(ID).then(data => {
        this.preferenceList = data;
      });
    }
  },
  methods: {
    addNewPreference() {
      addPreference({
        groupId: this.groupId,
        preferenceText: this.preferenceText
      }).then(data => {
        this.groupId = data.groupId;
        this.preferenceList.push({
          id: data.id,
          preferenceText: data.preferenceText
        });
      });
    },
    deletePreference(id) {
      this.preferenceList.map((preference, index) => {
        if (preference.id == id) {
          this.preferenceList.splice(index, 1);
        }
      });
      deletePreference(id);
    },
    insertPreferenceRank(groupId) {
      insertPreferenceRank(groupId).then(data => {
        this.$router.push(`/preferenceRank/` + this.groupId);
      });
    },
    nextStep(){
        this.active++;
        console.log(this.active)
        // if (this.active++ > 2) this.active = 0;
        // console.log(this.active)
    }
  }
};
</script>

<style scoped>
.preference {
  width: 600px;
  height: auto;
  margin: 0 auto;
}
.preference li {
  text-align: left;
  line-height: 40px;
}
.preference-header {
  display: flex;
}
.el-step:last-of-type .el-step__line {
    display: block !important;
}
</style>