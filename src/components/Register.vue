<template>
  <el-form ref="form" :rules="rule" :model="user" label-width="80px" class="form-register">
    <el-form-item label="昵称" prop="nickName">
      <el-input v-model="user.nickName" size="small" maxlength="20"></el-input>
    </el-form-item>
    <el-form-item label="手机号" prop="mobile">
      <el-input v-model="user.mobile" size="small" maxlength="11"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="user.password" show-password size="small"></el-input>
    </el-form-item>
    <el-form-item label="确认密码" prop="repassword">
      <el-input v-model="user.repassword" show-password size="small"></el-input>
    </el-form-item>
    <el-form-item label="用户头像">
      <el-upload
        class="avatar-uploader"
        action="https://jsonplaceholder.typicode.com/posts/"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
      >
        <img v-if="imageUrl" :src="imageUrl" class="avatar" />
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="onSubmit('form')">注册</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { register } from "../api/api.js";

export default {
  name: "Register",
  data() {
      let reg = /(?!^(\d+|[a-zA-Z]+|[~!@#$%^&*?]+)$)^[\w~!@#$%^&*?]{6,12}$/
      var validatePassword = (rule,value,callback) => {
          if(!reg.test(value)){
              callback(new Error('密码应是6-12位数字、字母或字符！'));
          }else if(this.form.repassword != value){
              callback(new Error('密码与确认密码输入不一致'));
          }else{
              callback();
          }
        }

        var validateRePassword = (rule,value,callback) => {
          if(!reg.test(value)){
              callback(new Error('密码应是6-12位数字、字母或字符！'));
          }else if(this.form.password != value){
              callback(new Error('密码与确认密码输入不一致'));
          }else{
              callback();
          }
        }
    return {
      user: {
          nickName:"窄门",
        mobile: "15039686014",
        password: "123456@",
        repassword: "123456@",
        avatar:""
      },
      imageUrl: "",
      rule:{
          mobile:[{require:true,message:'请输入手机号', trigger: 'blur'},{min:11,max:11,message:'请输入11位数手机号', trigger: 'blur'}],
          nickName:[{require:true,message:'请输入昵称', trigger: 'blur'},{min:2,max:20,message:'请输入2位到20位的字符', trigger: 'blur'}],
          password:[{require:true,message:'请输入密码', trigger: 'blur'},{validator:validatePassword, trigger: 'blur'}],
          repassword:[{require:true,message:'请输入确认密码', trigger: 'blur'},{validator:validateRePassword, trigger: 'blur'}]
      }
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    onSubmit(formName) {
        console.log(this.form);
        // this.$refs[formName].validate((valid) => {
        //     if(!valid){
        //         return false;
        //     }

        // })
        this.user.avatar = this.imageUrl;
        register(this.user);
      
    }
  }
};
</script>

<style>
.form-register {
  width: 800px;
  margin: 0 auto;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>