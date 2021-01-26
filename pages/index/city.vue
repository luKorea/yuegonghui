<template>
	<view class="city-container">
		<view class="city-header">
			<view class="title"><text>{{title}}</text></view>
			<view class="city-item">
				<button class="mini-btn" type="default" size="mini" v-for="item in city" :key='item.id' @click="goMore('city',item.id)">{{item.liveTypeName}}</button>
			</view>
			<view class="more">
				<text>更多 &gt;</text>
				<view v-if='cityMore.length > 0'>
					<picker @change="goPickMore" :value="index" :range="cityMore" range-key="liveTypeName">
						<view class="uni-input" style="color: #fff;">{{cityMore[index].liveTypeName}}</view>
					</picker>
				</view>
			</view>
		</view>
		<view class="city-content">
			<view class="content-item" v-for="item in data" :key='item.id' @click="goDetail(item.id)">
				<image :src="item.img" mode="aspectFill" />
				<text class="title">{{item.title}}</text>
				<!-- 小图标区域 -->
				<image src="../../static/live.gif" mode="" class="icon"></image>
				<text class="member">999人观看</text>
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
			},
			city: {
				type: Array,
				default: () => []
			},
			cityMore: {
				type: Array,
				default: () => []
			}
		},
		data() {
			return {
				index: 0,
				title: '地市直播',
				showPicker: false
			}
		},
		onLoad() {
			console.log(this.cityMore);
		},
		methods: {
			goPickMore(e) {
				const {
					value
				} = e.detail;
				this.index = value;
				let id = this.cityMore[this.index].id;
				uni.navigateTo({
					url: `../more/more?type=city&id=${id}`
				});
			},
			goMore(type, id) {
				uni.navigateTo({
					url: `../more/more?type=${type}&id=${id}`
				});
			},
			goDetail(id) {
				uni.navigateTo({
					url: `../details/details?id=${id}`
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
		height: 30rpx;
		vertical-align: middle;
	}

	.city-container .city-content {
		margin-top: 20rpx;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
	}

	.city-container .city-content .icon {
		position: absolute;
		left: 0;
		top: 0;
		width: 24rpx;
		height: 24rpx;
		padding: 4rpx;
		background-color: rgb(230, 0, 18);
	}

	.city-container .city-content .member {
		position: absolute;
		left: 31rpx;
		top: 0;
		background-color: rgba(1, 1, 1, .3);
		color: #fff;
		font-size: 12rpx;
		height: 24rpx;
		line-height: 24rpx;
		padding: 4rpx;
		border-bottom-right-radius: 3rpx;
	}

	.city-container .city-content .content-item {
		width: 314rpx;
		height: 240rpx;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		text-align: center;
		position: relative;
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
		border-radius: 4rpx;
		/* border-radius: 6rpx; */
	}
</style>
