<template>
	<view class="swiper-container">
		<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
			<swiper-item v-for="(item, index) in data" :key='index'>
				<view class="swiper-item">
					<image :src="item" mode="aspectFill" />
				</view>
			</swiper-item>
		</swiper>
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
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500
			}
		},
	}
</script>

<style>
	.swiper-container {
		width: 100%;
		height: 402rpx;
	}
	.swiper-container .swiper {
		width: 100%;
		height: 100%;
	}
	.swiper-container .swiper .swiper-item {
		width: 100%;
		height: 100%;
	}
	.swiper-item image {
		width: 100%;
		height: 100%;
	}
</style>
