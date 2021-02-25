<template>
  <a-layout id="layout-main">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible width="255">
      <LayoutAside />
    </a-layout-sider>

    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <layout-header />
      </a-layout-header>

      <a-layout-content
          :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        <layout-main />
      </a-layout-content>

    </a-layout>

  </a-layout>
</template>

<script>
import LayoutHeader from "./components/Header"
import LayoutAside from "./components/aside/Index"
import LayoutMain from "./components/Main"
import { reactive, onMounted, toRefs } from "vue";
export default {
  name: "Layout",
  components: { LayoutHeader, LayoutAside, LayoutMain },
  setup(props) {
      const data = toRefs(reactive({

      }))
    return {
        ...data
    }
  }

};
</script>
<style lang="scss">
#layout-main {
  height: 100vh;
}
</style>