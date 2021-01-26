<!-- 
	TODO 往期专辑视频详情页，这个页面不需要显示红包，显示签到，直播人数功能
 -->
<template>
	<view class="detail-container">
		<view class="video">
			<video id="myVideo" :show-fullscreen-btn='true' :show-play-btn='false' :enable-progress-gesture='false' src="http://yghpull.gzbigbang.cn/live/test123/playlist.m3u8">
			</video>
		</view>
		<!-- tab切换 -->
		<view class="content">
			<view class="item">
				<view :class="['item-select',selectIndex==0?'item-active':'']" @click="setSelect(0)">专辑介绍</view>
				<view :class="['item-select',selectIndex==1?'item-active':'']" @click="setSelect(1)">相关专辑</view>
			</view>
			<view class="item-top" v-show="selectIndex == 0">
				<rich-text :nodes="strings"></rich-text>
			</view>
			<view class="item-top" v-show="selectIndex == 1">
				<block v-if='data.length > 0' v-for="item in data">
					<view class="video-list" :key='item.id'>
						<image :src="item.img" mode="aspectFill"></image>
						<view class="list-content">
							<view class="content-text">{{item.title}}</view>
							<view class="content-user">观看人数：{{item.userMember}}</view>
						</view>
					</view>
				</block>
			</view>
		</view>
	</view>
</template>

<script>
	import img1 from '../../static/swiper1.jpg';
	import img2 from '../../static/swiper2.jpg';
	import img3 from '../../static/swiper3.jpg';
	import appShare, {
		closeShare
	} from "@/utils/share.js"
	export default {
		data() {
			return {
				selectIndex: 0,
				strings: `<div> 播原理：把主播录制的视频推送到服务器，由服务器分发给观众观看。直播环节：推流端（采集、美颜处理、编码、推流）、服务的处理（转码、录制、截图、鉴黄）、播放器（拉流、解码、渲染）、互动系统（聊天室、礼物服务、赞）
				 播原理：把主播录制的视频推送到服务器，由服务器分发给观众观看。直播环节：推流端（采集、美颜处理、编码、推流）、服务的处理（转码、录制、截图、鉴黄）、播放器（拉流、解码、渲染）、互动系统（聊天室、礼物服务、赞）                     
				 </div>`,
				data: [{
						id: 1,
						title: '中国政府网由国务院办公厅直播视频',
						img: img1,
						userMember: 999
					},
					{
						id: 2,
						title: '中国政府网由国务院办公厅直播视频',
						img: img2,
						userMember: 888
					}, {
						id: 3,
						title: '中国政府网由国务院办公厅直播视频',
						img: img3,
						userMember: 777
					}
				]
			}
		},
		methods: {
			setSelect(index) {
				this.selectIndex = index;
			},
			onShare() {
				let shareData = {
					type: 4,
					shareUrl: "https://kemean.com/",
					shareTitle: "粤工惠APP",
					shareContent: "这是分享的直播视频",
					shareImg: "http://qn.kemean.cn//upload/202004/18/1587189024467w6xj18b1.jpg",
					mediaUrl: this.pullSrc
				};
				// 调用
				let shareObj = appShare(shareData, res => {
					console.log("分享成功回调", res);
					closeShare();
				});
			}
		},
		onLoad(options) {
			console.log('往期专辑视频详情页', options)
			uni.setNavigationBarTitle({
				title: '往期专辑详情'
			});
		},
		/* 分享 */
		onNavigationBarButtonTap(e) {
			this.onShare();
		},
	}
</script>

<style scoped>
	/deep/ .uni-video-progress-container {
		display: none !important;
	}

	/deep/ .uni-video-current-time {
		display: none;
	}

	/deep/ .uni-video-duration {
		display: none;
	}

	/deep/ .uni-video-cover-duration {
		display: none;
	}

	.details-container {
		width: 100%;
		height: 100%;
	}


	.detail-container .video {
		width: 100%;
		height: 402rpx;
	}

	.detail-container .video video {
		width: 100%;
		height: 100%;
	}

	.detail-container .content {
		/* display: flex;
		justify-content: center;
		align-items: center; */
		/* margin-top: 50rpx; */
		margin: 0 40rpx;
	}

	.item {
		background-color: #FFFFFF;
		height: 100rpx;
		display: flex;
	}

	.item-select {
		font-size: 30rpx;
		flex: 1;
		text-align: center;
		height: 100rpx;
		line-height: 100rpx;
		color: #333;
		box-sizing: border-box;
	}

	.item-active {
		border-bottom: 4rpx solid #F40001;
	}

	.item-top {
		margin-top: 26rpx;
	}

	.video-list {
		display: flex;
		justify-content: space-evenly;
		margin-bottom: 20rpx;
	}

	.video-list image {
		width: 400rpx;
		height: 240rpx;
		border-radius: 10rpx;
		margin-right: 20rpx;
	}

	.video-list .list-content {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.video-list .list-content .content-text {
		font-size: 28rpx;
		font-family: Microsoft YaHei;
		font-weight: 400;
		color: #333333;
	}

	.video-list .list-content .content-user {
		font-size: 24rpx;
		font-family: Microsoft YaHei;
		font-weight: 400;
		color: #999999;
	}
</style>
