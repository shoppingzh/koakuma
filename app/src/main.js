import { createApp } from 'vue'
import App from './App.vue'
import ant from './plugins/ant-design'
import router from './router'

import './styles/index.less'

createApp(App)
  .use(ant)
  .use(router)
  .mount('#app')
