//处理数据
import { GET_DETECTLANG, GET_TRANSLATION } from './mutation-types.js'
import { langFromDect, translate } from '../common/getData'

export default {
    // 获取检测语种
    async getDetectLang({
        commit,
        state
    }, func) {
        let query = {
            text: state.query,
            langFrom: state.langFrom,
            langTo: state.langTo
        };
        let reslang = await langFromDect(query)
        func();
        console.log(reslang)
        commit(GET_DETECTLANG, reslang)
    },
    // 获取翻译结果
    async getTranslation({
        commit,
        state
    }) {
        let data = {
            query: state.query,
            to: state.langTo
        }
        let transres = await translate(data)
        commit(GET_TRANSLATION, transres)
    }
}