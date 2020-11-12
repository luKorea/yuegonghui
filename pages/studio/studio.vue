<template>
	<view class="studio-container">
			<!-- 图片上传 -->
			<view class="upload-wrap" @click="uploadImg">
				<view class="upload" v-if="showImg">
					<image class="img" :src="imgUrl" mode=""></image>
				</view>
				<view class="upload" v-else="showImg">
					<image class="img" src="../../static/camera.png" mode=""></image>
				</view>
				<text class="upload-text">上传头像</text>
			</view>
			<!-- 表单录入 -->
			<form @submit="formSubmit">
				<view class="form-item">
					<input class="uni-input" name="username" placeholder="请填写用户名" />
				</view>
				<view class="form-item">
					<input class="uni-input" type="number" name="phone" placeholder="请填写电话号码" />
				</view>
				<view class="form-item">
					<input class="uni-input" name="email" placeholder="请填写邮箱" />
				</view>
				<view class="form-btn">
					<button form-type="submit">提交</button>
				</view>
			</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showImg: false,
				imgUrl: ''
			}
		},
		onLoad() {

		},
		methods: {
			uploadImg() {
				uni.chooseImage({
				    success: (chooseImageRes) => {
				        const tempFilePaths = chooseImageRes.tempFilePaths;
				        uni.uploadFile({
				            url: 'https://www.example.com/upload', //仅为示例，非真实的接口地址
				            filePath: tempFilePaths[0],
				            name: 'file',
				            formData: {
				                'user': 'test'
				            },
				            success: (uploadFileRes) => {
								console.log(uploadFileRes);
				                console.log(uploadFileRes.data);
				            }
				        });
				    }
				});
			},
			formSubmit(e) {
				const {
					detail: {
						value
					}
				} = e;
				console.log(value)
			}
		}
	}
</script>

<style>
	page, view {
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
		margin-top: 66rpx;
	}

	.upload {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 180rpx;
		height: 180rpx;
		background-color: #fff;
		border-radius: 50%;
		margin-bottom: 24rpx;
	}

	.upload .img {
		width: 64rpx;
		height: 64rpx;
	}

	.upload-text {
		margin-bottom: 40rpx;
	}

	.form-item input {
		width: 614rpx;
		height: 96rpx;
		background: rgba(255, 255, 255, .3);
		margin-bottom: 40rpx;
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
		margin-top: 20rpx;
		border-radius: 10rpx;
		box-sizing: border-box;
		text-align: center;
		color: #fff;
	}
</style>
