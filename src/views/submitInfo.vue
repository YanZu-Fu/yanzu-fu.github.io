<template>
  <div class="container">
    <div class="header">
      <div class="back-button" @click="goBack">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 18L9 12L15 6" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="title">提交信息</div>
      <div class="menu-button">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 12H20" stroke="#333333" stroke-width="2" stroke-linecap="round"/>
          <path d="M4 6H20" stroke="#333333" stroke-width="2" stroke-linecap="round"/>
          <path d="M4 18H20" stroke="#333333" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </div>
    </div>
    
    <Tabs v-model:value="activeTab" line-height="3">
      <TabPane label="驳回" value="rejected">
        <div class="notification-list">
          <div class="notification-item" v-for="(item, index) in rejectedNotifications" :key="index">
            <div class="notification-content">
              <div class="notification-title">处理通知: 计划外申请单消息通知</div>
              <div class="notification-desc">{{ item.description }}</div>
            </div>
            <div class="notification-time">{{ item.time }}</div>
          </div>
          <div class="no-more" v-if="rejectedNotifications.length === 0">没有更多了</div>
        </div>
      </TabPane>
      <TabPane label="已提交/关闭" value="submitted">
        <div class="notification-list">
          <div class="notification-item" v-for="(item, index) in submittedNotifications" :key="index">
            <div class="notification-content">
              <div class="notification-title">处理通知: 计划外申请单消息通知</div>
              <div class="notification-desc">{{ item.description }}</div>
            </div>
            <div class="notification-time">{{ item.time }}</div>
          </div>
          <div class="no-more" v-if="submittedNotifications.length === 0">没有更多了</div>
        </div>
      </TabPane>
    </Tabs>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { Tabs, TabPane } from 'n-design-mobile';

const router = useRouter();
const activeTab = ref('rejected');

const rejectedNotifications = ref([
  {
    description: '项目P6-7WF25A, 样机Pw1, 黄焕坚进行了驳回，请及时处理',
    time: '09-25'
  },
  {
    description: '项目P6-7WF25A, 样机7WF25A-C-1001, 钟德鸿1进行了驳回，请及时处理',
    time: '09-24'
  },
  {
    description: '项目P00, 样机P00-999, 黄焕坚进行了驳回，请及时处理',
    time: '09-23'
  }
]);

const submittedNotifications = ref([]);

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

.notification-list {
  background-color: #ffffff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.notification-item {
  padding: 16px;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  
  &:last-child {
    border-bottom: none;
  }
}

.notification-content {
  flex: 1;
  margin-right: 16px;
}

.notification-title {
  font-size: 14px;
  font-weight: 500;
  color: #333333;
  margin-bottom: 8px;
}

.notification-desc {
  font-size: 14px;
  color: #666666;
  line-height: 1.4;
}

.notification-time {
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