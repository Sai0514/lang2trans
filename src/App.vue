<template>
  <div id="app">
    <ui-header></ui-header>
    <ui-navbar></ui-navbar>
    <ui-content></ui-content>
  </div>
</template>

<script>
import UiHeader from '@/components/ui-header.vue'
import UiNavbar from '@/components/ui-navbar.vue'
import UiContent from '@/components/ui-content.vue'

export default {
  name: 'app',
  components: {
    'ui-header': UiHeader,
    'ui-navbar': UiNavbar,
    'ui-content': UiContent
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
