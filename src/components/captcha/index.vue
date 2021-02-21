<template>
  <div id="nc" class="nc-container captcha-1"></div>
</template>

<script>
import { onMounted } from "vue"
import "./awsc";
export default {
  name: "Captcha",
  setup(){
    onMounted(()=>{
      // 实例化nc
      AWSC.use("nc", function (state, module) {
        // 初始化
        window.nc = module.init({
          // 应用类型标识。它和使用场景标识（scene字段）一起决定了滑动验证的业务场景与后端对应使用的策略模型。您可以在人机验证控制台的配置管理页签找到对应的appkey字段值，请务必正确填写。
          appkey: "FFFF0N00000000009C62",
          //使用场景标识。它和应用类型标识（appkey字段）一起决定了滑动验证的业务场景与后端对应使用的策略模型。您可以在人机验证控制台的配置管理页签找到对应的scene值，请务必正确填写。
          scene: "nc_login",
          // 声明滑动验证需要渲染的目标ID。
          renderTo: "nc",
          //前端滑动验证通过时会触发该回调参数。您可以在该回调参数中将会话ID（sessionId）、签名串（sig）、请求唯一标识（token）字段记录下来，随业务请求一同发送至您的服务端调用验签。
          success: function (data) {
            // TODO 子组件需要返回给父组件
            window.console && console.log(data.sessionId)
            window.console && console.log(data.sig)
            window.console && console.log(data.token)
          },
          // 滑动验证失败时触发该回调参数。
          fail: function (failCode) {
            window.console && console.log(failCode)
          },
          // 验证码加载出现异常时触发该回调参数。
          error: function (errorCode) {
            window.console && console.log(errorCode)
          }
        });
      })
    })
  }
}






</script>




<style lang="scss" scoped>
// scoped 定义局部生效, 当前文件生效
</style>

<style lang="scss">
// 全局样式
.nc-container #nc_1_wrapper {width: 285px !important; }
.captcha-1 {margin-bottom: 10px !important; margin-top: 20px !important;}

</style>