<template>
<a-layout>

<!-- <a-layout-header><navbar /></a-layout-header> -->
      <a-layout>

        <a-layout-sider  style="width: 64px;"><icon /></a-layout-sider>
        <a-layout-sider style="width: 164px;"><sidebar /></a-layout-sider>
        <a-layout-content><router-view /></a-layout-content>
      </a-layout>
</a-layout>
</template>

<script lang='ts' setup>
  import navbar from '@/components/navbar/index.vue'
  import sidebar from '@/components/sidebar/index.vue'
  import icon from '@/components/sidebar/icon.vue'
</script>
