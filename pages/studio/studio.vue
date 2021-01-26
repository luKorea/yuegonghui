<template>
	<view class="studio-container">
		<!-- 图片上传 -->
		<view class="upload-wrap" @click="uploadImg">
			<view class="upload" v-if="showImg">
				<image class="bigImg" :src="headPortrait"></image>
			</view>
			<view class="upload" v-else="showImg">
				<image class="img" src="../../static/camera.png" mode=""></image>
			</view>
			<text class="upload-text">上传头像</text>
		</view>
		<!-- 表单录入 -->
		<form @submit="formSubmit" class="form-container">
			<view class="form-item">
				<input class="uni-input" name="userName" placeholder="请填写用户名" />
			</view>
			<view class="form-item">
				<input class="uni-input" type="number" :value="phone" @input="inputChange" name="phone" placeholder="请填写电话号码" />
			</view>
			<view class="flex">
				<view class="form-item">
					<input class="uni-input" value="123456" name="code" placeholder="请填写短信验证码" />
				</view>
				<view class="form-item">
					<button v-if="isShowCode" class="uni-input" @click="getCode">{{fitstName}}</button>
					<button v-else>{{countTime}} 秒</button>
				</view>
			</view>
			<view class="form-item">
				<input class="uni-input" password name="password" placeholder="请设置密码" />
			</view>
			<view class="form-item">
				<input class="uni-input" password name="password2" placeholder="请再次确认密码" />
			</view>
			<view class="form-item">
				<my-select @change='getSelect' v-model="liveTypeId" :list='list' placeholder='请选择地市直播或产业直播'></my-select>
			</view>
			<view class="form-btn">
				<button form-type="submit">提交</button>
			</view>
		</form>
		<u-toast ref="uToast" />
	</view>
</template>

<script>
	import MySelect from '../../components/xfl-select/xfl-select.vue';
	import qs from 'qs';
	export default {
		components: {
			MySelect
		},
		data() {
			return {
				showImg: false,
				headPortrait: '',
				isShowCode: true,
				fitstName: '获取验证码',
				countTime: 60,
				liveTypeId: '',
				phone: '',
				verifyCode: '',
				key: '',
				//要展示的数据
				list: [],
			}
		},
		onLoad() {
			this.getTreeData();
		},
		methods: {
			// 获取地市工会数据
			getTreeData() {
				this.$request.get('/blade-live-type/liveTypeTree')
					.then(res => {
						if (res.code === 200 && res.data.length > 0) {
							let data = res.data,
								result = [];
							data.forEach(item => {
								result.push(...item.children)
							})
							this.list = result;
						}
					}).catch(err => {
						console.log(err)
					})
			},
			// 上传头像
			uploadImg() {
				uni.chooseImage({
					success: (chooseImageRes) => {
						const tempFilePaths = chooseImageRes.tempFilePaths;
						uni.uploadFile({
							url: 'http://yuegonghui.gzbigbang.com/api/blade-resource/oss/endpoint/put-file', //仅为示例，非真实的接口地址
							filePath: tempFilePaths[0],
							name: 'file',
							success: (res) => {
								let data = JSON.parse(res.data);
								console.log(data);
								if (data.code === 200) {
									this.showImg = true;
									this.headPortrait = data.data.value;
									console.log(this.headPortrait);
								}
							}
						});
					}
				});
			},
			inputChange(e) {
				this.phone = e.detail.value;
			},
			// 获取验证码
			getCode() {
				const _that = this;
				console.log(_that);
				_that.$request.get('/blade-anchor-user/sendMessage', {
					params: {
						phone: _that.phone
					}
				}).then(res => {
					if(res.code === 200) {
						uni.showToast({
							duration: 3000,
							title: `验证码为: ${res.data.verifyCode} 请输入`
						})
						this.verifyCode = res.data.verifyCode;
						this.key = res.data.key;
					}
				})
				.catch(err => {
					console.log(err)
				})
				//获取验证码倒计时
				let time = 60;
				this.isShowCode = false;
				let timer = setInterval(() => {
					time--;
					this.countTime = time;
					if (time === 0) {
						clearInterval(timer);
						this.isShowCode = true;
						this.fitstName = '重新获取';
						this.countTime = 60;
					}
				}, 1000)
			},
			// 获取下拉框的值
			getSelect(e) {
				const {
					orignItem
				} = e;
				this.liveTypeId = orignItem.id;
				console.log(this.liveTypeId);
			},
			formSubmit(e) {
				const {
					detail: {
						value
					}
				} = e;
				const {
					password,
					password2
				} = value;
				if (password !== password2) {
					uni.showToast({
						title: "两次密码输入不一致，请重新输入",
						icon: 'none'
					})
					return;
				}
				const data = {
					liveTypeId: this.liveTypeId,
					headPortrait: this.headPortrait,
					verifyCode: this.verifyCode || '123456',
					key: this.key,
					...value,
				};
				this.$request({
					method: 'POST',
					url: '/blade-anchor-user/submit',
					data: data,
					headers: {
					        'Content-Type': 'application/json'
					},
				}
				)
				.then(res => {
					if(res.code === 200) {
						uni.showToast({
							icon: 'success',
							title: '申请成功'
						})
						uni.navigateTo({
							url: '../download/lownload'
						})
					}
					console.log(res)
					// uni.navigateTo({
					// 	url: '../download/lownload'
					// })
				}).catch(err => {
					console.log(err)
					uni.showToast({
						icon: 'none',
						title: `申请失败`
					})
				})
			}
		}
	}
</script>

<style>
	page,
	view {
		display: flex;
		background-color: #E60012;
	}

	.studio-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin: 0 auto;
		color: #fff;
		font-family: Source Han Sans CN;
	}

	.upload-wrap {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-size: 28rpx;
		text-align: center;
		margin-top: 20rpx;
	}

	.upload {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 180rpx;
		height: 180rpx;
		background-color: #fff;
		border-radius: 50%;
	}

	.upload .img {
		width: 64rpx;
		height: 64rpx;
	}
	
	.upload .bigImg {
		width: 180rpx;
		height: 180rpx;
		border-radius: 50%;
	}
	
	.upload-text {
		margin-bottom: 30rpx;
	}

	.form-item input {
		width: 614rpx;
		height: 96rpx;
		background: rgba(255, 255, 255, .3);
		margin-bottom: 30rpx;
		border-radius: 10rpx;
		padding-left: 40rpx;
		box-sizing: border-box;
	}

	.uni-input-placeholder {
		color: #fff !important;
	}

	.form-btn button {
		width: 614rpx;
		height: 96rpx;
		background: #FFAF35;
		margin-top: 30rpx;
		border-radius: 10rpx;
		box-sizing: border-box;
		text-align: center;
		color: #fff;
	}

	.flex {
		display: flex;
	}

	.flex .form-item input {
		width: 350rpx;
		height: 96rpx;
		margin-right: 10rpx;
	}

	.flex .form-item button {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 254rpx;
		height: 96rpx;
		background: rgba(255, 255, 255, .3);
		color: #fff;
		font-size: 28rpx;
		text-align: center;
	}

	.flex .form-item button::after {
		border: none;
	}
</style>
