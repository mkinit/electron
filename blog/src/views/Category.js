import { apiGetCategoryPosts } from '@/api.js'
import { Loading } from 'element-ui'
import PostList from "@/components/post-list/post-list.vue";
import {mapState} from 'vuex'
export default {
    name: 'Category',
    components:{
        PostList
    },
    data() {
        return {
            posts: [],
            more: true,
            current_page: 1,
            current_scroll_top: 0,
            cate_id:0
        }
    },
    computed:{
        ...mapState(['categories'])
    },
    watch:{
        $route(){//监听路由
            this.cate_id = this.$route.params.id
            this.posts = []
            this.more = true
            this.current_page = 1
            this.getPosts();
        }
    },
    methods: {
        getMorePost() {
            this.getPosts(this.current_page + 1)
            this.current_scroll_top = document.documentElement.scrollTop
        },
        getPosts(page) {
            const loading = Loading.service()
            apiGetCategoryPosts(this.cate_id, page).then(res => {
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
        const categories = this.categories || JSON.parse(sessionStorage.getItem("categories"));
        categories.forEach(parent=>{
            if(parent.children.length>0){
                parent.children.forEach(child=>{
                    if(child.id==this.cate_id){
                        document.title = child.name + ' - 水秋玄'
                    }
                })
            }else{
                if(parent.id==this.cate_id){
                    document.title = parent.name + ' - 水秋玄'
                }
            }
        })
    },
    created(){
        this.cate_id = this.$route.params.id     
    }
}