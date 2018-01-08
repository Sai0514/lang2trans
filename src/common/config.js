/*
  配置参数 langs、urls
*/
export const langs = {
    channelList: [
        { value: 'google', label: '谷歌(中国)' },
        { value: 'baidu', label: '百度翻译' },
        { value: 'youdao', label: '有道翻译' }
    ],
    // 谷歌、百度、有道 接口统一映射：
    langList: [
        { value: 'auto', label: '自动检测' },
        { value: 'zh-CN', label: '中文' },
        { value: 'en', label: '英语' },
        { value: 'es', label: '西班牙语' },
        { value: 'fr', label: '法语' },
        { value: 'ru', label: '俄语' },
        { value: 'pt', label: '葡萄牙语' },
        { value: 'ja', label: '日语' },
        { value: 'zh-TW', label: '中文(繁体)' }
    ]
}

export const appkey = {
    appid: '20180105000112268',
    key: 'vJbFRGfcJz9dS0FSS7PC'
}

export const mapping = {
    gTobaidu: {
        en: 'en',
        ru: 'ru',
        pt: 'pt',
        'zh-CN': 'zh',
        'zh-TW': 'cht',
        ja: 'jp',
        es: 'spa',
        fr: 'fra'
    },
    baidutog: {
        en: 'en',
        ru: 'ru',
        pt: 'pt',
        zh: 'zh-CN',
        cht: 'zh-TW',
        jp: 'ja',
        spa: 'es',
        fra: 'fr'
    }
}