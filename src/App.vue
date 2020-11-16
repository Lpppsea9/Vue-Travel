<template>
  <div id="app">
    <!-- 防止多次请求json数据 -->
    <keep-alive exclude="Detail">
      <!-- 显示当前地址所对应的内容 -->
      <router-view/>
    </keep-alive>
  </div>
</template>


