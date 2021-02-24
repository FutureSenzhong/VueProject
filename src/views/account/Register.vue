<template>
  <div class="account">
    <div class="form-wrap">
      <a-form
        name="custom-validation"
        ref="ruleForm"
        :model="account_form"
        :rules="rules_form"
        @finish="handleFinish">  <!-- 绑定事件 -->

        <a-form-item name="username">
          <label>账号</label>
          <a-input v-model:value="account_form.username" type="text" autocomplete="off" />
        </a-form-item>

        <a-form-item name="password">
          <label>密码</label>
          <a-input v-model:value="account_form.password" type="password" autocomplete="off" />
        </a-form-item>

        <a-form-item name="passwords">
          <label>确认密码</label>
          <a-input v-model:value="account_form.passwords" type="password" autocomplete="off" />
        </a-form-item>

        <a-form-item name="code">
          <label>验证码</label>
          <a-row>
            <a-col :span="14">
              <a-input v-model:value="account_form.code" type="password" autocomplete="off"></a-input>
            </a-col>
            <a-col :span="10">
              <a-button type="danger" html-type="submit" block>获取验证码</a-button>
            </a-col>
          </a-row>
        </a-form-item>

        <a-form-item>
          <label>&nbsp</label>
          <captcha />
          <label style="margin: 1px, 0, 3px, 0">&nbsp</label>
        </a-form-item>

        <a-form-item>
            <a-button type="primary" html-type="submit" block>
              注册
            </a-button>
        </a-form-item>

      </a-form>
      <div class="text-center fs-12">
        <a href="" class="color-white">忘记密码</a> |
        <router-link to="/login">登录</router-link>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { reactive, onMounted, toRefs } from "vue";
// 局部组件导入
import Captcha from "../../components/captcha";
//导入外部方法
import { checkPhone } from "@/utils/verification";

export default {
  name: "Login",
  components: { Captcha },
  setup(props) {
    //自定义验证方法
    const checkUsername = async (rule, value, callback) => {
      console.log(value);
      if(!value){
        return Promise.reject("账号必填")
      } else if (!checkPhone(value)) {
        return Promise.reject("请输入11位手机号")
      } else {
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
        passwords: "",
        code: ""
      },
      rules_form: {
        username: [{validator: checkUsername, trigger: "change"}],
        password: [],
        passwords: [],
        code: []
      }
    });
    const data = toRefs(formConfig)

    //提交表单的方法
    const handleFinish = () => {
        alert("hello")
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
