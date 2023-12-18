import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';
import { Message } from '@arco-design/web-vue';
import '@/assets/icon/index.css'


const app = createApp(App)
Message._context = app._context;
app.use(ArcoVue);

app.use(router)


app.mount('#app')
