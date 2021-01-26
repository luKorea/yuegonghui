import request from './request.js';


export const getTreeData = () => {
	return request.get('/blade-live-type/liveTypeTree')
}