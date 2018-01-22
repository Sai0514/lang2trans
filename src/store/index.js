//状态
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const state = {
    channel: 'google', //翻译渠道
    langFrom: 'auto', // 源语种
    langTo: 'zh-CN', //目标语种
    query: '', // 翻译源文本
    result: '', // 翻译结果
    valueDst: '', // 结果格式化
    hasChecked: false
}

export default new Vuex.Store({
    state,
    actions,
    mutations,
})