import { apiGetPost } from '@/api.js'
import { Loading } from 'element-ui'
export default {
    name: 'Post',
    data() {
        return {
            post: null,
        }
    },
    methods: {
        getPost(id){
            const loading = Loading.service()
            apiGetPost(id).then(res=>{
                this.post = res.data
                this.$nextTick(() => {
                    document.title = res.data.title.rendered
                    loading.close();
                });
            })
        }
    },
    mounted() {
        
    },
    created(){
        this.getPost(this.$route.params.id)
    }
}