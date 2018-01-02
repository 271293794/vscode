import 'babel-polyfill'
import Vue from 'vue'
// 解决移动设备 300ms 延迟问题的插件， 因为它想看看你是不是要进行双击操作。
 
import fastclick from 'fastclick'
import App from './App'
import router from './router'
// 在此样式表中引入了 reset、base、icon，共3个文件
import 'common/stylus/index.styl'
// 使用消除延迟插件
fastclick.attach(document.body)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
