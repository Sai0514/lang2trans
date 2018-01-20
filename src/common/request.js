/*
  请求方式 request(get, post)
*/
import axios from 'axios';

//配置接口地址
axios.defaults.baseURL = 'http://localhost:3000';

function get(url, params, callback) {
    axios.get(url, params)
        .then((res) => {
            if (res) {
                callback(res)
            } else {
                return null
            }
        }).catch((error) => {
            console.log(error)
        });
}

function post(url, data, callback) {
    axios.post(url, data)
        .then((res) => {
            if (res) {
                callback(res)
            } else {
                return null
            }
        }).catch((error) => {
            console.log(error)
        })
}

export { post, get }