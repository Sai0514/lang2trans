<template>
  <div class="wrapper-content">
    <div class="left">
        <Button type="ghost" size="small" shape="circle"
         @click="toClosed" icon="close" class="closed"></Button>
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
      leftwords: 0,
      rightwords: 0,
      areaHighWordNum: 20000
    }
  },
  computed:{
    ...mapState([
      'langFrom', 
      'langTo',
      'query'
    ]),
    valueDst: {
      get: function () {
        while (this.valueSrc) {
          return this.$store.state.valueDst
        }
      },
      set: function (newValue) {
        this.$store.state.valueDst = newValue
      }
    }
	},
  methods:{
    ...mapMutations([
      'SET_ORIGNLANG',
		  'SAVE_QUERYTEXT'
    ]),
    ...mapActions([
      'getDetectLang',
      'getTranslation'
    ]),
    detectSrc(e){
      let text = e.target.value
      this.SAVE_QUERYTEXT(text)
      this.getInputLenght(text)
      let from = this.$store.state.langFrom
      if (!from || from == 'auto') {
        setTimeout(()=>{
          this.getDetectLang();
        }, 500)
      }
    },
    getInputLenght(text) {
        let dst = this.leftwords;
        this.leftwords = this.getContentLength(text, dst)
    },
    getContentLength(content, dst){
        const hidWordNum = this.areaHighWordNum;
        var sum = 0;  
        for (var i=0; i<content.length; i++) {  
            if ((content.charCodeAt(i)>=0)&&(content.charCodeAt(i)<=255)) {  
                sum = sum + 1;  
            } else {  
                sum = sum + 2;  
            }  
            if (sum>hidWordNum) {  
                alert("输入数据超长！不能再输入数据。");  
                var str = content.substring(0, i);   
                this.valueSrc = str;
                dst = sum;  
                break;  
            } else {  
                dst = sum;    
            }  
        } 
        return dst 
    },
    toClosed() {
      this.valueSrc = '';
      this.SET_ORIGNLANG('auto')
    }
  },
  watch: {
    valueDst(val, oldVal) {
      if (val) {
        let out = this.valueDst;
        let len = this.rightwords;
        this.rightwords = this.getContentLength(out, len)
      } 

      if (val === ''){
        this.rightwords = 0
      }
    },
    valueSrc(val, oldVal) {
      if (this.valueSrc == '') {
        this.valueDst = '';
        this.leftwords = 0;
        this.rightwords = 0;
      }
    }
  },
  mounted() {
    this.$nextTick(()=>{
      // this.$refs.highlight
    })
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
    top: 5px;
    right: 5px;
    z-index: 1;
    color: rgba(128,128,128, 0.3);
    cursor: pointer;
    border: none;
}
</style>



