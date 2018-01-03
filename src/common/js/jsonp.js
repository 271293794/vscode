import originJSONP from 'jsonp'

export default function jsonp(url, data, option) {
    // url 上可能已有部分参数，所以判断一下
    url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)
    // eslint-disable-next-line
    return new Promise((resolve, reject) => {
        originJSONP(url, option, (err, data) => {
            if (!err)
                resolve(data)
            else
                reject(err)
        })
    })
}

// 把一个对象转化为查询字符串，如 company=1001&name=信新
function param(data) {
    let query_str = '';
    for (let k in data) {
        let value = data[k] != undefined ? data[k] : ''
        query_str += `&${k}=${encodeURIComponent(value)} `
    }
    /* 有可能 data 是个空对象，那么 query_str 则为 '' ，
    如果不为空对象，则多了一个 '&' 符号，所以去掉 */
    return query_str ? query_str.substring(1) : ''
}