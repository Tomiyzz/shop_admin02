import Vue from 'vue'
import App from './App'
import router from './router'
// 导入elementui
import ElementUI from 'element-ui'
// 导入elementUI得样式
import 'element-ui/lib/theme-chalk/index.css'

// 导入通用样式
// import '@/assets/base.less'

// 安装elementUI
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
