<template>
  <div class="two-dimension-table">
    <div class="vertical">
      <div class="second-quadrant" id="second" contenteditable="true"></div>
      <span class="vertical-tag">
        <i class="el-icon-top"></i>紧急
      </span>
    </div>

    <div contenteditable="true" id="first"></div>
    <div contenteditable="true" id="third"></div>
    <div class="horizontal">
      <div class="four-quadrant" contenteditable="true" id="forth"></div>
      <span class="horizontal-tag">
        <i class="el-icon-right"></i>重要
      </span>
    </div>

    <el-button @click="onSubmit" style="margin-top:20px">Submit</el-button>
  </div>
</template>

<script>
import { getTwoDimensionTable, editTwoDimensionTable } from "../api/api.js";

export default {
  name: "TwoDimensionTable",
  data() {
    return {
      id: null
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
      });
    }
  },
  methods: {
    onSubmit() {
      editTwoDimensionTable({
          id:this.id,
          second:document.getElementById("second").innerText,
          first:document.getElementById("first").innerText,
          third:document.getElementById("third").innerText,
          forth:document.getElementById("forth").innerText
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
  top: -16px;
  right: -39px;
}
.horizontal {
  position: relative;
}
.horizontal-tag {
  position: absolute;
  right: -46px;
  top: -9px;
}
.two-dimension-table {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: start;
  width: 821px;
  margin: 0 auto;
}
.two-dimension-table div[contenteditable="true"] {
  width: 400px;
  height: 200px;
  overflow: auto;
  padding: 10px 5px;
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