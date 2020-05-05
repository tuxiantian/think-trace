<template>
  <div class="image-gallery">
    <el-upload
      action="http://localhost:8085/file/save?bussType=imageGallery"
      list-type="picture-card"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove"
      :on-success="handleSuccess"
    >
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt />
    </el-dialog>
  </div>
</template>

<script>
import { editImageGallery,removeImageGallery } from "../api/api.js";

export default {
  name: "ImageGallery",
  data() {
      return {
          id:null,
        dialogImageUrl: '',
        dialogVisible: false
      };
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
        removeImageGallery({id:this.id,imageUrl:file.response.data.fileUrl});
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      handleSuccess(response, file, fileList){
          editImageGallery({id:this.id,imageUrl:response.data.fileUrl}).then(data=>{
              this.id = data;
          })
      }
    }
};
</script>

<style scoped>
.image-gallery{
    width: 750px;
    margin: 0 auto;
}
</style>