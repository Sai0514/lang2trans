/*
    处理数据
*/

import { GET_DETECTLANG, GET_TRANSLATION } from './mutation-types.js'
import { langFromDect, translate } from '../common/getData'
import { mapping } from '../common/config.js'


export default {
    // 获取检测语种
    async getDetectLang({
        commit,
        state
    }) {
        let query = {
            text: state.query,
            langfrom: state.langFrom
        }
        let res = await langFromDect(query)
            // console.log(res)
        let reslang = res && res.from ? res.from : 'auto'
        commit(GET_DETECTLANG, mapping.baidutog[reslang])
    },
    // 获取翻译结果
    async getTranslation({
        commit,
        state
    }, func) {
        let data = {
            text: state.query,
            to: state.langTo,
            api: state.channel
        }
        let result = await translate(data)
            // console.log(result)
        commit(GET_TRANSLATION, result.data)
        func()
    }
}