<template>
	<view class="down-container">
		<view class="bg-container">
			<image :src="bg" mode=""></image>
		</view>
		<image :src="logo" mode="aspectFill" class="m-top"></image>
		<view class="text m-top">广东省总工会</view>
		<view class="down-btn m-top">
			<image :src="android" mode="aspectFill" @click="downAndroid"></image>
			<image :src="ios" mode="aspectFill" @click="downIos"></image>
		</view>
	</view>
</template>

<script>
	import logo from '../../static/logo.png';
	import ios from '../../static/ios.png';
	import android from '../../static/android.png';
	import bg from '../../static/bg.png';
	export default {
		data() {
			return {
				key: 'value',
				logo: logo,
				ios: ios,
				android: android,
				bg: bg
			}
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: '主播端下载'
			})
		},
		methods: {
			downAndroid() {
				uni.showToast({
					title: 'Android下载'
				})
			},
			downIos() {
				uni.showToast({
					title: 'Ios下载'
				})
			}
		}
	}
</script>

<style>
	.m-top {
		margin-top: 60rpx;
	}

	.m-left {
		margin-left: 10rpx;
	}


	.down-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
	}

	.down-container .bg-container image {
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		z-index: -1;
	}
	


	.down-container image {
		width: 210rpx;
		height: 210rpx;
	}

	.down-container .text {
		font-size: 48rpx;
		font-family: Source Han Sans CN;
		font-weight: 500;
		color: #333333;
	}

	.down-container .down-btn {
		display: flex;
		justify-content: center;
		width: 100%;
	}

	.down-container .down-btn image:first-child {
		margin-right: 62rpx;
	}

	.down-container .down-btn image {
		width: 278rpx;
		height: 94rpx;
	}

	.men {
		width: 100%;
		position: fixed;
		bottom: 0;
		left: 0;
		height: 500rpx;
	}

	.men image {
		width: 100%;
		height: 100%;
	}
</style>
