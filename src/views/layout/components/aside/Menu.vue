<template>
  <a-sub-menu :key="menuData.path">
    <template #title>
          <span>{{ menuData.meta && menuData.meta.title }}</span>
    </template>
    <template v-if="menuData.children.length">
      <template v-for="item in menuData.children">
        <a-menu-item
            :key="item.path"
            v-if="!item.children">

          <router-link :to="item.path">
            {{ item.meta && item.meta.title }}
          </router-link>

        </a-menu-item>
        <Menu v-else :menuData="item" />
      </template>

    </template>
  </a-sub-menu>

</template>

<script>

export default {
  name: "Menu",
  // 接受父组件的值
  props: {
    // 命名需要一致
    menuData: {
      type: Object,
      default: () => ({})
    }
  },
  setup(){



    return {

    }
  }

}


</script>