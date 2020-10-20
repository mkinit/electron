<template>
  <div class="post-list">
    <el-card class="post-item" v-for="post in posts" :key="post.id">
      <article>
          <router-link :to="'/post/'+post.id" class="title" v-html="post.title.rendered"></router-link>
          <div class="content" v-html="post.excerpt.rendered"></div>
          <div class="bottom">
              <i class="el-icon-date"></i>
              {{post.date.replace('T',' ')}}
          </div>
      </article>
    </el-card>
  </div>
</template>
<script>
import post_list from "./post-list.js";
export default {
  ...post_list,
};
</script>
<style lang="less">
@import url("./post-list.less");
</style>