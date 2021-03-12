import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import ElementPlus from 'element-plus';
import './style/elementUI/theme/index.css';
import './style/style.css';
import './registerServiceWorker'

const app = createApp(App);

app.use(store);
app.use(router);
app.use(ElementPlus);
app.mount('#app');
