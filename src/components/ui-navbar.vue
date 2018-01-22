<template>  
  <div class="wrapper-navbar">
    <div class="translate-language">
      <Select v-model="langF" class="language From" @on-change="chooseLangFrom">
          <Option v-for="item in langList" :value="item.value" :key="item.value">
            {{item.label}}
          </Option>
      </Select>
      <Icon type="ios-arrow-thin-right" size="30" class="arrow"></Icon>
      <Select v-model="langT" class="language To" @on-change="chooseLangTo">
          <Option v-for="item in langList.slice(1)" :value="item.value" :key="item.value">
              {{ item.label }}
          </Option>
      </Select>
      <Button type="primary" class="translate" @click="translate">翻 译</Button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
import { langs, mapping } from '../common/config.js'

export default{
  data(){
    return{
        langList: langs.langList || []
    }
  },
  computed:{
    langF:{
        get: function () {
            return this.$store.state.langFrom
        },
        set: function (newValue) {
            this.$store.state.langFrom = newValue
        }
    },
    langT:{
        get: function () {
            return this.$store.state.langTo
        },
        set: function (newValue) {
            this.$store.state.langTo = newValue
        }
    }
  },
  methods: {
    ...mapMutations([
        'SET_ORIGNLANG',
        'SET_GOALLANG',
        'SET_HASCHECKED',
        'GET_TRANSLATION',
        'SAVE_TRANSLATION'
    ]),
    ...mapActions([
        'getDetectLang',
        'getTranslation'
    ]),
    chooseLangFrom(value) {
        if (value!= 'auto') {
            this.langF = value;
        } 
        this.SET_ORIGNLANG(value)
        // console.log(this.$store.state.langFrom)
    },
    chooseLangTo(value) {
        this.langT = value;
        this.SET_GOALLANG(value);
        // console.log(this.$store.state.langTo)
    },
    translate(){
        let from = this.$store.state.langFrom
        let to = this.$store.state.langTo
        let query = this.$store.state.query
        if (from && to && query) {
            this.getTranslation(()=>{
                let trans = this.$store.state.result;
                let translation = this.createText(trans);
                this.SAVE_TRANSLATION(translation);
                this.SET_HASCHECKED(true);
                // console.log(this.$store.state.valueDst)
            }); 
        } else {
            this.SAVE_TRANSLATION();
            this.SET_HASCHECKED(false);
            this.$Message.warning('请输入翻译文本！');
        }
    },
    createText(arr) {
        let newArr = arr.map(item => item + '\r\n');
        return newArr.join('').trim()
    }
  }
}
</script>

<style>
.wrapper-navbar {
    width: 82vw;
    margin: 0 auto;
    font-size: 62.5%;
}

.translate-language {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 10px;
    height: 48px;    
}

.translate-language .language {
    width: 11rem;
}

.translate-language .translate {
    width: 8rem;
    margin-left: 20px;
}

.translate-language .arrow {
    display: inline;
    color: #dddee1;
}

.language,
.arrow {
    margin-right: 10px;
}
</style>
