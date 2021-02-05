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
          <a-button type="primary" html-type="submit" block>
            登录
          </a-button>
        </a-form-item>
      </a-form>
      <div class="text-center fs-12">
        <a href="" class="color-white">忘记密码</a> |
        <a href="" class="color-white">注册</a>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { reactive } from "vue";
export default {
  name: "Login",
  setup(props) {
    const formConfig = reactive({
      layout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 }
      }
    });
    return {
      formConfig
    };
  }
};
</script>
<style lang="sass">
@import "./src/styles/account/login.scss"
</style>
