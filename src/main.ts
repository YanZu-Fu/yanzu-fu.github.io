import {createApp} from 'vue';
import DesignMobile from 'n-design-mobile';
import VConsole from 'vconsole';
import router from './router';
import App from './App.vue';
import {setupPinia} from '@/stores';

import 'n-design-mobile/dist/style.css';
import './assets/main.css';
import 'amfe-flexible';
//cookies和$cookies根据自己的喜好去起名；


async function setupApp() {

    // 线上去掉
    // todo 仅在开发环境中使用
    // new VConsole();

    const app = createApp(App);
    setupPinia(app);
    app.use(router);
    app.use(DesignMobile).mount('#app');
}

await setupApp();
