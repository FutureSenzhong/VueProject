<template>
  <a-layout id="layout-main">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
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
import LayoutAside from "./components/Aside"
import LayoutMain from "./components/Main"
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
export default {
  name: "Layout",
  components: { LayoutHeader, LayoutAside, LayoutMain }

};
</script>
<style lang="scss">
#layout-main {
  height: 100vh;
}
</style>