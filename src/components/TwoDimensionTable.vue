<template>
  <div class="two-dimension-table">
    <div class="vertical">
      <div class="second-quadrant" id="second" contenteditable="true"></div>
      <span class="vertical-tag">
        <i class="el-icon-top"></i>
      </span>
      <input v-model="ylable" />
    </div>

    <div contenteditable="true" id="first"></div>
    <div contenteditable="true" id="third"></div>
    <div class="horizontal">
      <div class="four-quadrant" contenteditable="true" id="forth"></div>
      <span class="horizontal-tag">
        <i class="el-icon-right"></i>
        <input v-model="xlable" />
      </span>
    </div>

    <el-button @click="onSubmit" type="primary" style="margin-top:20px">Submit</el-button>
  </div>
</template>

<script>
import { getTwoDimensionTable, editTwoDimensionTable } from "../api/api.js";

export default {
  name: "TwoDimensionTable",
  data() {
    return {
      id: null,
      xlable: "重要",
      ylable: "紧急"
    };
  },
  created() {},
  mounted: function() {
    this.id = this.$route.params.id;
    if (this.id != undefined) {
      getTwoDimensionTable(this.id).then(data => {
        document.getElementById("second").innerText = data.second;
        document.getElementById("first").innerText = data.first;
        document.getElementById("third").innerText = data.third;
        document.getElementById("forth").innerText = data.forth;
        this.xlable = data.xlable;
        this.ylable = data.ylable;
      });
    }
  },
  methods: {
    onSubmit() {
      debugger
      editTwoDimensionTable({
        id: this.id,
        second: document.getElementById("second").innerText,
        first: document.getElementById("first").innerText,
        third: document.getElementById("third").innerText,
        forth: document.getElementById("forth").innerText,
        xlable:this.xlable,
        ylable:this.ylable
      }).then(res => {
        if (res.code == 200) {
          this.$message({
            message: res.message,
            type: "success"
          });
        } else {
          this.$message.error(res.message);
        }
      });
    }
  }
};
</script>

<style scoped>
.vertical {
  position: relative;
}
.vertical-tag {
  position: absolute;
  top: -9px;
  right: -7px;
}
.horizontal {
  position: relative;
}
.horizontal-tag {
  position: absolute;
  right: -190px;
  top: -10px;
}
.horizontal-tag input {
  border: none;
  outline: none;
}
.vertical-tag + input {
  border: none;
  outline: none;
  position: absolute;
  top: -30px;
  right: -80px;
  text-align: center;
}
.two-dimension-table {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: start;
  width: 821px;
  margin: 50px auto 0 auto;
}
.two-dimension-table div[contenteditable="true"] {
  width: 400px;
  height: 200px;
  overflow: auto;
  padding: 10px 5px;
  text-align: left;
}
.two-dimension-table div[contenteditable="true"]:focus {
  outline: none;
}
.second-quadrant {
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

.four-quadrant {
  border-top: 1px solid black;
  border-left: 1px solid black;
}
</style>