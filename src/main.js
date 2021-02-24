import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import Antd from "ant-design-vue";
import { createI18n } from "vue-i18n";
import "ant-design-vue/dist/antd.css";

//国际化配置
const i18n = createI18n({
    locale: "zh",
    messages: {
        zh: require("./language/zh"),
        en: require("./language/en"),
    }
})

createApp(App)
  .use(store)
  .use(router)
  .use(Antd)
  .use(i18n)
  .mount("#app");
