//写方法
import {
    SET_CHANNEL,
    SET_ORIGNLANG,
    SET_GOALLANG,
    SET_HASCHECKED,
    GET_DETECTLANG,
    GET_TRANSLATION,
    SAVE_QUERYTEXT,
    SAVE_TRANSLATION
} from './mutation-types.js'

export default {
    // 设置翻译渠道
    [SET_CHANNEL](state, channel) {
        state.channel = channel
    },
    // 设置源语种
    [SET_ORIGNLANG](state, lang) {
        state.langFrom = lang
    },
    // 设置目标语种
    [SET_GOALLANG](state, lang) {
        state.langTo = lang
    },
    // 是否已检测
    [SET_HASCHECKED](state, ischecked) {
        state.hasChecked = ischecked
    },

    // 获取检测语种
    [GET_DETECTLANG](state, lang) {
        state.langFrom = lang
    },
    // 获取翻译结果
    [GET_TRANSLATION](state, result) {
        state.result = result
    },

    // 保存查询文本
    [SAVE_QUERYTEXT](state, query) {
        state.query = query
    },
    // 保存格式化翻译结果
    [SAVE_TRANSLATION](state, translation) {
        state.valueDst = translation
    }
}