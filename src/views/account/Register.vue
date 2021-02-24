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
          <a-row :gutter="16">
            <a-col :span="14">
              <a-input v-model:value="account_form.code" type="password" autocomplete="off"></a-input>
            </a-col>
            <a-col :span="10">
              <a-button
                  type="danger"
                  :disabled="code_button_disabled"
                  :loading="code_button_loading"
                  @click="getCode"
                  block>
                {{ code_button_text }}
              </a-button>
            </a-col>
          </a-row>
        </a-form-item>

        <a-form-item>
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
import { message } from "ant-design-vue";
// 局部组件导入
import Captcha from "../../components/captcha";
//导入外部方法
import { Phone, Pwd } from "@/utils/verification";

export default {
  name: "Login",
  components: { Captcha },
  setup(props) {
    //自定义验证方法
    const checkUsername = async (rule, value, callback) => {
      console.log(value);
      if(!value){
        return Promise.reject("账号必填")
      } else if (!Phone(value)) {
        console.log("phone", !Phone(value))
        return Promise.reject("请输入11位手机号")
      } else {
        return Promise.resolve()
      }
    };

    const  checkPassword = async (rule, value, callback) => {
      if(!value){
        return Promise.reject("密码必填")
      } else if (!Pwd(value)) {
        console.log("pwd", !Pwd(value))
        return Promise.reject("密码必须包含6-16个字符" +
            "，1个数字\n" +
            "，2个小写字母\n" +
            "，2个大写字母\n" +
            "，1个特殊字符")
      } else {
        return Promise.resolve()
      }
    };

    const  checkPasswords = async (rule, value, callback) => {
      const password = formConfig.account_form.password
      if(!value){
        return Promise.reject("确认密码必填")
      } else if (!Pwd(value)) {
        console.log("pwds", !Pwd(value))
        return Promise.reject("密码必须包含6-16个字符" +
            "，1个数字\n" +
            "，2个小写字母\n" +
            "，2个大写字母\n" +
            "，1个特殊字符")
      } else if (value && (password !== value)) {
        return Promise.reject("两次密码不一致")
      } else {
        return Promise.resolve()
      }
    };

    const  checkCode = async (rule, value, callback) => {
      if(!value){
        return Promise.reject("请输入验证码")
      } else {
        return Promise.resolve()
      }
    };
    //定义表单数据
    const formConfigData = reactive({
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
        password: [{validator: checkPassword, trigger: "change"}],
        passwords: [{validator: checkPasswords, trigger: "change"}],
        code: [{validator: checkCode, trigger: "change"}]
      },
      code_button_text: "获取验证码",
      code_button_loading: false,
      code_button_disabled: false,
      second: 60,
      timer: null,
    });
    const data = toRefs(formConfigData)

    //提交表单的方法
    const handleFinish = () => {
        alert("hello")
    }

    //获取验证码
    const getCode = () => {
      if (!formConfigData.account_form.username) {
        message.error("请输入账号")
        return false;
      }
      if (!formConfigData.account_form.password) {
        message.error("请输入密码")
        return false;
      }
      if (!formConfigData.account_form.passwords) {
        message.error("请输入确认密码")
        return false;
      }
      if(formConfigData.timer !== null) {
        clearInterval(formConfigData.timer);
        formConfigData.timer = null;
      }
      formConfigData.timer = setInterval(() => {
        let s = formConfigData.second--;
        formConfigData.code_button_text = `剩余${s}秒`;
        // formConfigData.code_button_disabled = true;
        if (s <= 0) {
          clearInterval(formConfigData.timer)
          formConfigData.timer = null;
          formConfigData.second = 60;
          formConfigData.code_button_text = "重新获取";
          // formConfigData.code_button_disabled = false;
        }

      }, 1000)
    }
    //生命周期函数，挂摘完成之后
    onMounted(()=>{

    })
    return {
      // formConfig
      ...data,
      // 把方法返回才能调用
      handleFinish,
      getCode,
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