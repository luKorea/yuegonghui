<template>
	<view class="city-container">
		<view class="city-header">
			<view class="title"><text>{{title}}</text></view>
			<view class="city-item">
				<button class="mini-btn" type="default" size="mini">广州</button>
				<button class="mini-btn" type="default" size="mini">深圳</button>
				<button class="mini-btn" type="default" size="mini">上海</button>
			</view>
			<view class="more" @click="goMore('city')"><text>更多 &gt;</text></view>
		</view>
		<view class="city-content">
			<view class="content-item" v-for="item in data" :key='item.id'>
				<image :src="item.img" mode="aspectFill" />
				<text class="title">{{item.title}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			data: {
				type: Array,
				default: () => []
			}
		},
		data() {
			return {
				title: '地市直播'
			}
		},
		methods: {
			goMore(type) {
				uni.navigateTo({
				    url: `../more/more?type=${type}&title=${this.title}`
				});
			}
		}
	}
</script>

<style>
	.city-container {
		width: 100%;
		display: flex;
		flex-direction: column;
		margin-bottom: 20rpx;
	}

	.city-container .city-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.city-header .title {
		font-size: 30rpx;
		font-family: 'Source Han Sans CN';
		font-weight: bold;
		color: #333333;
	}
	
	.city-item {
		display: flex;
	}
	
	.city-item button {
		margin-right: 6rpx;
		color: #fff;
		background-color: #FFAF35;
	}
	
	.city-header .more {
		font-size: 24rpx;
		font-family: 'Microsoft YaHei';
		font-weight: 400;
		color: #999999;
		vertical-align: middle;
	}
	.city-container .city-content {
		margin-top: 20rpx;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
	}
	.city-container .city-content .content-item {
		width: 314rpx;
		height: 240rpx;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		text-align: center;
	}
	.content-item .title {
		font-size: 26rpx;
		font-family: Microsoft YaHei;
		font-weight: 400;
		color: #333333;
		margin-top: 10rpx;
		margin-bottom: 20rpx;
	}
	.content-item image {
		width: 100%;
		height: 100%;
		border-radius: 10rpx;
	}
</style>
