<template>
  <div class="container">
    <div class="header">
      <div class="back-button" @click="goBack">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 18L9 12L15 6" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="title">抄送信息</div>
      <div class="menu-button">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 12H20" stroke="#333333" stroke-width="2" stroke-linecap="round"/>
          <path d="M4 6H20" stroke="#333333" stroke-width="2" stroke-linecap="round"/>
          <path d="M4 18H20" stroke="#333333" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </div>
    </div>
    
    <div class="content">
      <div class="cc-list">
        <div class="cc-item" v-for="(item, index) in ccNotifications" :key="index">
          <div class="cc-content">
            <div class="cc-title">抄送通知: 计划外申请单消息通知</div>
            <div class="cc-desc">{{ item.description }}</div>
          </div>
          <div class="cc-time">{{ item.time }}</div>
        </div>
        <div class="no-more" v-if="ccNotifications.length === 0">没有更多了</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const ccNotifications = ref([
  {
    description: '项目P26-2.0TM, 样机BH11-11, 黄焕坚发起了计划外申请单，已审批完毕',
    time: '12-17'
  },
  {
    description: '项目P26-2.0TM, 样机P26-100, 黄焕坚发起了计划外申请单，已审批完毕',
    time: '12-17'
  },
  {
    description: '项目P34, 样机P34-3, 黄焕坚发起了计划外申请单，已审批完毕',
    time: '12-17'
  },
  {
    description: '项目P34, 样机P34-01, 黄焕坚发起了计划外申请单，已审批完毕',
    time: '12-17'
  },
  {
    description: '项目P63, 样机P63-1, 黄焕坚发起了计划外申请单，已审批完毕',
    time: '12-17'
  },
  {
    description: '项目P9999, 样机222, 系统管理员发起了计划外申请单，已审批完毕',
    time: '11-12'
  },
  {
    description: '项目333, 样机111, 黄焕坚发起了计划外申请单，已审批完毕',
    time: '11-12'
  }
]);

const goBack = () => {
  router.back();
};
</script>

<style scoped lang="less">
.container {
  width: 100%;
  min-height: 100vh;
  background-color: #f5f5f5;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
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
  flex: 1;
  padding: 16px;
  overflow-y: auto;
}

.cc-list {
  background-color: #ffffff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.cc-item {
  padding: 16px;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  
  &:last-child {
    border-bottom: none;
  }
}

.cc-content {
  flex: 1;
  margin-right: 16px;
}

.cc-title {
  font-size: 14px;
  font-weight: 500;
  color: #333333;
  margin-bottom: 8px;
}

.cc-desc {
  font-size: 14px;
  color: #666666;
  line-height: 1.4;
}

.cc-time {
  font-size: 12px;
  color: #999999;
  white-space: nowrap;
}

.no-more {
  text-align: center;
  padding: 20px;
  font-size: 14px;
  color: #999999;
  background-color: #ffffff;
  border-radius: 8px;
  margin-top: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}
</style>