import {mapState} from 'vuex'
export default {
    name: 'BlogHeader',
    data() {
        return {
            bloginfo: null,
        }
    },
    computed:{
        ...mapState(['categories'])
    }
}