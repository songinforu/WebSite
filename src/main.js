import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Track from './utils/track-sdk'
//导入公共css
import './style/index.css'
//引入element组件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
//使用ElementUI
Vue.use(ElementUI);
//打开
const track = new Track(
  {
    PUid:'system'
  }
)
//原型   track创建   方便全局使用
Vue.prototype.$track = track
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
