<template>
  <div class="card">
    <el-switch
      v-model="showFact"
      class="fact-opinion-switch"
      active-text="fact"
      inactive-text="opinion"
    ></el-switch>
    <div v-show="showFact" class="fact" contenteditable="true">fact</div>
    <div v-show="!showFact" class="opinion" contenteditable="true">opinion</div>
    <el-button @click="onSubmit" style="margin:10px 0">Save</el-button>
  </div>
</template>

<script>
import { getFactOpinionCard, editFactOpinionCard } from "../api/api.js";

export default {
  name: "FactOpinionCard",
  data() {
    return {
      showFact: true,
      fact: "",
      opinion: ""
    };
  },
  mounted: function() {
    this.id = this.$route.params.id;
    if (this.id != undefined) {
      getTwoDimensionTable(this.id).then(data => {
        this.fact = data.fact;
        document.getElementsByClassName("fact")[0].innerText = this.fact;
        this.opinion = data.opinion;
        document.getElementsByClassName("opinion")[0].innerText = this.opinion;
      });
    }
  },
  methods: {
    onSubmit() {
        editFactOpinionCard({
            id: this.id,
            fact: document.getElementsByClassName("fact")[0].innerText,
            opinion: document.getElementsByClassName("opinion")[0].innerText
        });
    }
  }
};
</script>

<style scoped>
.card {
  border: 1px solid black;
  width: 410px;
}
.card div[contenteditable="true"] {
  width: 400px;
  height: 300px;
  overflow: auto;
  padding: 10px 5px;
}

.fact-opinion-switch {
  margin: 10px 0;
}
/* .card div[contenteditable="true"]:focus {
    outline:none;
} */
</style>