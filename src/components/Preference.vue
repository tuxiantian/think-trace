<template>
  <div class="preference">
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
        <el-button @click="insertPreferenceRank(groupId)">完成</el-button>
    </div>
  </div>
</template>

<script>
import { deletePreference, addPreference, getPreference,insertPreferenceRank } from "../api/api.js";

export default {
  name: "Preference",
  data() {
    return {
      groupId: null,
      preferenceText: "",
      preferenceList: []
    };
  },
  created() {
    const ID = this.$route.params.id;
    if (ID != undefined) {
        this.groupId=ID;
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
    insertPreferenceRank(groupId){
        insertPreferenceRank(groupId).then(data=>{
            this.$router.push(`/preferenceRank/`+this.groupId);
        });
        
    }
  }
};
</script>

<style scoped>
.preference {
  width: 400px;
  height: auto;
  margin: 0 auto;
}
.preference li{
    text-align: left;
    line-height: 40px;
}
.preference-header {
  display: flex;
}
</style>