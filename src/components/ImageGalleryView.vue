<template>
  <div class="image-gallery">
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="imageUrl in imageUrlList" :key="imageUrl" style="width:400px">
        <div
          class="img"
          :style="{backgroundImage:'url(http://localhost:8085'+imageUrl+')', backgroundRepeat:'no-repeat', backgroundPosition:'center center', backgroundSize: 'contain'}"
        ></div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import { getImageGallery } from "../api/api.js";

export default {
  name: "ImageGalleryView",
  data() {
    return {
      imageUrlList: []
    };
  },
  created() {
    this.id = this.$route.params.id;
    if (this.id != undefined) {
      let _self = this;
      getImageGallery(this.id).then(data => {
        _self.imageUrlList = data;
      });
    }
  }
};
</script>

<style scoped>
.image-gallery{
    width: 1200px;
    margin: 0 auto;
}
.el-carousel__item .img {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  width: 100%;
  height: 200px;
  max-width: 100%;
  max-height: 100%;
}
</style>