<template>
  <div class="account">
    <div class="form-wrap">
      <a-form
        name="custom-validation"
        ref="ruleForm">

        <a-form-item>
          <label>账号</label>
          <a-input type="text" autocomplete="off" />
        </a-form-item>

        <a-form-item>
          <label>密码</label>
          <a-input type="password" autocomplete="off" />
        </a-form-item>

        <a-form-item>
          <label>&nbsp</label>
          <captcha />
          <label style="margin: 1px, 0, 3px, 0">&nbsp</label>
        </a-form-item>

        <a-form-item>
            <a-button type="primary" html-type="submit" block>
              登录
            </a-button>
        </a-form-item>

      </a-form>
      <div class="text-center fs-12">
        <a href="" class="color-white">忘记密码</a> |
        <router-link to="/register">注册</router-link>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { reactive, onMounted, toRefs } from "vue";
// 局部组件导入
import Captcha from "../../components/captcha";

export default {
  name: "Login",
  components: { Captcha },
  setup(props) {
    const formConfig = reactive({
      layout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 }
      }
    });
    const data = toRefs(formConfig)
    //生命周期函数，挂摘完成之后
    onMounted(()=>{

    })
    return {
      // formConfig
      ...data
    };
  }
};
</script>
<style lang="sass">
@import "./src/styles/account/login.scss"
</style>
