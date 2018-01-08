<template>  
  <div class="wrapper-header">
    <div class="title">在线自动翻译</div>
    <div class="translate-channel">
      <Select v-model="channe" size="small" class="langs" @on-change="changeChannel">
          <Option v-for="item in channelList" :value="item.value" :key="item.value">
          {{ item.label }}
          </Option>
      </Select>
      <div class="huaci">
        <span>划词翻译</span>
        <i-switch v-model="switchWord" @on-change="changeWord" 
                  size="small" class="switch"></i-switch>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { langs } from '../common/config.js'

export default{
  data(){
    return{
      channelList: langs.channelList || [],
      switchWord: true,
      channe: 'google'
    }
  },
  computed: {
  }, 
  methods: {
    changeWord(status) {
      this.switchWord = !status;
    },
    ...mapMutations([
			'SET_CHANNEL'
		]),
    changeChannel(value) {
      this.SET_CHANNEL(value);
      // console.log(this.$store.state.channel)
    }
  }
}
</script>

<style>
.wrapper-header {
    width: 960px;
    margin: 0 auto;
}

.title {
    width: 100%;
    height: 48px;
    font-size: 24px;
    line-height: 2;
    margin-bottom: 10px;
}

.translate-channel {
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
    justify-content: flex-end;
    align-items: flex-end;
    height: 22px;
}

.translate-channel .langs {
    width: 100px;
    margin-right: 10px;
}

.translate-channel .huaci {
    height: 22px;
    line-height: 22px;
}
</style>
