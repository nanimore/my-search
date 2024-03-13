import { createApp } from 'vue'
import App from './App.vue'

import Antd from 'ant-design-vue';
// import App from './App';
// import 'ant-design-vue/dist/antd.css';
import 'ant-design-vue/dist/reset.css';
import router from "./router";


const app = createApp(App);
app.config.productionTip = false;

app.use(Antd);
app.use(router);
app.mount('#app')