/**
 * @description 用户信息 store
 *
 * 1、用户信息相关的 store
 * 2、和 bridge 交互用户信息
 *
 * */
import {ref, computed} from 'vue'
import {defineStore} from 'pinia'


export const useUserStore = defineStore('userInfo', () => {
    const userInfo: any = ref(null);

    //  通过用户id获取用户名称、头像等信息
    async function getUserInfo() {

        userInfo.value = {
            name: 'lgw',
            id: 'lgw123'
        }
    }

    return {userInfo, getUserInfo}
}, {
    persist: true
});
