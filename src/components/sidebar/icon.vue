<template>
  <div class="sider">

    <div class="sider-menus--top">
      logo
    </div>

    <div class="sider-menus--center">

      <div class="" v-for="item in menu" :key="item.key" >
        <a-tooltip :content="item.name" position="right">
          <div class="menu-items" :class="{ 'menu-items--active': activeMenu === item.key }" @click="handleSelect(item.key)">
            <i class="iconfont" :class="'ico-' + item.icon"></i>
          </div>
        </a-tooltip>
      </div>
    </div>

    <div class="sider-menus--bottom">
    bottom
    </div>
  </div>
</template>

<script lang='ts' setup>
// import { <icon-common /> }

import { ref } from 'vue'

const activeMenu = ref('1')

const handleSelect = (key: string) => {
  activeMenu.value = key
}

const menu = [
  {
    key: '1',
    icon: 'my',
    name: '个人中心',
  },
  {
    key: '2',
    icon: 'settings',
    name: '设置',
  },
  {
    key: '3',
    icon: 'cart',
    name: '退出登录',
  }
]
</script>

<style lang='less' scoped>
.sider {
  &-menus--center {
    display: flex;
    flex-direction: column;
    align-items: center;


    .menu-items {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 44px;
      height: 44px;
      border-radius: 22px;
      margin: 10px 0;
      cursor: pointer;

      .iconfont {

        font-size: 20px;
        color: #527dff;
        line-height: 44px;
        text-align: center;
      }
    }

    .menu-items:hover,
    .menu-items--active {
      background-color: #527dff;

      .iconfont {
        color: #fff;
      }
    }
  }
}
</style>
