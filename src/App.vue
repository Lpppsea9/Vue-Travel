<template>
    <div id="app">
        <keep-alive exclude="Detail">
                <router-view/>
        </keep-alive>
    </div>
</template>
/* 
    keep-alive？ 防止多次请求json文件 

    <router-view></router-view>
    显示的就是当前路由地址所对应的内容
*/

