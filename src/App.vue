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

    <keep-alive>
        <router-view />
    </keep-alive>
    意思就是我的路由的内容被加载过一次之后，
    就把路由中的内容放到内存之中，下一次再进这个路由之中，
    不需要重新渲染这个组件，重新执行钩子函数，只需要从内存里把
    以前的内容拿出来显示到页面上就可以了
*/

