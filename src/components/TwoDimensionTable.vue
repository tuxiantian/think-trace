<template>
  <div class="two-dimension-table">
    <div class="vertical">
      <div class="second-quadrant" id="second" contenteditable="true"></div>
      <span class="vertical-tag"><i class="el-icon-top"></i>紧急</span>
    </div>

    <div contenteditable="true" id="first">1</div>
    <div contenteditable="true" id="third">3</div>
    <div class="horizontal">
      <div class="four-quadrant" contenteditable="true" id="forth"></div>
      <span class="horizontal-tag"><i class="el-icon-right"></i>重要</span>
    </div>

    <el-button @click="getContent">Get second-quadrant</el-button>
  </div>
</template>

<script>
export default {
  name: "TwoDimensionTable",
  created() {},
  mounted: function() {
    console.log(document.getElementById("second"));
    document.getElementById("second").innerText = "22";
    document.getElementById("first").innerText = "11";
    document.getElementById("third").innerText = "33";
    document.getElementById("forth").innerText = "44";
  },
  methods: {
    getContent() {
      console.log(document.getElementById("second").innerText);
    }
  }
};
</script>

<style scoped>
.vertical{
    position: relative;
}
.vertical-tag{
    position: absolute;
    top: -16px;
    right: -39px;
}
.horizontal{
    position: relative;
    
}
.horizontal-tag{
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
  width: 801px;
  margin: 0 auto;
}
.two-dimension-table div[contenteditable="true"] {
  width: 400px;
  height: 300px;
  overflow: auto;
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