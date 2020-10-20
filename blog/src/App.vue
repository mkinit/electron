<template>
  <div id="app">
    <BlogHeader />
    <router-view />
    <Bottom />
  </div>
</template>

<script>
import BlogHeader from "@/components/nav/nav.vue";
import Bottom from "@/components/bottom/bottom.vue";
import { apiGetInfo, apiGetCategories } from "@/api.js";
export default {
  name: "App",
  components: {
    BlogHeader,
    Bottom,
  },
  mounted() {
    //获取网站信息
    const bloginfo = sessionStorage.getItem("bloginfo");
    if (bloginfo) {
      this.$store.commit("setWebsiteInfo", JSON.parse(bloginfo));
    } else {
      apiGetInfo().then((res) => {
        this.$store.commit("setWebsiteInfo", res.data);
        sessionStorage.setItem("bloginfo", JSON.stringify(res.data));
      });
    }

    //获取分类
    const categories = sessionStorage.getItem("categories");
    if (categories) {
      this.$store.commit("setCategories", JSON.parse(categories));
    } else {
      apiGetCategories().then((res) => {
        const data = res.data;
        const parent = [];
        data.forEach((cate) => {
          if (cate.parent === 0) {
            //parent===0为1级分类
            cate.children = [];
            parent.push(cate);
          }
        });

        parent.forEach(parent=>{
          data.forEach(cate=>{
            if(cate.parent===parent.id){
              parent.children.push(cate)
            }
          })
        })


        sessionStorage.setItem("categories", JSON.stringify(parent));
        this.$store.commit("setCategories", parent);
      });
    }
  },
};
</script>

<style lang="less">
#app {
  padding-top: 4em;
}
ul {
  padding: 0;
}
li {
  list-style: none;
}
a {
  color:#999;
  text-decoration: none;
}
</style>
