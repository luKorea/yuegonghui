<template>
	<view class="home-container">
		<!-- 轮播图区域 -->
		<my-swiper :data='swiperData' />
		<view class="content-wrap">
			<!-- 往期专辑 -->
			<my-album :data='albumData'></my-album>
			<!-- 地市直播 -->
			<my-city :data='cityData'></my-city>
			<!-- 产业工会 -->
			<my-industry :data='industryData'></my-industry>
		</view>
	</view>
</template>

<script>
	import MySwiper from './swipe.vue';
	import MyAlbum from './album.vue';
	import MyCity from './city.vue';
	import MyIndustry from './industry.vue';
	import img1 from '../../static/swiper1.jpg';
	import img2 from '../../static/swiper2.jpg';
	import img3 from '../../static/swiper3.jpg';
	export default {
		components: {
			MySwiper,
			MyAlbum,
			MyCity,
			MyIndustry
		},
		data() {
			return {
				swiperData: [img1, img2, img3],
				albumData: [
					{
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
					}
				],
				cityData: [
					{
						id: 1,
						title: '广州',
						img: img1,
						address: '广州'
					},
					{
						id: 2,
						title: '深圳',
						img: img2,
						address: '深圳'
					},
					{
						id: 3,
						title: '汕头',
						img: img3,
						address: '汕头'
					},
					{
						id: 4,
						title: '揭阳',
						img: img1
					}
				],
				industryData: [
					{
						id: 1,
						title: '教育工会',
						img: img1
					},
					{
						id: 2,
						title: '金融工会',
						img: img2
					},
					{
						id: 3,
						title: '基金工会',
						img: img3
					},
					{
						id: 4,
						title: '基地工会',
						img: img1
					}
				],
			}
		},
		onLoad() {
			console.log(this)
			this.$request({
				methods: 'get',
				url: 'www.baidu.com'
			}).then(res => {
				console.log(res)
			}).catch(err => console.log(err))
		},
		methods: {

		}
	}
</script>

<style>
	.home-container {
		width: 100%;
		height: 100%;
	}
	.content-wrap {
		display: flex;
		flex-direction: column;
		margin: 34rpx;
	}
</style>
