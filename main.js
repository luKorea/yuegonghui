import Vue from 'vue'
import App from './App'
// 引入封装后的axios
import axios from './utils/request.js'
/**
 * 给Vue函数添加一个原型属性$axios 指向Axios
 * 这样做的好处是在vue实例或组件中不用再去重复引用Axios 直接用this.$axios就能执行axios 方法了
 * 在.vue中使用，this.$axios.get
 * @param {Object} config
 */
Vue.prototype.$request = axios

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
