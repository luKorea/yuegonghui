<template>
	<view class="more-container">
		<view v-if="showPage" class="btn-content">
			<view class="btn-item">
				<button type="default" size="mini" v-for="item in more" :class="item.id==seleteIndex?'hover':''" :key='item.id'
				 @click="showMore(item.id)">{{item.name}}</button>
			</view>
			<view class="more">
				<text>更多 &gt;</text>
				<view>
					<picker @change="goPickMore" :value="index" :range="btnMore" range-key="name">
						<view class="uni-input" style="color: #fff;">{{btnMore[index].name}}</view>
					</picker>
				</view>
			</view>
		</view>
		<view class="more-content">
			<view class="content-item" v-for="item in data" :key='item.id' @click="goDetail(item.id)">
				<image :src="item.img" mode="aspectFill" />
				<text class="title">{{item.title}}</text>
				<text class="member">999人已观看</text>
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
				showPage: false,
				index: 0,
				// 用户点击按钮选中项
				seleteIndex: '',
				//  用户点击更多选中项ID
				selectId: '',
				btnMore: [],
				more: [],
				city: [{
						name: '广州',
						id: 1
					},
					{
						name: '深圳',
						id: 2
					},
					{
						name: '上海',
						id: 3
					},
					{
						name: '北京',
						id: 4
					}
				],
				cityMore: [{
						name: '广州',
						id: 1
					},
					{
						name: '深圳',
						id: 2
					},
					{
						name: '上海',
						id: 3
					},
					{
						name: '北京',
						id: 4
					},
					{
						name: '杭州',
						id: 5
					},
					{
						name: '厦门',
						id: 6
					}
				],
				industry: [{
						name: '金融',
						id: 1
					},
					{
						name: '教育',
						id: 2
					},
					{
						name: '医疗',
						id: 3
					},
					{
						name: '旅游',
						id: 4
					}
				],
				industryMore: [{
						name: '金融',
						id: 1
					},
					{
						name: '教育',
						id: 2
					},
					{
						name: '医疗',
						id: 3
					},
					{
						name: '旅游',
						id: 4
					}
				],
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
		// 根据地址栏参数，动态设置列表页显示数据
		onLoad(options) {
			const {
				type,
				id
			} = options;
			let title = '';
			switch (type) {
				case 'album':
					title = '往期专辑';
					this.showPage = false;
					break;
				case 'city':
					title = '地市直播';
					this.showPage = true;
					this.seleteIndex = id;
					this.more = this.city;
					this.btnMore = this.cityMore;
					break;
				case 'industry':
					title = '产业工会直播';
					this.showPage = true;
					this.seleteIndex = id;
					this.more = this.industry;
					this.btnMore = this.industryMore;
					break;
			}
			uni.setNavigationBarTitle({
				title: title
			});
		},
		methods: {
			// 点击按钮切换按钮颜色
			showMore(id) {
				this.seleteIndex = id;
				console.log(id)
			},
			// 跳转到详情页
			goDetail(id) {
				uni.navigateTo({
					url: `../albumDetails/albumDetails?id=${id}`
				});
			},
			// 点击更多,设置按钮状态,跳蛛到指定的列表下
			goPickMore(e) {
				const {
					value
				} = e.detail;
				this.index = value;
				this.selectId = this.cityMore[this.index].id;
				this.seleteIndex = this.cityMore[this.index].id;
			}
		}
	}
</script>

<style>
	.more-container {
		display: flex;
		flex-direction: column;
		margin: 34rpx;
	}

	.more-container .btn-content {
		display: flex;
		justify-content: center;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
		margin-bottom: 20rpx;
	}

	.btn-item {
		display: flex;
	}

	.btn-item button {
		margin-right: 6rpx;
		color: #fff;
		background-color: #FFAF35;
	}

	.hover {
		background-color: #E60012 !important;
	}

	.more {
		font-size: 24rpx;
		font-family: 'Microsoft YaHei';
		font-weight: 400;
		color: #999999;
		height: 30rpx;
		vertical-align: middle;
	}

	.more-container .more-content {
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
	}
	
	.more-container .more-content .member {
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

	.more-container .more-content .content-item {
		width: 314rpx;
		height: 240rpx;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		text-align: center;
		position: relative;
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
		border-radius: 4rpx;
	}
</style>
