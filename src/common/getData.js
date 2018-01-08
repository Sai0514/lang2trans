import { appkey, mapping } from './config.js'
import { post, get } from './request.js'
import * as $ from 'jquery'
import MD5 from 'js-md5'

// //获取检测结果
export const langFromDect = (query) => {
    var salt = (new Date).getTime();
    var appid = appkey.appid
    var str1 = appid + query.text + salt + appkey.key;
    var sign = MD5(str1);
    console.log(query.langFrom);
    var fro = mapping.gTobaidu[query.langFrom] || 'auto';
    var to = mapping.gTobaidu[query.langTo] || 'zh';
    $.ajax({
        url: 'http://api.fanyi.baidu.com/api/trans/vip/translate',
        type: 'get',
        dataType: 'jsonp',
        data: {
            q: query.text,
            appid: appid,
            salt: salt,
            from: fro,
            to: to,
            sign: sign
        },
        success: function(data) {
            if (data && data.from) {
                let langFrom = mapping.baidutog[data.from]
                return langFrom;
            }
        }
    })
}

export const translate = (data) => {
    post('/translate', data, (res) => {
        if (res && res.data) {
            console.log(res)
            let result = res && res.data
        }
    })
}