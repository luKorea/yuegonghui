<template>
	<view class="detail-container">
	
		<view class="video">
			<video id="myVideo" :show-fullscreen-btn='true' :show-play-btn='false' 
			:enable-progress-gesture='false' 
			:src="videoSrc">
			
			</video>
			<!-- 视频上层文字 -->
			<view class="modal">
				<view class="modal-top">
					<view class="modal-user">观看人数：1125</view>
					<view class="modal-money" @click="getWallet">
						<image :src="hongbao" mode="aspectFill"></image>
						<view class="time">20:00</view>
					</view>
				</view>
			</view>
			<!-- 用户签到 -->
			<view class="user-modal" v-if="showSignIn">
				<view class="wrap">
					<view class="button" @click="signIn">
						<image :src="qiandao" mode="aspectFill"></image>
						<text>签到</text>
					</view>
				</view>
			</view>
		</view>
		<!-- tab切换 -->
		<view class="content">
			<view class="item">
				<view :class="['item-select',selectIndex==0?'item-active':'']" @click="setSelect(0)">直播介绍</view>
				<view :class="['item-select',selectIndex==1?'item-active':'']" @click="setSelect(1)">往期直播</view>
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
		
		<!-- 用户红包未打开蒙层 -->
		<view v-if='showWalletModal' class="my-modal">
			<view class="no-wallet">
				<image @click="openWallet" src="../../static/close.png" mode="aspectFill"></image>
				<image
				 @click="showWalletModal = false"
				class="close-btn" src="../../static/close-btn.png" 
				></image>
			</view>
		</view>
		<!-- 用户红包打开蒙层 -->
		<view v-if='showOpenWallModal' class="my-modal">
			<view class="no-wallet">
				<view class="money-modal">
					<image src="../../static/open.png"></image>
					<text class="wallet-money">￥{{money}}</text>
				</view>
				<image
				 @click="showOpenWallModal = false"
				class="close-btn" src="../../static/close-btn.png" 
				mode="aspectFill"></image>
			</view>
		</view>
		<!-- 用户签到蒙层 -->
		<view v-if='showSignOpt' class="my-modal">
			
		</view>
		
	</view>
</template>

<script>  
	import img1 from '../../static/swiper1.jpg';
	import img2 from '../../static/swiper2.jpg';
	import img3 from '../../static/swiper3.jpg';
	import hongbao from '../../static/hongbao.png';
	import qiandao from '../../static/qiandao.png';
	export default {
		data() {
			return {
				// 是否显示红包
				showWallet: true,
				// 显示未打开红包层
				showWalletModal: false,
				// 显示打开红包层
				showOpenWallModal: false,
				// 打开后红包的钱数
				money: '50.00',
				// 是否显示签到按钮
				showSignIn: true,
				// 显示签到页面
				showSignOpt: false,
				hongbao: hongbao,
				qiandao: qiandao,
				selectIndex: 0,
				videoSrc: 'https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20200317.mp4',
				pullSrc: 'http://yghpull.gzbigbang.cn/live/77678fcabb7d4cf6aceaab50b411c64b/playlist.m3u8',
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
					}, 
					{
						id: 3,
						title: '中国政府网由国务院办公厅直播视频',
						img: img3,
						userMember: 777
					},
					{
						id: 4,
						title: '中国政府网由国务院办公厅直播视频',
						img: img1,
						userMember: 555
					}
				]
			}
		},
		methods: {
			//  切换tab选项
			setSelect(index) {
				this.selectIndex = index;
			},
			// 点击红包
			getWallet() {
				this.showWalletModal = true;
			},
			// 打开红包
			openWallet() {
				this.showWalletModal = false;
				this.showOpenWallModal = true;
			},
			// 点击按钮显示签到
			signIn() {
				this.showSignOpt = true;
			}
		},
		onLoad(options) {
			uni.setNavigationBarTitle({
				title: '直播详情'
			});
		},
		/* 分享 */
		onNavigationBarButtonTap(e) {
				console.log(e)
		},
	}
</script>

<style>
	@import './index.css';
</style>

<style scoped>
	/deep/ .uni-video-progress-container, .wx-video-progress-container {
		display: none !important;
	}
	
	/deep/ .uni-video-current-time, .wx-video-current-time {
		display: none !important;
	}
	
	/deep/ .uni-video-duration, .wx-video-duration {
		display: none !important;
	}
	
	/deep/ .uni-video-cover-duration, .wx-video-cover-duration {
		display: none !important;
	}
</style>
