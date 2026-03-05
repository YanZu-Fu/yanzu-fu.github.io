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
      <div class="form-item">
        <label>任务归属车间</label>
        <select v-model="formData.workshop">
          <option value="">发动机</option>
          <!-- 其他选项 -->
        </select>
      </div>
      <div class="form-item">
        <label>样项项目</label>
        <select v-model="formData.sampleProject">
          <option value="">FG5-DU600-2D</option>
          <!-- 其他选项 -->
        </select>
      </div>
      <div class="form-item">
        <label>样机阶段</label>
        <select v-model="formData.sampleStage">
          <option value="">B</option>
          <!-- 其他选项 -->
        </select>
      </div>
      <div class="form-item">
        <label>样机编号范例</label>
        <input type="text" placeholder="TWF35-C-I23" v-model="formData.sampleNumberExample" />
      </div>
      <div class="form-item">
        <label>样机编号</label>
        <input type="text" placeholder="样机编号" v-model="formData.sampleNumber" />
      </div>
      <div class="form-item">
        <label>费用归属项目</label>
        <select v-model="formData.costProject">
          <option value="">AV5</option>
          <!-- 其他选项 -->
        </select>
      </div>
      <div class="form-item">
        <label>需求人</label>
        <input type="text" placeholder="张三" v-model="formData.requester" />
      </div>
      <div class="form-item">
        <label>联系电话</label>
        <input type="text" placeholder="联系电话" v-model="formData.phone" />
      </div>
      <div class="form-item">
        <label>样车项目</label>
        <input type="text" placeholder="样车项目" v-model="formData.carProject" />
      </div>
      <div class="form-item">
        <label>样车编号</label>
        <input type="text" placeholder="样车编号" v-model="formData.carNumber" />
      </div>
      <div class="form-item">
        <label>试制类型</label>
        <select v-model="formData.trialType">
          <option value="">塑料件</option>
          <!-- 其他选项 -->
        </select>
      </div>
      <div class="form-item">
        <label>样机用途</label>
        <input type="text" placeholder="样机用途" v-model="formData.samplePurpose" />
      </div>
      <div class="form-item">
        <label>试制要求</label>
        <input type="text" placeholder="试制要求" v-model="formData.trialRequirements" />
      </div>
      <div class="form-item">
        <label>试制目的</label>
        <input type="text" placeholder="试制目的" v-model="formData.trialPurpose" />
      </div>
      <div class="form-item">
        <label>试制零件准备情况</label>
        <input type="text" placeholder="试制零件准备情况" v-model="formData.partPreparation" />
      </div>
      <div class="form-item">
        <label>申请日期</label>
        <div class="date-input" @click="showApplicationDatePicker = true">
          <input type="text" :value="formData.applicationDate || '选择申请日期'" readonly />
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 2V5" stroke="#999999" stroke-width="2" stroke-linecap="round"/>
            <path d="M16 2V5" stroke="#999999" stroke-width="2" stroke-linecap="round"/>
            <path d="M3 9H21" stroke="#999999" stroke-width="2" stroke-linecap="round"/>
            <path d="M16 14C16 15.6569 14.6569 17 13 17C11.3431 17 10 15.6569 10 14C10 12.3431 11.3431 11 13 11C14.6569 11 16 12.3431 16 14Z" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M21 19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V8C3 6.89543 3.89543 6 5 6H7" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
      <div class="form-item">
        <label>要求完成时间</label>
        <div class="date-input" @click="showRequiredCompletionTimePicker = true">
          <input type="text" :value="formData.requiredCompletionTime || '选择要求完成时间'" readonly />
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 2V5" stroke="#999999" stroke-width="2" stroke-linecap="round"/>
            <path d="M16 2V5" stroke="#999999" stroke-width="2" stroke-linecap="round"/>
            <path d="M3 9H21" stroke="#999999" stroke-width="2" stroke-linecap="round"/>
            <path d="M16 14C16 15.6569 14.6569 17 13 17C11.3431 17 10 15.6569 10 14C10 12.3431 11.3431 11 13 11C14.6569 11 16 12.3431 16 14Z" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M21 19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V8C3 6.89543 3.89543 6 5 6H7" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
      <div class="form-item">
        <label>预计到件时间</label>
        <div class="date-input" @click="showExpectedArrivalTimePicker = true">
          <input type="text" :value="formData.expectedArrivalTime || '选择预计到件时间'" readonly />
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 2V5" stroke="#999999" stroke-width="2" stroke-linecap="round"/>
            <path d="M16 2V5" stroke="#999999" stroke-width="2" stroke-linecap="round"/>
            <path d="M3 9H21" stroke="#999999" stroke-width="2" stroke-linecap="round"/>
            <path d="M16 14C16 15.6569 14.6569 17 13 17C11.3431 17 10 15.6569 10 14C10 12.3431 11.3431 11 13 11C14.6569 11 16 12.3431 16 14Z" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M21 19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V8C3 6.89543 3.89543 6 5 6H7" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
      
      <!-- 申请日期选择器 -->
      <m-popup position="bottom" v-model:visible="showApplicationDatePicker">
        <div class="popup-header">
          <span class="cancel-btn" @click="showApplicationDatePicker = false">取消</span>
          <span class="confirm-btn" @click="confirmDate('applicationDate')">确认</span>
        </div>
        <m-date-picker
          v-model="formData.applicationDate"
          type="date"
          :is-show-chinese="true"
        />
      </m-popup>
      
      <!-- 要求完成时间选择器 -->
      <m-popup position="bottom" v-model:visible="showRequiredCompletionTimePicker">
        <div class="popup-header">
          <span class="cancel-btn" @click="showRequiredCompletionTimePicker = false">取消</span>
          <span class="confirm-btn" @click="confirmDate('requiredCompletionTime')">确认</span>
        </div>
        <m-date-picker
          v-model="formData.requiredCompletionTime"
          type="datetime"
          :is-show-chinese="true"
        />
      </m-popup>
      
      <!-- 预计到件时间选择器 -->
      <m-popup position="bottom" v-model:visible="showExpectedArrivalTimePicker">
        <div class="popup-header">
          <span class="cancel-btn" @click="showExpectedArrivalTimePicker = false">取消</span>
          <span class="confirm-btn" @click="confirmDate('expectedArrivalTime')">确认</span>
        </div>
        <m-date-picker
          v-model="formData.expectedArrivalTime"
          type="datetime"
          :is-show-chinese="true"
        />
      </m-popup>
      <div class="form-item">
        <label>附件</label>
        <div class="upload-area" @click="handleFileUpload">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 15V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H9" stroke="#0088CC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 17V7" stroke="#0088CC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9 10L12 7L15 10" stroke="#0088CC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
    
    <div class="footer">
      <button class="btn-cancel" @click="cancelForm">取消</button>
      <button class="btn-submit" @click="submitForm">提交</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const formData = ref({
  workshop: '',
  sampleProject: '',
  sampleStage: '',
  sampleNumberExample: 'TWF35-C-I23',
  sampleNumber: '',
  costProject: '',
  requester: '张三',
  phone: '',
  carProject: '',
  carNumber: '',
  trialType: '',
  samplePurpose: '',
  trialRequirements: '',
  trialPurpose: '',
  partPreparation: '',
  applicationDate: '',
  requiredCompletionTime: '',
  expectedArrivalTime: '',
  attachments: []
});

const showApplicationDatePicker = ref(false);
const showRequiredCompletionTimePicker = ref(false);
const showExpectedArrivalTimePicker = ref(false);

const goBack = () => {
  router.back();
};

const confirmDate = (type: string) => {
  if (type === 'applicationDate') {
    showApplicationDatePicker.value = false;
  } else if (type === 'requiredCompletionTime') {
    showRequiredCompletionTimePicker.value = false;
  } else if (type === 'expectedArrivalTime') {
    showExpectedArrivalTimePicker.value = false;
  }
};

const handleFileUpload = () => {
  console.log('上传附件');
  // 这里可以添加文件上传逻辑
};

const cancelForm = () => {
  router.back();
};

const submitForm = () => {
  console.log('提交表单:', formData.value);
  // 这里可以添加表单验证和提交逻辑
  alert('表单提交成功！');
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

.form-item {
  margin-bottom: 16px;
  background-color: #ffffff;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.form-item label {
  display: block;
  font-size: 14px;
  color: #666666;
  margin-bottom: 8px;
}

.form-item input,
.form-item select {
  width: 100%;
  padding: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  font-size: 14px;
  box-sizing: border-box;
  background-color: #ffffff;
}

.date-input {
  position: relative;
  width: 100%;
  
  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    font-size: 14px;
    box-sizing: border-box;
    background-color: #ffffff;
    cursor: pointer;
  }
  
  svg {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: #999999;
    pointer-events: none;
  }
}

.popup-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: #ffffff;
  border-bottom: 1px solid #e0e0e0;
  
  .cancel-btn {
    font-size: 16px;
    color: #666666;
    cursor: pointer;
  }
  
  .confirm-btn {
    font-size: 16px;
    color: #0088CC;
    font-weight: 500;
    cursor: pointer;
  }
}

.upload-area {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border: 1px dashed #e0e0e0;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #0088CC;
  }
}

.footer {
  display: flex;
  gap: 12px;
  padding: 16px;
  background-color: #ffffff;
  border-top: 1px solid #e0e0e0;
  box-sizing: border-box;
}

.btn-cancel,
.btn-submit {
  flex: 1;
  padding: 12px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid #e0e0e0;
}

.btn-cancel {
  background-color: #ffffff;
  color: #666666;
  
  &:hover {
    background-color: #f5f5f5;
  }
}

.btn-submit {
  background-color: #0088CC;
  color: #ffffff;
  border: none;
  
  &:hover {
    background-color: #0077b3;
  }
}
</style>