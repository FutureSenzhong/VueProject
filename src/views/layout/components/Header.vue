<template>
  <div id="layout-header">
    <div class="header-menu">
      <a-dropdown>
        <a class="ant-dropdown-link" @click.prevent>
          <img src="../../../assets/logos.jpeg" style="height: 40px;width: 40px;" alt="">
          <DownOutlined />
        </a>
        <template #overlay>
          <a-menu>
            <a-menu-item key="0">
              <div class="menu-item">12345678910</div>
            </a-menu-item>
            <a-menu-item key="1">
              <div class="menu-item menu-lang">
                <span
                    v-for="item in lang" :key="item.value"
                    @click="changeLanguage(item.value)"
                    :class="{current: current_lang === item.value}"
                >{{ item.label }}
                </span>
              </div>
            </a-menu-item>
            <a-menu-divider />
            <a-menu-item key="3">
              <div class="menu-item">{{ $t("header_menu.logout") }}</div>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted, toRefs } from "vue";
import { useI18n } from "vue-i18n";

export default {
  name: "Header",
  setup(props) {

    //扩展语言
    const { locale } = useI18n({useScope: "global"})

    //定义表单数据
    const dataItem = reactive({
      lang: [
          {label: "中文", value: "zh"},
          {label: "English", value: "en"},
      ],
      current_lang: "zh",
    });

    const data = toRefs(dataItem)

    //改变语言
    const changeLanguage = (lang) => {
      locale.value = lang
      dataItem.current_lang = lang
    }

    //生命周期函数，挂摘完成之后
    onMounted(()=>{

    })
    return {
      ...data,
      // 把方法返回才能调用
      changeLanguage,
    };
  }

};
</script>
<style lang="scss" >
</style>

<style lang="scss">
#layout-header {
  padding: 0 20px;
  height: 64px;
}
</style>