<template>
  <div class="wrapper-content">
    <div class="left">
        <Icon type="close" size="12px" class="closed"></Icon>
        <Input v-model="valueSrc" type="textarea" :autosize="{minRows: 10}" 
        class="input-content" @on-keyup="detectSrc"></Input>
        <span class="left-words">{{leftwords}}/{{areaHighWordNum}}</span>
    </div>
    <div class="right">
        <Input v-model="valueDst" type="textarea" :autosize="{minRows: 10}" 
        class="trans-content" ref="highlight" readonly></Input>
        <span class="right-words">{{rightwords}}/{{areaHighWordNum}}</span>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'

export default{
  data(){
    return{
      valueSrc: '',
      valueDst: '',
      valueArr: '',
      leftwords: 0,
      rightwords: 0,
      areaHighWordNum: 20000
    }
  },
  computed:{
			...mapState([
				'langFrom', 
			]),
	},
  methods:{
    ...mapMutations([
		  'GET_DETECTLANG', 'GET_TRANSLATION' ,'SAVE_QUERYTEXT', 'SAVE_ISCHECKED'
    ]),
    ...mapActions([
      'getDetectLang',
      'getTranslation'
    ]),
    detectSrc(e){
      let text = e.target.value
      this.SAVE_QUERYTEXT(text)
      let from = this.$store.state.langFrom
      if (!from || from == 'auto') {
        window.localStorage.setItem('langfrom', from)
        window.localStorage.setItem('text', text)
      }
      setTimeout(()=>{
        this.getDetectLang();
      }, 500)
    }
  }
}
</script>

<style>
.wrapper-content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
    width: 82vw;
    margin: 0 auto;
}

.wrapper-content div{
    width: 41vw;
    display: flex;
    flex-direction: column;
}
.wrapper-content span{
    color: #808080;
    text-align: right;
    margin-right: 5px;
}

.wrapper-content textarea {
    border-radius: 0;
    resize: none;
    padding: 10px;
}

.trans-content .ivu-input{
    background: rgba(221, 222, 225, 0.2);
}

.trans-content .highlight{
    background: red
}

.left {
    position: relative;
}
.left .closed {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 1;
    color: rgba(128,128,128, 0.3);
    cursor: pointer;
}
</style>



