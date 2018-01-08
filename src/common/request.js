/*
  请求方式 request(get, post)
*/
import axios from 'axios';

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