
import { createI18n } from "vue-i18n";
//国际化配置
const i18n = createI18n({
    locale: "zh",
    messages: {
        zh: require("./zh"),
        en: require("./en"),
    }
})


export default i18n