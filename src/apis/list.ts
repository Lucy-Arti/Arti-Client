import axios from 'axios';

export const baseURL = `http://arti-fashion.o-r.kr:8080/`;

export const GetAllProductLists = async () => {
	try {
		const response = await axios.get(`${baseURL}api/v1/clothes`);
		return response;
	} catch (error) {
		console.log(error);
		return false;
	}
};

export const GetProductDetail = async (id: string) => {
	try {
		const response = await axios.get(`${baseURL}api/v1/clothes/${id}`);
		return response;
	} catch (error) {
		console.log(error);
		return false;
	}
};
export const GetProductDetailByUser = async (id: string, token: string | null) => {
	try {
		const response = await axios.get(`${baseURL}api/v1/recent/${id}`, {
			headers: { Authorization: `Bearer ${token}` },
		});
		return response;
	} catch (error) {
		console.log(error);
		return false;
	}
};

export const getMarked = async (id: number | string, token: string | null) => {
	try {
		const response = await axios.get(`${baseURL}api/v1/likes/${id}/member`, {
			headers: { Authorization: `Bearer ${token}` },
		});
		return response;
	} catch (error) {
		console.log(error);
		return false;
	}
};

export const postMarked = async (id: number | string, token: string | null) => {
	const data = null;
	try {
		const response = await axios.post(`${baseURL}api/v1/likes/${id}`, data, {
			headers: { Authorization: `Bearer ${token}` },
		});
		return response;
	} catch (error) {
		console.log(error);
		return false;
	}
};

export const getAllProductByType = async (type: string, page: number) => {
	const accessToken = localStorage.getItem('access');
	try {
		const response = await axios.get(`${baseURL}api/v1/clothes/type/${type}?page=${page}`, {
			headers: { Authorization: `Bearer ${accessToken}` },
		});
		return response.data;
	} catch (error) {
		console.log(error);
	}
};
