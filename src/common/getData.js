/*
    异步获取：检测语种、翻译结果
*/

import { appkey, mapping } from './config.js'
import { post } from './request.js'
import jsonp from 'jsonp'
import MD5 from 'js-md5'

// //获取检测结果

export const langFromDect = (query) => {
    let text = query.text.trim().substring(0, 20); // jsonp调用百度接口，返回检测结果，text长度限制
    let langfrom = mapping.gTobaidu[query.langfrom] || 'auto';
    let salt = (new Date).getTime();
    let appid = appkey.appid;
    let str1 = appid + text + salt + appkey.key;
    let sign = MD5(str1);

    return new Promise(function(resolve, reject) {
        jsonp(`http://api.fanyi.baidu.com/api/trans/vip/translate?q=${text}&from=${langfrom}&to=zh&appid=${appid}&salt=${salt}&sign=${sign}`,
            null,
            function(err, data) {
                if (err) {
                    return reject(error);
                } else {
                    return resolve(data);
                }
            })
    });
};

export const translate = (data) => {
    post('/translate', data, (res) => {
        if (res && res.data) {
            console.log(res)
                // let result = res && res.data
        }
    })
}