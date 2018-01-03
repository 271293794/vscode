
import jsonp from 'common/js/jsonp';
import { commonParams, options } from './config'
export function getRecommend() {
    const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
    // Object.assign方法用于对象的合并
    var data = Object.assign({}, commonParams, {
        // 用户的 QQ 号，未登录则为 0
        uin: 0,
        needNewCode: 1
    }) 

    return jsonp(url, data, options)
}