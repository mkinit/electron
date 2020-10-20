<template>
  <el-menu class="blog-menu" mode="horizontal">
    <el-menu-item class="home-link"><router-link to="/">水秋玄博客</router-link></el-menu-item>
    <template v-for="parent in categories">
      <el-menu-item v-if="parent.children.length === 0" :index="parent.id.toString()" :key="parent.id"><router-link :to="'/category/'+parent.id">{{ parent.name }}</router-link></el-menu-item>
      <el-submenu v-else :index="parent.id.toString()" :key="parent.id">
        <span slot="title">{{ parent.name }}</span>
        <el-menu-item :key="child.id" :index="child.id.toString()" v-for="child in parent.children"><router-link :to="'/category/'+child.id">{{ child.name }}</router-link></el-menu-item>
      </el-submenu>
    </template>
  </el-menu>
</template>
<script>
import nav from "./nav.js";
export default {
  ...nav,
};
</script>
<style lang="less">
@import url("./nav.less");
</style>