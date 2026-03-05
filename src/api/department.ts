import { http } from '@/utils/mobileRequest';


// 获取企业微信部门
export const reqGetDepartList = (params: any) => http.post('/levault/g6projectsvr/G6ProjectService/G6QueryQyWxDepartList', params);

// 获取子部门
export const reqGetDepartChildList = (params: any) => http.post('/levault/g6projectsvr/G6ProjectService/G6GetQyWxDepartSimpleList', params);

// 获取部门成员
export const reqGetDepartUser = (params: any) => http.post('/levault/g6projectsvr/G6ProjectService/G6GetQyWxUserListByDepartId', params);

//查询成员objId
export const G6GetUserInfoByCode = (params: any) => http.post('/levault/g7changesvr/G7YzsFlowToDy/G6GetUserInfoByCode', params);
