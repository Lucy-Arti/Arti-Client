import axios from 'axios';

const baseURL = `https://arti-fashion.shop/`;

// 디자이너 리스트 가져오기
export const getAllDesignerList = async () => {
	try {
		const response = await axios.get(`${baseURL}api/v1/designers`);
		return response;
	} catch (error) {
		return false;
	}
};

// 옷 등록하기
export const postNewProduct = async (formData: FormData) => {
	try {
		const response = await axios.post(`${baseURL}api/v1/clothes`, formData, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		});
		console.log('업로드 성공:', response);
		return response;
	} catch (error) {
		console.error('Error sending POST request:', error);
		throw error;
	}
};

// 옷 정보 수정하기
export const patchProduct = async (formData: FormData, clothesId: number) => {
	try {
		const response = await axios.patch(`${baseURL}api/v1/clothes/${clothesId}`, formData, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		});
		console.log('정보 수정 성공:', response);
		return response;
	} catch (error) {
		console.error('Error sending PATCH request:', error);
		throw error;
	}
};

// 디자이너 등록하기
export const postNewDesigner = async (formData: FormData) => {
	try {
		const response = await axios.post(`${baseURL}api/v1/designers`, formData, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		});
		console.log('업로드 성공:', response);
		return response;
	} catch (error) {
		console.error('Error sending POST request:', error);
		throw error;
	}
};

// 디자이너 정보 수정하기
export const patchDesigner = async (formData: FormData, designerId: number) => {
	try {
		const response = await axios.patch(`${baseURL}api/v1/designers/${designerId}`, formData, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		});
		console.log('정보 수정 성공:', response);
		return response;
	} catch (error) {
		console.error('Error sending PATCH request:', error);
		throw error;
	}
};

// 사용자 포인트 리스트 가져오기
export const getAllUserPointList = async () => {
	try {
		const response = await axios.get(`${baseURL}api/v2/point/info`);
		console.log(response);
		return response;
	} catch (error) {
		console.log(error);
		return false;
	}
};

// 포인트 업데이트하기
export const givePoint = async (formData: FormData) => {
	try {
		const response = await axios.post(`${baseURL}api/v2/point/admin`, formData, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		});
		console.log('업로드 성공:', response);
		return response;
	} catch (error) {
		console.error('Error sending POST request:', error);
		throw error;
	}
};

// 사용자 리워드 리스트 가져오기
export const getAllUserReward = async () => {
	try {
		const response = await axios.get(`${baseURL}api/v2/buy/admin`);
		console.log(response);
		return response;
	} catch (error) {
		console.log(error);
		return false;
	}
};

// 리워드 상태 변경
export const patchReward = async (formData: FormData, deliveryId: number) => {
	try {
		const response = await axios.patch(`${baseURL}api/v2/buy/admin/${deliveryId}`, formData);
		console.log('리워드 상태 변경 성공:', response);
		return response;
	} catch (error) {
		console.error('Error sending PATCH request:', error);
		throw error;
	}
};
