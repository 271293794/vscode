<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <router-view></router-view>
  </div>
</template>

<script>
import MHeader from 'c/m-header/m-header'
import tab from 'c/tab/tab'
export default {
  name: 'app',
  components: { MHeader, tab }

}
</script>

<style lang="stylus" scoped>
@import './common/stylus/variable'

#app
  color :$color-theme
</style>

