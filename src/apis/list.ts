import axios from 'axios';

const baseURL = `https://arti-fashion.shop/`;

export const GetAllProductLists = async () => {
	try {
		const response = await axios.get(`${baseURL}api/v1/clothes`);
		// console.log(response.data);
		return response;
	} catch (error) {
		console.log(error);
		return false;
	}
};

export const GetProductDetail = async (id: string) => {
	try {
		const response = await axios.get(`${baseURL}api/v1/clothes/${id}`);
		// console.log(response.data);
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
		// console.log(response.data);
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
		// console.log(response.data);
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
		// console.log(response.data);
		return response;
	} catch (error) {
		console.log(error);
		return false;
	}
};
