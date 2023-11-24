import axios from 'axios';

const baseURL = `https://arti-fashion.shop/`;

// 디자이너 리스트 가져오기
export const getAllDesignerList = async () => {
	try {
		const response = await axios.get(`${baseURL}api/v1/designers`);
		console.log(response);
		return response;
	} catch (error) {
		console.log(error);
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
