<template>
  <div class="account">
    <div class="form-wrap">
      <a-form
        name="custom-validation"
        ref="ruleForm"
        :model="account_form"
        :rules="rules_form"
        @finish="handleFinish">

        <a-form-item name="username">
          <label>账号</label>
          <a-input v-model:value="account_form.username" type="text" autocomplete="off" />
        </a-form-item>

        <a-form-item name="password">
          <label>密码</label>
          <a-input v-model:value="account_form.password" type="password" autocomplete="off" />
        </a-form-item>

        <a-form-item>
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
    //自定义验证方法
    const checkUsername = async (rule, value, callback) => {
      if(!value){
        return Promise.reject("账号必填")
      } else {
        return Promise.resolve()
      }
    };

    const  checkPassword = async (rule, value, callback) => {
      if(!value){
        return Promise.reject("密码必填")
      }else {
        return Promise.resolve()
      }
    };

    //定义表单数据
    const formConfig = reactive({
      layout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 }
      },
      account_form: {
        username: "",
        password: "",
      },
      rules_form: {
        username: [{validator: checkUsername, trigger: "change"}],
        password: [{validator: checkPassword, trigger: "change"}],
      }
    });
    const data = toRefs(formConfig)

    //提交表单的方法
    const handleFinish = () => {
      alert("登陆成功")
    }
    //生命周期函数，挂摘完成之后
    onMounted(()=>{

    })
    return {
      // formConfig
      ...data,
      // 把方法返回才能调用
      handleFinish
    };
  }
};
</script>
<style lang="sass">
@import "./src/styles/account/login.scss"
</style>

<style lang="scss">
.ant-form-explain, .ant-form-extra {
  text-align: left;
}
</style>