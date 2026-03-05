<script setup lang="ts">
import { RouterView } from 'vue-router';
import { useUserStore } from '@/stores/modules/userInfo';
import { onMounted } from 'vue';

/**
 * @description 应用初始化时，设置用户信息
 * */
const store = useUserStore();

onMounted(async () => {
    await store.getUserInfo();
});
</script>
<template>
    <RouterView />
</template>
<style scoped></style>
