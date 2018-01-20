/*
    处理数据
*/

import { GET_DETECTLANG, GET_TRANSLATION } from './mutation-types.js'
import { langFromDect, translate } from '../common/getData'

export default {
    // 获取检测语种
    async getDetectLang({
        commit,
        state
    }) {
        let text = window.localStorage.getItem('text')
        let langfrom = window.localStorage.getItem('langfrom')
        let query = {
            text,
            langfrom
        }
        let res = await langFromDect(query)
        let reslang = res && res.from ? res.from : 'auto'
        console.log(res)
        commit(GET_DETECTLANG, reslang)
    },
    // 获取翻译结果
    async getTranslation({
        commit,
        state
    }) {
        let data = window.localStorage.getItem('query')
        let transres = await translate(data)
        commit(GET_TRANSLATION, transres)
    }
}