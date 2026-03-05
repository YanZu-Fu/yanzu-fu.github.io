<template>
  <div class="container">
    <div class="header">
      <div class="back-button" @click="goBack">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 18L9 12L15 6" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="title">审批信息</div>
      <div class="menu-button">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 12H20" stroke="#333333" stroke-width="2" stroke-linecap="round"/>
          <path d="M4 6H20" stroke="#333333" stroke-width="2" stroke-linecap="round"/>
          <path d="M4 18H20" stroke="#333333" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </div>
    </div>
    
    <Tabs v-model:value="activeTab" line-height="3">
      <TabPane label="未审批" value="pending"></TabPane>
      <TabPane label="已审批" value="processed"></TabPane>
    </Tabs>
    
    <div class="content">
      <div v-if="activeTab === 'pending'" class="approval-list">
        <div class="approval-item" v-for="(item, index) in pendingApprovals" :key="index">
          <div class="approval-content">
            <div class="approval-title">处理通知: 计划外申请单消息通知</div>
            <div class="approval-desc">{{ item.description }}</div>
          </div>
          <div class="approval-time">{{ item.time }}</div>
        </div>
        <div class="no-more" v-if="pendingApprovals.length === 0">没有更多了</div>
      </div>
      
      <div v-else-if="activeTab === 'processed'" class="approval-list">
        <div class="approval-item" v-for="(item, index) in processedApprovals" :key="index">
          <div class="approval-content">
            <div class="approval-title">处理通知: 计划外申请单消息通知</div>
            <div class="approval-desc">{{ item.description }}</div>
          </div>
          <div class="approval-time">{{ item.time }}</div>
        </div>
        <div class="no-more" v-if="processedApprovals.length === 0">没有更多了</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { Tabs, TabPane } from 'n-design-mobile';

const router = useRouter();
const activeTab = ref('pending');

const pendingApprovals = ref([
  {
    description: '项目4444, 样机Saa, 钟德鸿1发起了计划外申请，请及时处理',
    time: '11-05'
  },
  {
    description: '项目333, 样机222, 系统管理员发起了计划外申请，请及时处理',
    time: '10-29'
  },
  {
    description: '项目333, 样机333, 系统管理员发起了计划外申请，请及时处理',
    time: '10-29'
  },
  {
    description: '项目222, 样机111, 系统管理员发起了计划外申请，请及时处理',
    time: '10-29'
  },
  {
    description: '项目敦煌资料, 样机222, 系统管理员发起了计划外申请，请及时处理',
    time: '10-29'
  },
  {
    description: '项目AA, 样机111, 系统管理员发起了计划外申请，请及时处理',
    time: '10-29'
  },
  {
    description: '项目11, 样机111, 系统管理员发起了计划外申请，请及时处理',
    time: '10-29'
  },
  {
    description: '项目P00, 样机P00-999, 系统管理员发起了计划外申请，请及时处理',
    time: '10-19'
  }
]);

const processedApprovals = ref([]);

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

.approval-list {
  background-color: #ffffff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.approval-item {
  padding: 16px;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  
  &:last-child {
    border-bottom: none;
  }
}

.approval-content {
  flex: 1;
  margin-right: 16px;
}

.approval-title {
  font-size: 14px;
  font-weight: 500;
  color: #333333;
  margin-bottom: 8px;
}

.approval-desc {
  font-size: 14px;
  color: #666666;
  line-height: 1.4;
}

.approval-time {
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