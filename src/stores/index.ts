import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import type { App } from 'vue';
const pinia = createPinia();
window.pinia = {};
window.piniaInstance = null;
// 手动实现$reset方法
pinia.use(({ store }) => {
    const initialState = JSON.parse(JSON.stringify(store.$state));
    store.$reset = () => {
        store.$patch($state => {
            return Object.assign($state, JSON.parse(JSON.stringify(initialState)));
        });
    };
});

export function setupPinia(app: App<Element>) {
    pinia.use(piniaPluginPersistedstate);
    app.use(pinia);
}

window.piniaInstance = pinia;

export const getPiniaInstance = () => pinia;
