<template>
  <a-menu
      mode="inline"
      theme="dark"
      :inline-collapsed="collapsed"
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
  >
    <template v-for="item in routerData">
      <template v-if="!item.hidden">
        <!-- 一级菜单 -->
        <a-menu-item :key="item.path" v-if="!item.children">
          <span>{{ item.meta && item.meta.title }}</span>
        </a-menu-item>

        <!-- 二级子菜单 -->
        <a-sub-menu v-else :key="item.path">
          <template #title>
          <span>
            <span>{{ item.meta && item.meta.title }}</span>
          </span>
          </template>
          <template v-if="item.children.length">
            <a-menu-item :key="child.path" v-for="child in item.children">
              {{ child.meta && child.meta.title }}
            </a-menu-item>
          </template>
        </a-sub-menu>
      </template>
    </template>
  </a-menu>
</template>

<script>
import { reactive, toRefs } from "vue";
import { useRoute, useRouter } from "vue-router";

export default {
  name: "Aside",
  setup(props) {
    const { options } = useRouter();

    // 路由
    const routerData = options.routes;

    // 数据
    const dataItem = reactive({
      selectedKeys: ["3"],
      openKeys: ["sub1"]
    });

    const data = toRefs(dataItem);

    return {
      ...data,
      routerData
      // dataItem
    }
  }


};
</script>
<style lang="scss" >
</style>

<style lang="scss" scoped>

</style>