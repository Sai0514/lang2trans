webpackJsonp([1],{"+skl":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),s=n("Dd8w"),r=n.n(s),o=n("NYxO"),i={channelList:[{value:"google",label:"谷歌(中国)"},{value:"baidu",label:"百度翻译"},{value:"youdao",label:"有道翻译"}],langList:[{value:"auto",label:"自动检测"},{value:"zh-CN",label:"中文"},{value:"en",label:"英语"},{value:"es",label:"西班牙语"},{value:"fr",label:"法语"},{value:"ru",label:"俄语"},{value:"pt",label:"葡萄牙语"},{value:"ja",label:"日语"},{value:"zh-TW",label:"中文(繁体)"}]},l="20180105000112268",c="vJbFRGfcJz9dS0FSS7PC",u={gTobaidu:{en:"en",ru:"ru",pt:"pt","zh-CN":"zh","zh-TW":"cht",ja:"jp",es:"spa",fr:"fra"},baidutog:{en:"en",ru:"ru",pt:"pt",zh:"zh-CN",cht:"zh-TW",jp:"ja",spa:"es",fra:"fr"}},h={data:function(){return{channelList:i.channelList||[],switchWord:!0,channe:"google"}},computed:{},methods:r()({changeWord:function(t){this.switchWord=!t}},Object(o.c)(["SET_CHANNEL"]),{changeChannel:function(t){this.SET_CHANNEL(t),"google"!=t&&this.$Notice.warning({desc:"建议使用谷歌翻译！"})}})},g={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper-header"},[n("div",{staticClass:"title"},[t._v("在线自动翻译")]),t._v(" "),n("div",{staticClass:"translate-channel"},[n("Select",{staticClass:"langs",attrs:{size:"small"},on:{"on-change":t.changeChannel},model:{value:t.channe,callback:function(e){t.channe=e},expression:"channe"}},t._l(t.channelList,function(e){return n("Option",{key:e.value,attrs:{value:e.value}},[t._v("\n        "+t._s(e.label)+"\n        ")])})),t._v(" "),n("div",{staticClass:"huaci"},[n("span",[t._v("划词翻译")]),t._v(" "),n("i-switch",{staticClass:"switch",attrs:{size:"small"},on:{"on-change":t.changeWord},model:{value:t.switchWord,callback:function(e){t.switchWord=e},expression:"switchWord"}})],1)],1)])},staticRenderFns:[]};var v=n("VU/8")(h,g,!1,function(t){n("Umeb")},null,null).exports,f={data:function(){return{langList:i.langList||[]}},computed:{langF:{get:function(){return this.$store.state.langFrom},set:function(t){this.$store.state.langFrom=t}},langT:{get:function(){return this.$store.state.langTo},set:function(t){this.$store.state.langTo=t}}},methods:r()({},Object(o.c)(["SET_ORIGNLANG","SET_GOALLANG","SET_HASCHECKED","GET_TRANSLATION","SAVE_TRANSLATION"]),Object(o.b)(["getDetectLang","getTranslation"]),{chooseLangFrom:function(t){"auto"!=t&&(this.langF=t),this.SET_ORIGNLANG(t)},chooseLangTo:function(t){this.langT=t,this.SET_GOALLANG(t)},translate:function(){var t=this,e=this.$store.state.langFrom,n=this.$store.state.langTo,a=this.$store.state.query;e&&n&&a?this.getTranslation(function(){var e=t.$store.state.result,n=t.createText(e);t.SAVE_TRANSLATION(n),t.SET_HASCHECKED(!0)}):(this.SAVE_TRANSLATION(),this.SET_HASCHECKED(!1),this.$Message.warning("请输入翻译文本！"))},createText:function(t){return t.map(function(t){return t+"\r\n"}).join("").trim()}})},d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper-navbar"},[n("div",{staticClass:"translate-language"},[n("Select",{staticClass:"language From",on:{"on-change":t.chooseLangFrom},model:{value:t.langF,callback:function(e){t.langF=e},expression:"langF"}},t._l(t.langList,function(e){return n("Option",{key:e.value,attrs:{value:e.value}},[t._v("\n          "+t._s(e.label)+"\n        ")])})),t._v(" "),n("Icon",{staticClass:"arrow",attrs:{type:"ios-arrow-thin-right",size:"30"}}),t._v(" "),n("Select",{staticClass:"language To",on:{"on-change":t.chooseLangTo},model:{value:t.langT,callback:function(e){t.langT=e},expression:"langT"}},t._l(t.langList.slice(1),function(e){return n("Option",{key:e.value,attrs:{value:e.value}},[t._v("\n            "+t._s(e.label)+"\n        ")])})),t._v(" "),n("Button",{staticClass:"translate",attrs:{type:"primary"},on:{click:t.translate}},[t._v("翻 译")])],1)])},staticRenderFns:[]};var p=n("VU/8")(f,d,!1,function(t){n("wrym")},null,null).exports,T={data:function(){return{valueSrc:"",leftwords:0,rightwords:0,areaHighWordNum:2e4}},computed:r()({},Object(o.d)(["langFrom","langTo","query"]),{valueDst:{get:function(){for(;this.valueSrc;)return this.$store.state.valueDst},set:function(t){this.$store.state.valueDst=t}}}),methods:r()({},Object(o.c)(["SET_ORIGNLANG","SAVE_QUERYTEXT"]),Object(o.b)(["getDetectLang","getTranslation"]),{detectSrc:function(t){var e=this,n=t.target.value;this.SAVE_QUERYTEXT(n),this.getInputLenght(n);var a=this.$store.state.langFrom;a&&"auto"!=a||setTimeout(function(){e.getDetectLang()},500)},getInputLenght:function(t){var e=this.leftwords;this.leftwords=this.getContentLength(t,e)},getContentLength:function(t,e){for(var n=this.areaHighWordNum,a=0,s=0;s<t.length;s++){if(t.charCodeAt(s)>=0&&t.charCodeAt(s)<=255?a+=1:a+=2,a>n){alert("输入数据超长！不能再输入数据。");var r=t.substring(0,s);this.valueSrc=r,e=a;break}e=a}return e},toClosed:function(){this.valueSrc="",this.SET_ORIGNLANG("auto")}}),watch:{valueDst:function(t,e){if(t){var n=this.valueDst,a=this.rightwords;this.rightwords=this.getContentLength(n,a)}""===t&&(this.rightwords=0)},valueSrc:function(t,e){""==this.valueSrc&&(this.valueDst="",this.leftwords=0,this.rightwords=0)}},mounted:function(){this.$nextTick(function(){})}},m={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper-content"},[n("div",{staticClass:"left"},[n("Button",{staticClass:"closed",attrs:{type:"ghost",size:"small",shape:"circle",icon:"close"},on:{click:t.toClosed}}),t._v(" "),n("Input",{staticClass:"input-content",attrs:{type:"textarea",autosize:{minRows:10}},on:{"on-keyup":t.detectSrc},model:{value:t.valueSrc,callback:function(e){t.valueSrc=e},expression:"valueSrc"}}),t._v(" "),n("span",{staticClass:"left-words"},[t._v(t._s(t.leftwords)+"/"+t._s(t.areaHighWordNum))])],1),t._v(" "),n("div",{staticClass:"right"},[n("Input",{ref:"highlight",staticClass:"trans-content",attrs:{type:"textarea",autosize:{minRows:10},readonly:""},model:{value:t.valueDst,callback:function(e){t.valueDst=e},expression:"valueDst"}}),t._v(" "),n("span",{staticClass:"right-words"},[t._v(t._s(t.rightwords)+"/"+t._s(t.areaHighWordNum))])],1)])},staticRenderFns:[]};var _={name:"app",components:{"ui-header":v,"ui-navbar":p,"ui-content":n("VU/8")(T,m,!1,function(t){n("zNpv")},null,null).exports}},S={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("ui-header"),this._v(" "),e("ui-navbar"),this._v(" "),e("ui-content")],1)},staticRenderFns:[]};var C,b=n("VU/8")(_,S,!1,function(t){n("lat6")},null,null).exports,E=n("bOdI"),N=n.n(E),L="GET_DETECTLANG",w="GET_TRANSLATION",A=(C={},N()(C,"SET_CHANNEL",function(t,e){t.channel=e}),N()(C,"SET_ORIGNLANG",function(t,e){t.langFrom=e}),N()(C,"SET_GOALLANG",function(t,e){t.langTo=e}),N()(C,"SET_HASCHECKED",function(t,e){t.hasChecked=e}),N()(C,L,function(t,e){t.langFrom=e}),N()(C,w,function(t,e){t.result=e}),N()(C,"SAVE_QUERYTEXT",function(t,e){t.query=e}),N()(C,"SAVE_TRANSLATION",function(t,e){t.valueDst=e}),C),x=n("Xxa5"),O=n.n(x),F=n("exGp"),k=n.n(F),y=n("//Fk"),D=n.n(y),G=n("mtWM"),R=n.n(G);R.a.defaults.baseURL="http://localhost:3000";var z=n("hU7x"),I=n.n(z),$=n("NC6I"),H=n.n($),W=function(t){var e=t.text.trim().substring(0,20),n=u.gTobaidu[t.langfrom]||"auto",a=(new Date).getTime(),s=l,r=s+e+a+c,o=H()(r);return new D.a(function(t,r){I()("http://api.fanyi.baidu.com/api/trans/vip/translate?q="+e+"&from="+n+"&to=zh&appid="+s+"&salt="+a+"&sign="+o,null,function(e,n){return e?r(error):t(n)})})},j=function(t){return new D.a(function(e,n){var a,s,r;a="/translate",s=t,r=function(t){if(t&&t.data)return e(t)},R.a.post(a,s).then(function(t){if(!t)return null;r(t)}).catch(function(t){console.log(t)})})},U={getDetectLang:function(t){var e=this,n=t.commit,a=t.state;return k()(O.a.mark(function t(){var s,r,o;return O.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return s={text:a.query,langfrom:a.langFrom},t.next=3,W(s);case 3:r=t.sent,o=r&&r.from?r.from:"auto",n(L,u.baidutog[o]);case 6:case"end":return t.stop()}},t,e)}))()},getTranslation:function(t,e){var n=this,a=t.commit,s=t.state;return k()(O.a.mark(function t(){var r,o;return O.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r={text:s.query,to:s.langTo,api:s.channel},t.next=3,j(r);case 3:o=t.sent,a(w,o.data),e();case 6:case"end":return t.stop()}},t,n)}))()}};a.default.use(o.a);var V=new o.a.Store({state:{channel:"google",langFrom:"auto",langTo:"zh-CN",query:"",result:"",valueDst:"",hasChecked:!1},actions:U,mutations:A}),q=n("BTaQ"),K=n.n(q);n("+skl");a.default.config.productionTip=!1,a.default.use(K.a),new a.default({el:"#app",store:V,template:"<App/>",components:{App:b}})},Umeb:function(t,e){},lat6:function(t,e){},wrym:function(t,e){},zNpv:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.56cebfa85d7a043cb45c.js.map