<template>
	<div>
		<el-form :inline="true" :model="searchOptions">
			<el-form-item label="商品名称">
				<el-input v-model="searchOptions.title" placeholder="请输入商品名称"></el-input>
			</el-form-item>
			<el-form-item label="商品价格">
				<el-input v-model="searchOptions.price" placeholder="请输入商品价格"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="onsubmit">搜索</el-button>
			</el-form-item>
		</el-form>
		<el-table :data="goodsList" border style="width: 100%">
			<el-table-column prop="id" label="ID" />
			<el-table-column prop="title" label="商品名称" />
			<el-table-column prop="price" label="商品价格" />
			<el-table-column prop="descript" label="商品描述" />
		</el-table>
	</div>
</template> 

<script lang="ts" setup>
	import {
		reactive,
		toRefs
	} from 'vue';
	import {
		getGoodlists
	} from '../../request/api'
	import {
		InitData
	} from '../../type/goods'
	const data = reactive(new InitData())
	const {
		searchOptions,
		goodsList
	} = {
		...toRefs(data)
	}
	const onsubmit = () => {
		console.log(searchOptions)
	}
	getGoodlists().then(res => {
		console.log(res)
		if (res.status) {
			data.goodsList = res.data.list
		} else {
			data.goodsList = []
		}
	})
</script>

<style scoped lang="less">

</style>
