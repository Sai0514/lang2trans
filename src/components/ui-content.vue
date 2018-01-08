<template>
  <div class="wrapper-content">
    <Input v-model="valueSrc" type="textarea" :autosize="{minRows: 6}" 
      class="input-content" @on-keyup="detectSrc"></Input>
    <Input v-model="valueDst" type="textarea" :autosize="{minRows: 6}" 
      class="trans-content"></Input>
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
    }
  },
  computed:{
			...mapState([
				'langFrom', 
			]),
	},
  methods:{
    ...mapMutations([
		  'GET_TRANSLATION' ,'SAVE_QUERYTEXT', 'ISCHECKED'
    ]),
    ...mapActions([
      'getDetectLang'
    ]),
    detectSrc(e){
      let text = e.target.value;
      let from = this.$store.state.langFrom 
      debugger
      if (!from || from == 'auto') {
          this.SAVE_QUERYTEXT(text);
          try {
              this.getDetectLang(()=>{
               
                this.ISCHECKED(true);
                console.log(this.$store.state.hasChecked)
                console.log('jjjjjjjjjj')
              });
          } catch (error) {
              console.log(error)
          }
        
      }
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
    width: 960px;
    margin: auto;
}

.wrapper-content textarea {
    border-radius: 0;
    resize: none;
}

.trans-content .ivu-input{
    background: rgba(221, 222, 225, 0.2);
}

.trans-content .highlight{
    background: yellowgreen;
}
</style>



