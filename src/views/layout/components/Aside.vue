<template>
  <a-menu
      mode="inline"
      theme="dark"
      :inline-collapsed="collapsed"
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      @click="selectMenu"
      @openChange="openMenu"
  >
    <template v-for="item in routerData">
      <template v-if="!item.hidden">
        <!-- 一级菜单 -->
        <a-menu-item :key="item.path" v-if="!item.children">
          <router-link :to="item.path">{{ item.meta && item.meta.title }}</router-link>
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
              <router-link :to="child.path">{{ child.meta && child.meta.title }}</router-link>
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
      selectedKeys: localStorage.getItem("selectedKeys") ? [localStorage.getItem("selectedKeys")] :[],
      openKeys: localStorage.getItem("openKeys") ? [localStorage.getItem("openKeys")] :[]
    });

    const data = toRefs(dataItem);
    // 选择菜单
    const selectMenu = ({item, key, keyPath}) => {
      // console.log(item)
      // console.log(key)
      // console.log(keyPath)
      // console.log(localStorage.getItem("selectedKeys"))
      // console.log(localStorage.getItem("openKeys"))
      dataItem.selectedKeys = key;
      // 保存到浏览器缓存
      localStorage.setItem("selectedKeys", key)
    }
    //展开/关闭菜单
    const openMenu = (openKeys) => {
      dataItem.openKeys = openKeys;
      localStorage.setItem("openKeys", openKeys)
    }
    return {
      ...data,
      routerData,
      selectMenu,
      openMenu
      // dataItem
    }
  }


};
</script>
<style lang="scss" >
</style>

<style lang="scss" scoped>

</style>