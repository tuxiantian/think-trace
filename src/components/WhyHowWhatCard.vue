<template>
  <div class="why-how-what-container">
    <div class="why-how-what">
      <div class="why">
        <div class="why-lable">
          Why
          <img src="../assets/jt.png" />
        </div>
        <div contenteditable="true" id="why"></div>
      </div>

      <div class="how">
        <div class="how-lable">
          How
          <img src="../assets/jt.png" />
        </div>
        <div contenteditable="true" id="how"></div>
      </div>

      <div class="what">
        <div class="what-lable">What</div>
        <div contenteditable="true" id="what"></div>
      </div>
    </div>
    <el-button @click="onSubmit" type="primary" style="margin-top:20px">Save</el-button>
  </div>
</template>

<script>
import { getWhyHowWhatCard, editWhyHowWhatCard } from "../api/api.js";

export default {
  name: "WhyHowWhatCard",
  data() {
    return {};
  },
  mounted: function() {
    this.id = this.$route.params.id;
    if (this.id != undefined) {
      getWhyHowWhatCard(this.id).then(data => {
        document.getElementById("why").innerText = data.why;
        document.getElementById("how").innerText = data.how;
        document.getElementById("what").innerText = data.what;
      });
    }
  },
  methods: {
    onSubmit() {
      editWhyHowWhatCard({
        id: this.id,
        why: document.getElementById("why").innerText,
        how: document.getElementById("how").innerText,
        what: document.getElementById("what").innerText
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

<style>
.why-how-what-container {
  width: 930px;
  margin: 0 auto;
}
.why-how-what {
  display: flex;
  border: 1px solid black;
  width: 930px;
  height: 450px;
  margin: 0 auto;
}
.why-lable,
.how-lable,
.what-lable {
  height: 30px;
  line-height: 30px;
  border-bottom: 1px solid black;
}
.why {
  position: relative;
}
.how {
  position: relative;
}
#why {
  border-right: 1px solid black;
}
#how {
  border-right: 1px solid black;
}
.why-how-what img {
  position: absolute;
  top: 0px;
  right: 0;
  width: 30px;
}

.why-how-what div[contenteditable="true"] {
  width: 300px;
  height: 400px;
  overflow: auto;
  padding: 10px 5px;
}
</style>