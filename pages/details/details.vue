<template>
	<view class="detail-container">
		<view class="video">
			<video id="myVideo" :show-fullscreen-btn='true' :show-play-btn='false' :enable-progress-gesture='false' :src="videoDetail.pullUrl">
				<!-- 用户观看人数 -->
				<view class="modal-container">
					<cover-view class="user-member">观看人数：1125</cover-view>
					<!-- <view class="modal-wallet">
						<cover-image class="wallet" :src="hongbao" @click="getWallet">></cover-image>
						<cover-view class="wallet-time">20:00</cover-view>
					</view> -->
				</view>
				<!-- 放大效果 -->
				<!-- <view>
					<cover-view class="pull"></cover-view>
					<cover-image class="pull-img" src="../../static/pull.png"></cover-image>
				</view> -->
				<!-- 用户签到 -->
				<!-- <view class="sign-container" v-if="showSignIn">
					<view class="modal-sign">
						<cover-view class="sign-text" @click="showWalletModal = true">签到</cover-view>
					</view>
				</view> -->
			</video>
		</view>
		<!-- tab切换 -->
		<view class="content">
			<view class="item">
				<view :class="['item-select',selectIndex==0?'item-active':'']" @click="setSelect(0)">直播介绍</view>
				<view :class="['item-select',selectIndex==1?'item-active':'']" @click="setSelect(1)">往期直播</view>
			</view>
			<view class="item-top" v-show="selectIndex == 0">
				<!-- <rich-text :nodes="strings"></rich-text> -->
				<text>{{videoDetail.liveName}}</text>
			</view>
			<view class="item-top" v-show="selectIndex == 1">
				<block v-if='data.length > 0' v-for="(item, index) in data">
					<view class="video-list" :key='item.id' @click="changeVideo(index)">
						<image :src="img" mode=""></image>
						<!-- <image :src="item.img" mode="aspectFill"></image> -->
						<view class="list-content">
							<view class="content-text">{{item.liveName}}</view>
							<view class="content-user">观看人数：{{item.id}}</view>
						</view>
					</view>
				</block>
			</view>
		</view>


		<!-- 红包区域 -->
			<view class="modal-wallet">
			<image class="wallet" :src="hongbao" @click="getWallet"></image>
			<view class="wallet-time">20:00</view>
		</view>

		<!--  用户签到  -->
		<view class="sign-container" v-if="showSignIn" @click="signIn">
			<image src="../../static/qiandao.png" mode=""></image>
		</view>

		<!-- 用户红包未打开蒙层 -->
		<view v-if='showWalletModal' class="my-modal">
			<view class="no-wallet">
				<image @click="openWallet" src="../../static/close.png" mode="aspectFill"></image>
				<image @click="showWalletModal = false" class="close-btn" src="../../static/close-btn.png"></image>
			</view>
		</view>
		<!-- 用户红包打开蒙层 -->
		<view v-if='showOpenWallModal' class="my-modal">
			<view class="no-wallet">
				<view class="money-modal">
					<image src="../../static/open.png"></image>
					<text class="wallet-money">￥{{money}}</text>
				</view>
				<image @click="showOpenWallModal = false" class="close-btn" src="../../static/close-btn.png"></image>
			</view>
		</view>
		<!-- 用户签到蒙层 -->
		<view v-if='showSignOpt' class="my-modal">
			<view class="sign-opt">
				<view class="sign-ball">
					<image class="sign-btn" src="../../static/sign.png" mode=""></image>
				</view>
				<view class="bgc">
					<view class="bgc-text">你已经连续签到 <text class="day-color"> {{day}} </text> 天</view>
				</view> 
				<view class="sign-view" @click="setDayTime">签到</view>
				<image @click="showSignOpt = false" class="close-btn" src="../../static/close-btn.png"></image>
			</view>
		</view>

	</view>
</template>

<script>
	import img1 from '../../static/swiper1.jpg';
	import img2 from '../../static/swiper2.jpg';
	import img3 from '../../static/swiper3.jpg';
	import hongbao from '../../static/hongbao.png';
	import qiandao from '../../static/qiandao.png';
	import appShare, {
		closeShare
	} from "@/utils/share.js"
	export default {
		data() {
			return {
				img: img1,
				controls: false,
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
				// 签到天数: 5,
				day: 5,
				hongbao: hongbao,
				qiandao: qiandao,
				selectIndex: 0,
				videoDetail: {},
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
			getDetailData(id) {
				this.$request.get(`/blade-live-list/selectLiveListByAnchorId?anchorId=${id}`)
				.then(res => {
					if(res.code === 200 && res.data.length > 0) {
						this.videoDetail = res.data[0];
						this.data = res.data;
						console.log(this.videoDetail);
					}
				}).catch(err => {
					console.log(err)
					uni.showToast({
						icon: 'none',
						title: '请求失败' + err
					})
				})
				
			},
			changeVideo(index) {
				this.videoDetail = this.data[index];
				this.setSelect(0);
				console.log(this.videoDetail)
			},
			//  切换tab选项
			setSelect(index) {
				this.selectIndex = index;
			},
			// 点击红包
			getWallet() {
				// uni.redirectTo({
				// 	url: "../wallet/wallet"
				// })
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
			},
			setDayTime(){
				this.day = this.day + 1;
				uni.showToast({
					title: '签到成功'
				})
				// this.showSignOpt = false;
			},
			onShare() {
				let shareData = {
					type: 4,
					shareUrl:"https://kemean.com/",
					shareTitle:"粤工惠APP",
					shareContent:"这是分享的直播视频",
					shareImg:"http://qn.kemean.cn//upload/202004/18/1587189024467w6xj18b1.jpg",
					mediaUrl: this.pullSrc
				};
				// 调用
				let shareObj = appShare(shareData, res => {
					console.log("分享成功回调", res);
					closeShare();
				});
			},
			getUrlData(data) {
				
			}
		},
		onLoad(options) {
			const {id} = options;
			this.getDetailData(id);
			uni.setNavigationBarTitle({
				title: '直播详情'
			});
		},
		/* 分享 */
		onNavigationBarButtonTap(e) {
			this.onShare();
		},
	}
</script>

<style>
	@import './index.css';
</style>

<style scoped>
	/deep/ .uni-video-progress-container,
	.wx-video-progress-container {
		display: none !important;
	}

	/deep/ .uni-video-current-time,
	.wx-video-current-time {
		display: none !important;
	}

	/deep/ .uni-video-duration,
	.wx-video-duration {
		display: none !important;
	}

	/deep/ .uni-video-cover-duration,
	.wx-video-cover-duration {
		display: none !important;
	}
</style>
