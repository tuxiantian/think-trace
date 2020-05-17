<template>
  <div class="diary-container">
    <el-input type="hidden" v-model="id"></el-input>
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
import { editDiary,getDiary } from "../api/api.js";

export default {
  name: "Diary",
  components: { MarkdownEditor },
  data() {
    return {
      id: null,
      content: "",
      contentHtml: "",
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
      this.contentHtml = this.$refs.markdownEditor.editor.getHtml();
      editDiary({
        id: this.id,
        content: this.content,
        contentHtml: this.contentHtml
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
        getDiary(id).then(res=>{
            this.content = res.content;
            this.$refs.markdownEditor.setValue(res.content);
        });
    }
  }
};
</script>

<style scoped>
.diary-container {
  width: 1000px;
  margin: 0 auto;
}
.editor-container {
  margin-bottom: 30px;
}
</style>