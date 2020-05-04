<template>
  <div class="preference">
    <el-steps :space="200" :active="active" finish-status="success">
      <el-step title="add preference"></el-step>
      <el-step title="choice preference"></el-step>
      <el-step title="preference rank"></el-step>
    </el-steps>

    <div class="preference-container">
      <div class="preference-header">
        <el-input type="text" v-model="preferenceText" clearable />
        <el-button @click="addNewPreference" style="margin-left:20px" type="primary">添加</el-button>
      </div>
      <ul>
        <li v-for="preference in preferenceList" :key="preference.id">
          <span v-text="preference.preferenceText"></span>
          <el-button @click="deletePreference(preference.id)" size="small" type="primary">删除</el-button>
        </li>
      </ul>
      <div class="footer">
        <el-button @click="insertPreferenceRank(groupId)" :disabled="disabled" type="primary">完成</el-button>
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
  computed:{
      disabled:function(){
          return this.preferenceList.length==0 || this.active==3
      }
  },
  created() {
    const ID = this.$route.params.id;
    if (ID != undefined) {
      this.groupId = ID;
      getPreference(ID).then(data => {
        this.preferenceList = data.data.preferenceList;
        this.active = data.data.stepActive;
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
.preference-container{
    margin-top: 30px;
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