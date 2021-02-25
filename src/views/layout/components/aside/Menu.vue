<template>
  <a-sub-menu :key="menuData.path">
    <template #title>
          <span>{{ menuData.meta && menuData.meta.title }}</span>
    </template>
    <template v-if="menuData.children.length">
      <a-menu-item
          :key="child.path"
          v-for="child in menuData.children">

        <router-link :to="child.path">
          {{ child.meta && child.meta.title }}
        </router-link>

      </a-menu-item>
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