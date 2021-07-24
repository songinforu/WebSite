import Vue from 'vue'
import App from './App.vue'
import router from './router'
//导入公共css
import './style/index.css'
//引入element组件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
//使用ElementUI
Vue.use(ElementUI);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
