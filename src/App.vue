<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <!-- 显示当前地址所对应的内容 -->
      <router-view/>
    </keep-alive>
  </div>
</template>


