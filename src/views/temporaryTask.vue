<template>
  <div class="container">
    <div class="header">
      <div class="back-button" @click="goBack">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 18L9 12L15 6" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="title">临时任务</div>
      <div class="menu-button">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 12H20" stroke="#333333" stroke-width="2" stroke-linecap="round"/>
          <path d="M4 6H20" stroke="#333333" stroke-width="2" stroke-linecap="round"/>
          <path d="M4 18H20" stroke="#333333" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </div>
    </div>
    
    <div class="content">
      <div class="task-item" v-for="(item, index) in taskList" :key="index" @click="handleTaskClick(item)">
        <div class="task-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" stroke="#0088CC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14 2V8H20" stroke="#0088CC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="task-title">{{ item.title }}</div>
        <div class="task-arrow">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const taskList = ref([
  { title: '发起' },
  { title: '提交信息' },
  { title: '审批信息' },
  { title: '抄送信息' },
  { title: '列表明细' }
]);

const goBack = () => {
  router.back();
};

const handleTaskClick = (item: any) => {
  console.log('点击了任务:', item.title);
  if (item.title === '发起') {
    router.push('/initiateApplication');
  } else if (item.title === '提交信息') {
    router.push('/submitInfo');
  } else if (item.title === '审批信息') {
    router.push('/approvalInfo');
  } else if (item.title === '抄送信息') {
    router.push('/ccInfo');
  }
  // 这里可以根据不同任务跳转到不同页面
};
</script>

<style scoped lang="less">
.container {
  width: 100%;
  min-height: 100vh;
  background-color: #f5f5f5;
  box-sizing: border-box;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background-color: #ffffff;
  border-bottom: 1px solid #e0e0e0;
  box-sizing: border-box;
}

.back-button,
.menu-button {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.title {
  font-size: 18px;
  font-weight: 600;
  color: #333333;
}

.content {
  padding: 16px;
}

.task-item {
  display: flex;
  align-items: center;
  padding: 16px;
  background-color: #ffffff;
  border-radius: 8px;
  margin-bottom: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
}

.task-icon {
  margin-right: 12px;
  color: #0088CC;
}

.task-title {
  flex: 1;
  font-size: 16px;
  color: #333333;
}

.task-arrow {
  color: #999999;
}
</style>