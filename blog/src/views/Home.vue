<template>
  <div class="home">
    <PostList :posts="posts" />
    <div class="readmore" v-if="more&&posts.length>0"><el-button type="primary" @click="getMorePost">查看更多…</el-button></div>
    <div class="readmore" v-if="!more">已加载完所有数据</div>
  </div>
</template>

<script>
import Home from './Home.js'
export default {
  ...Home
};
</script>

<style lang="less">
</style>
