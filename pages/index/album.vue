<template>
	<view class="album-container">
		<view class="album-header">
			<view class="icon">
				<view class="img">
					<image src="../../static/camera.png" mode=""></image>
				</view>
				<view class="title"><text>{{title}}</text></view>
			</view>
			<view class="more" @click="goMore('album')"><text>更多 &gt;</text></view>
		</view>
		<scroll-view class="scroll-view_H" scroll-x="true">
			<view class="album-content">
				<view class="content-item" v-for="item in data" :key='item.id' @click="goAlbum(item.id)">
					<image :src="item.img" mode="aspectFill" />
					<text class="title">{{item.title}}</text>
					<text class="member">999人已观看</text>
				</view>
			</view>
		</scroll-view>
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
				title: '往期专辑'
			}
		},
		methods: {
			goMore(type) {
				uni.navigateTo({
				    url: `../albumMore/albumMore?type=${type}`
				});
			},
			goAlbum(id) {
				uni.navigateTo({
				    url: `../albumDetails/albumDetails?id=${id}`
				});
			}
		}
	}
</script>

<style>
	.album-container {
		width: 100%;
		display: flex;
		flex-direction: column;
		margin-bottom: 30rpx;
	}

	.album-container .album-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.album-container .album-header .icon {
		display: flex;
	}

	.album-header .img {
		width: 40rpx;
		height: 40rpx;
		margin-right: 6rpx;
	}

	.album-header .img image {
		width: 100%;
		height: 100%;
	}

	.album-header .title {
		font-size: 30rpx;
		font-family: 'Source Han Sans CN';
		font-weight: bold;
		color: #333333;
	}

	.album-header .more {
		font-size: 24rpx;
		font-family: 'Microsoft YaHei';
		font-weight: 400;
		color: #999999;
		vertical-align: middle;
	}

	.album-container .album-content {
		margin-top: 20rpx;
		display: flex;
		justify-content: space-between;
		margin-bottom: 20rpx;
	}
	
	
	.album-container .album-content .member {
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		left: 0;
		top: 0;
		background-color: rgba(1,1,1,.3);
		color: #fff;
		font-size: 12rpx;
		height: 24rpx;
		line-height: 24rpx;
		border-bottom-right-radius: 3rpx;
	}

	.album-container .album-content .content-item {
		width: 216rpx;
		height: 156rpx;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		position: relative;
		margin: 0 8rpx 10rpx 8rpx;
	}

	.content-item .title {
		text-align: center;
		font-size: 16rpx;
		font-family: Microsoft YaHei;
		font-weight: 400;
		margin-top: 6rpx;
		color: #333333;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}

	.content-item image {
		width: 100%;
		height: 100%;
		border-radius: 4rpx;
	}
</style>
