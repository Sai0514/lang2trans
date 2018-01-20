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
      <Button type="primary" class="translate" @click="translate">翻译</Button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import { langs, mapping } from '../common/config.js'

export default{
  data(){
    return{
        langList: langs.langList || [],
        langF: 'auto',
        langT: 'zh-CN'
    }
  },
  computed:{
        ...mapState([
            'langFrom', 'langTo' ,'hasChecked'
        ]),
	},
  methods: {
    ...mapMutations([
        'SET_ORIGNLANG',
		'SET_GOALLANG'
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
        console.log(this.$store.state.langTo)
    },
    translate(){
        let from = this.$store.state.langFrom
        let to = this.$store.state.langTo
        let query = this.$store.state.query
        if (from && to && query) {
            this.getTranslation(this.$store.state)
        }
    }
  }
}
</script>

<style>
.wrapper-navbar {
    width: 960px;
    margin: 0 auto;
}

.translate-language {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    height: 48px;
    margin-bottom: 10px;
}

.translate-language .language {
    width: 160px;
}

.translate-language .translate {
    width: 100px;
    margin-left: 10px;
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
