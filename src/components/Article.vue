<template>
  <div class="article-container">
    <el-input type="hidden" v-model="id"></el-input>
    <el-input v-model="title" placeholder="请输入文章标题" clearable maxlength="100"></el-input>
    <div class="editor-container" style="margin-top:10px">
      <markdown-editor
        ref="markdownEditor"
        v-model="content"
        :options="{hideModeSwitch:true,previewStyle:'tab'}"
        :language="language"
        height="300px"
      />
    </div>

    <el-button type="primary" icon="el-icon-document" @click="onSubmit">Submit</el-button>
  </div>
</template>

<script>
import MarkdownEditor from "@/components/MarkdownEditor";
import { editArticle, getArticle } from "../api/api.js";

const content = ``;
export default {
  name: "Markdown",
  components: { MarkdownEditor },
  data() {
    return {
      id: null,
      title: "",
      content: content,
      languageTypeList: {
        en: "en_US",
        zh: "zh_CN",
        es: "es_ES"
      }
    };
  },
  created() {
    this.id = this.$route.params.id;
    if (this.id != undefined) {
      this.getDetail(this.id);
    }
  },
  computed: {
    language() {
      return this.languageTypeList["zh"];
    }
  },
  methods: {
    onSubmit() {
      this.content = this.$refs.markdownEditor.getValue();
      editArticle({
        id: this.id,
        content: this.content,
        title: this.title
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
    },
    getDetail(id) {
      getArticle(id).then(data => {
        this.title = data.title;
        this.content = data.content;
        this.$refs.markdownEditor.setValue(data.content);
      });
    }
  }
};
</script>

<style scoped>
.article-container{
  width: 1000px;
  margin: 0 auto;
}
.editor-container {
  margin-bottom: 30px;
}
.tag-title {
  margin-bottom: 5px;
}
</style>
