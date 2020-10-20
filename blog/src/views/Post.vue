<template>
  <div class="post">
    <el-card v-if="post">
      <h2 class="title" v-html="post.title.rendered"></h2>
      <div class="content" v-html="post.content.rendered"></div>
    </el-card>
  </div>
</template>

<script>
import Post from "./Post.js";
export default {
  ...Post,
};
</script>

<style lang="less">
@import url('./Post.less');
</style>
