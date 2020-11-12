<template>
	<view class="more-container">
		<view class="more-content">
			<view class="content-item" v-for="item in data" :key='item.id'>
				<image :src="item.img" mode="aspectFill" />
				<text class="title">{{item.title}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	import img1 from '../../static/swiper1.jpg';
	import img2 from '../../static/swiper2.jpg';
	import img3 from '../../static/swiper3.jpg';
	export default {
		data() {
			return {
				//根据用户传入的type类型。动态获取对应的数据
				type: '',
				data: [{
						id: 1,
						title: '中国政府网由国务院办公厅中国政府网由国务院办公厅',
						img: img1
					},
					{
						id: 2,
						title: '中国政府网由国务院办公厅中国政府网由国务院办公厅',
						img: img2
					},
					{
						id: 3,
						title: '中国政府网由国务院办公厅中国政府网由国务院办公厅',
						img: img3
					},
					{
						id: 4,
						title: '中国政府网由国务院办公厅',
						img: img1
					},
					{
						id: 5,
						title: '中国政府网由国务院办公厅',
						img: img1
					},
					{
						id: 6,
						title: '中国政府网由国务院办公厅',
						img: img2
					}, {
						id: 7,
						title: '中国政府网由国务院办公厅',
						img: img3
					}, {
						id: 8,
						title: '中国政府网由国务院办公厅',
						img: img1
					}, {
						id: 9,
						title: '中国政府网由国务院办公厅',
						img: img2
					},
					{
						id: 10,
						title: '中国政府网由国务院办公厅',
						img: img3
					}
				]
			}
		},
		onLoad(options) {
			const {
				title,
				type
			} = options;
			this.type = type;
			uni.setNavigationBarTitle({
				title: title
			});
			console.log(this.type);
		}
	}
</script>

<style>
	.more-container {
		display: flex;
		flex-direction: column;
		margin: 34rpx;
	}

	.more-container .more-content {
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
	}

	.more-container .more-content .content-item {
		width: 314rpx;
		height: 240rpx;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		text-align: center;
		margin-bottom: 10rpx;
	}

	.content-item .title {
		font-size: 26rpx;
		font-family: Microsoft YaHei;
		font-weight: 400;
		color: #333333;
		margin-top: 10rpx;
		margin-bottom: 8rpx;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.content-item image {
		width: 100%;
		height: 100%;
		border-radius: 10rpx;
	}
</style>
