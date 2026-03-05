import { http } from '@/utils/mobileRequest';

//同意
export const SignoffWorkRevAgree = (data: any) => http.post('/levault/lcmsvr/LcmAgent/SignoffWorkRevAgree', data);
//驳回
export const SignoffWorkRevRefuse = (data: any) => http.post('/levault/lcmsvr/LcmAgent/SignoffWorkRevRefuse', data);
//获取审签信息接口
export const G7LcmAppInfoe = (data: any) => http.post('/levault/g7changesvr/G7YzsFlowToDy/G7LcmAppInfo', data);
//获取审签文件接口
export const G7LcmAppAttach = (data: any) => http.post('/levault/g7changesvr/G7FlowToDy/G7LcmAppAttach', data);
//流程审签历史接口
export const GetTaskInfo = (data: any) => http.post('/levault/lcmsvr/Sig/GetTaskInfo', data);
//获取任务
export const G6GetTaskOrIssueList = (data: any) => http.post('/levault/g7changesvr/G7YzsFlowToDy/G6GetTaskOrIssueList', data);
//问题反馈LOV
export const GetInfoLov = (data: any) => http.post('/levault/lovsvr/Lov/GetInfoLov', data);
//获取组织结构
export const G6QueryQyWxDepartList = (data: any) => http.post('/levault/g6projectsvr/G6ProjectService/G6QueryQyWxDepartList', data);
//获取人员
export const G6GetQyWxUserListByDepartId = (data: any) => http.post('/levault/g6projectsvr/G6ProjectService/G6GetQyWxUserListByDepartId', data);


// 获取所有人员信息
export const getAllUserInfo = (data: any) => http.post('/levault/g7changesvr/G7YzsFlowToDy/G6GetUserInfo', data);

// export const updateItemSet = (data: any) => http.post('/levault/acnsvr/G6YzsIssue/UpdateItemSet', data);
export const updateItemSet = (data: any) => http.post('/levault/g6projectsvr/G6ProjectService/G6GetUsrObjIds', data);
//保存问题审批基本信息
export const UpdateItem = (data: any) => http.post('/levault/lcdsvr/G6YzsIssue/UpdateItemInfo', data);
//同意
export const G6BatchDeal = (data: any) => http.post('/levault/acnsvr/G6Yzsaction/G6BatchDeal', data);
//驳回
export const G6RefuseBatch = (data: any) => http.post('/levault/acnsvr/G6Yzsaction/G6RefuseBatch', data);
//状态更改
export const G6ChangeStates = (data: any) => http.post('/levault/g6yzsissuesvr/G6YzsIssue/G6ChangeStates', data);
//转办
export const G6BatchTransfer = (data: any) => http.post('/levault/g6yzsissuesvr/G6YzsIssue/G6BatchTransfer', data);
//加签
export const G6BatchAddSig = (data: any) => http.post('/levault/g6yzsissuesvr/G6YzsIssue/G6BatchAddSig', data);
//保存
export const G6YzsIssueUpdateItemInfo = (data: any) => http.post('/levault/lcdsvr/G6YzsIssue/G6YzsIssueUpdateItemInfo', data);

