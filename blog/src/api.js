import http from './request.js'
import { Loading, Message } from 'element-ui';
const request = http({
    base_url: 'https://im.mkinit.com/wp-json/wp/v2/',//生产环境的请求地址
    header: {//统一的头部，如身份验证

    },
    success: (resolve, reject, res) => {//200的状态
        resolve(res);
    },
    error: err => {//200以外的状态
        const loading = Loading.service()
        loading.close()
        Message('200以外的错误，请自定义')
        console.log(err)
    }
})

export const apiGetInfo = () => {//获取基本信息
    return request.get('info')
}

export const apiGetCategories = () => {//获取分类
    return request.get('categories?per_page=100');
}

export const apiGetCategory = categoryId => {//获取某个分类
    return request.get('categories/' + categoryId);
}

export const apiGetLatestPosts = page => {//获取最新文章
    if (page) {
        return request.get('posts?page=' + page)
    } else {
        return request.get('posts')
    }
}

export const apiGetPost = postId => {//获取某篇文章
    return request.get('posts/' + postId)
}

export const apiGetCategoryPosts = (categoryId, page) => {//获取分类文章
    if (page) {
        return request.get('posts?categories=' + categoryId + '&page=' + page);
    }
    return request.get('posts?categories=' + categoryId);
}