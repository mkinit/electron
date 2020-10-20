<template>
    <div class="category">
    <PostList :posts="posts" />
    <div class="readmore" v-if="more&&posts.length>0"><el-button type="primary" @click="getMorePost">查看更多…</el-button></div>
    <div class="readmore" v-if="!more&&posts.length>0">已加载完所有数据</div>
    <div class="readmore" v-if="posts.length===0">没有该分类数据</div>
  </div>
</template>

<script>
import Category from './Category.js'
export default {
    ...Category
}
</script>