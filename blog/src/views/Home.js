import { apiGetLatestPosts } from '@/api.js'
import { Loading } from 'element-ui'
import PostList from "@/components/post-list/post-list.vue";
export default {
    name: 'Home',
    data() {
        return {
            posts: [],
            more: true,
            current_page: 1,
            current_scroll_top:0
        }
    },
    components: {
        PostList
    },
    methods: {
        getMorePost() {
            this.getPosts(this.current_page + 1)
            this.current_scroll_top = document.documentElement.scrollTop
        },
        getPosts(page) {
            const loading = Loading.service()
            apiGetLatestPosts(page).then(res => {
                const posts = res.data
                if (page) {
                    this.posts.push(...posts)
                    this.current_page += 1
                } else {
                    this.posts = posts
                }

                if (posts.length < 10) {
                    this.more = false
                }

                this.$nextTick(() => {
                    document.documentElement.scrollTop = this.current_scroll_top
                    loading.close();
                });
            })
        }
    },
    mounted() {
        this.getPosts()
        document.title = '首页 - 水秋玄个人博客'
    }
}