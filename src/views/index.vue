<template>
  <div class="container">
    <div class="card" @click="navigateToTemporaryTask">
      <div class="icon-container">
        <div class="icon">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" stroke="#0088CC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14 2V8H20" stroke="#0088CC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16 13H8" stroke="#0088CC" stroke-width="2" stroke-linecap="round"/>
            <path d="M16 17H8" stroke="#0088CC" stroke-width="2" stroke-linecap="round"/>
            <path d="M10 9H8" stroke="#0088CC" stroke-width="2" stroke-linecap="round"/>
          </svg>
          <div class="badge">1</div>
        </div>
        <div class="text">计划外申请单</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const navigateToTemporaryTask = () => {
  router.push('/temporaryTask');
};
</script>

<style scoped lang="less">
.container {
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
}

.card {
  width: 100%;
  max-width: 400px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 40px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}

.icon-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.icon {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.badge {
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: #ff4757;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: bold;
}

.text {
  font-size: 16px;
  color: #333333;
  font-weight: 500;
}
</style>