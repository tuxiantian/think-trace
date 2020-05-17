<template>
  <el-form ref="form" :rules="rule" :model="user" label-width="80px" class="form-login">
    <el-form-item label="手机号" prop="mobile">
      <el-input v-model="user.mobile" size="small" maxlength="11"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="user.password" show-password size="small"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "Login",
  data() {
    let reg = /(?!^(\d+|[a-zA-Z]+|[~!@#$%^&*?]+)$)^[\w~!@#$%^&*?]{6,12}$/;
    var validatePassword = (rule, value, callback) => {
      if (!reg.test(value)) {
        callback(new Error("密码应是6-12位数字、字母或字符！"));
      }  else {
        callback();
      }
    };
    return {
      user: {
        mobile: "15039686014",
        password: "123456@"
      },
      rule: {
        mobile: [
          { require: true, message: "请输入手机号", trigger: "blur" },
          { min: 11, max: 11, message: "请输入11位数手机号", trigger: "blur" }
        ],
        password: [
          { require: true, message: "请输入密码", trigger: "blur" },
          { validator: validatePassword, trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(valid => {
          if (valid) {
              debugger

            this.$store.dispatch('Login', this.user).then(() => {
              this.$router.push({path: '/'})
            }).catch(() => {
            })
          }else {
            console.log('参数验证不合法！');
            return false
          }
      })
    }
  }
};
</script>

<style scoped>
.form-login {
  width: 800px;
  margin: 0 auto;
}
</style>
