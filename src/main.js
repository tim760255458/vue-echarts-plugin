import { createApp } from 'vue'
import App from './App.vue'
import * as echarts from 'echarts'
import VueEchartsPlugin from '../lib/index'

createApp(App).use(VueEchartsPlugin, {
  echarts
}).mount('#app')
