<template>
	<div class="user-main">
		<div class="search-header" style="height: 60px">
			<m-searchbar v-model="val" shape="square" @change="change"></m-searchbar>
			<ArrowLeftOutlined :style="{ fontSize: '16px', color: '#08c', paddingLeft: '16px' }"
				@click="Object.keys(currentDepart).length ? callBack(currentDepart) : null" />
		</div>
		<div class="user-body">
			<m-cell-group>
				<m-cell v-if="!childrenNoode" :title="item.name" v-for="item in list" :key="item.id"
					@click="openNewPage(item)">
					<template #icon>
						<m-checkbox v-if="!item.parentid" v-model="item.id"
							style="margin-right: 0; vertical-align: baseline"></m-checkbox>
						<img style="width: 20px; height: 20px"
							src="../../assets/icon/depart-icon.png" />
					</template>
				</m-cell>
				<!-- 向下找子节-->
				<m-cell v-if="childrenNoode" :title="item.name" v-for="item in list" :key="item.id"
					@click="openNewPage(item)">
					<template #icon>
						<div>
							<m-checkbox v-if="!item.parentid" v-model="item.isCheck" @change="changeCheckbox"
								style="margin-right: 0; vertical-align: baseline"></m-checkbox>

							<img style="width: 20px; height: 20px"
								src="../../assets/icon/depart-icon.png" />
						</div>
					</template>
				</m-cell>
			</m-cell-group>
		</div>
		<div class="user-footer">
			<m-button style="margin-right: 5px" shape="square" size="mini" @click="cancel">取消</m-button>
			<m-button shape="square" size="mini" type="primary" @click="submit">确定</m-button>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { mockDataSource } from './mock.js';
import { ArrowLeftOutlined } from '@nancal/icons-vue';
import { reqGetDepartList, reqGetDepartChildList, reqGetDepartUser, G6GetUserInfoByCode } from '@/api/department';
import { updateItemSet, SignoffWorkRevAgree } from '@/api/mobile';
// const emits = defineEmits(['onSelectFn']);
const props = defineProps(['leftId', 'taskId']);
const list: any = ref([]);
const childrenNoode: any = ref(false);
const childrenList: any = ref([]);
const currentDepart: any = ref([]); // 返回上一级数据
const copyDataList: any = ref([]); // 存储的数据
const userList: any = ref([]);//存显示的人名
const val = ref('');
const chooseList = ref([]);
const emit = defineEmits(['updateValue','cancelShow'])

//搜索
const change = () => {
 
 list.value = chooseList.value.filter((item: any) =>item.name.toLowerCase().includes(val.value.toLowerCase()));

}
// 获取部门信息
const getDepartmentList = async () => {
	const result: any = await reqGetDepartList({
		className: 'g6project',
		thisObj: {},
	});
	// console.log(result.data, '获取部门信息转前');
	const newData = result.data.data.map((item: any) => {
		return {
			...item,
			isCheck: false,
		};
	});
	list.value = transList2TreeData(newData);

	copyDataList.value = JSON.parse(JSON.stringify(newData));

	console.log(list.value, '获取部门信息');
};

// 转换数据为树形结构
const transList2TreeData = (arr: any) => {
	// 最终树形数组
	const treeData: any = [];
	// 深拷贝
	const arrClone = JSON.parse(JSON.stringify(arr));
	// 映射表 => 快速找到上级
	const mapInfo: any = arrClone?.reduce((obj: any, item: any) => {
		item.children = [];
		obj[item.id] = item;
		return obj;
	}, {});
	// console.log('转树函数map', mapInfo)
	// 转树
	arrClone.forEach((item: any) => {
		const parent: any = mapInfo[item.parentid];
		// 如果父节点存在, 直接push到父级的children数组里面
		// 如果父级不存在, 说明本身就是一级, 直接push到treeData数组
		parent ? parent.children.push(item) : treeData.push(item);
	});
	// 打印结果
	console.log(arr); // 查看原数组是否有变化
	return treeData;
};

const openNewPage = async (data: any) => {
	console.log(data, 126);

	if (data.parentid) {
		const children = copyDataList.value.filter((item: any) => item.parentid == data.id);
		console.log(children, 'children');
		currentDepart.value = data;
		const departUser: any = await reqGetDepartUser({
			className: 'g6project',
			thisObj: {
				requestParam: { department_id: data.id.toString() },
			},
		});

		list.value = [...departUser.data.data.userlist, ...children];
		chooseList.value = list.value;
		childrenNoode.value = true;
		console.log(list.value, 'list.value');
	} else {
		console.log(data, '当前是部门成员');
	}
};

const callBack = (data: any) => {
	console.log(data, '返回上一层级');
	list.value = copyDataList.value.filter((item: any) => item.parentid == data.parentid);
	const newData = copyDataList.value.filter((item: any) => item.id == data.parentid);
	currentDepart.value = newData[0];
	childrenNoode.value = false;
	console.log(list.value, '父级部门');
};

const submit = async () => {
	const onSelectData = list.value.filter((item: any) => item.isCheck);
	console.log(onSelectData, 'submit');

	if (onSelectData.length) {
		const uerId = onSelectData.reduce((newArr: any, item: any) => {
			newArr.push(item.userid);
			return newArr;
		}, []);
		const query = {
			className: '',
			thisObj:
			{
				userid: uerId
			}
		}

		 const res: any = await G6GetUserInfoByCode(query);
	
			const userObjId = res.data.data.objId;
			const params = {
				className: 'G6YzsIssue',
				thisObj: [
					{
						objId: props.leftId,
						className: 'G6YzsIssue',
						g6TreatmentHuman: userObjId,
					},
				],
			};
			console.log(params, 'params');

			 updateItemSet(params);
			if (res.data.data) {
				console.log('res', res.data);
				const userObjId = res.data.objId;
				userList.value = [userObjId, onSelectData];
				console.log('userList.value', userList.value);
				const value = userList.value
				emit('updateValue', value);
			}
	}
};
const cancel = () => {
	emit('cancelShow');
}
const changeCheckbox = () => { };
onMounted(() => {
	getDepartmentList();
});
</script>
<style scpoed lang="less">
.user-main {
	display: flex;
	flex-direction: column;
	height: calc(100vh - 20px);
	padding: 10px 0;

	.search-header {
		height: 65px;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	.user-body {
		flex: 1;
		overflow-y: auto;
	}

	.user-footer {
		height: 60px;
		display: flex;
		// align-items: center;
		justify-content: flex-end;
		margin-right: 20px;
		margin-bottom: 5px;
	}
}
</style>
