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
              <div class="menu-item">
                <span>中文</span>
                <span>英文</span>
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

export default {
  name: "Header",

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