/**
 * @description 二级页面 - 我的数据 store
 *
 * */
import { ref, computed, reactive } from 'vue';
import { defineStore } from 'pinia';

import { useUserStore } from '@/stores/modules/userInfo';

const userStore = useUserStore();

const userId = computed(() => {
    return userStore.userInfo?.['user-id'];
});

export const useHomeStore = defineStore(
    'home',
    () => {

        const data = ref({
            name:'hello'
        })
        // 获取类图标
        async function getData(codes: any) {
            data.value = {
                name:'hello1'
            }
        }

        return {
            getData,
            data
        };
    },
    {
        persist: true,
    }
);
