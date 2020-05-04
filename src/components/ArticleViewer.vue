<template>
<div class="article">
  <h1>{{title}}</h1>
  <div id="viewer"></div>
</div>
  
</template>

<script>
import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import Viewer from "@toast-ui/editor/dist/toastui-editor-viewer";
import { getArticle } from "../api/api.js";

export default {
  name: "Viewer",
  data() {
    return {
      id: null,
      title: "",
      content: ""
    };
  },
  created() {
    this.id = this.$route.params.id;
    getArticle(this.id).then(data => {
      this.title = data.title;
      this.content = data.content;
      const viewer = new Viewer({
        el: document.querySelector("#viewer"),
        height: "500px",
        viewer: true,
        initialValue: data.content
      });
    });
  }
};
</script>

<style scoped>
.article{
  width: 800px;
  margin: 0 auto;
}
h1{
  text-align: center;
}
</style>