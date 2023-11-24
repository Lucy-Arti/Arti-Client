import axios from 'axios';

const baseURL = `https://arti-fashion.shop/`;

interface BuyData {
	name: string;
	address?: string;
	phoneNumber: string;
	delivery: boolean;
	itemId: number;
}

export const getProductList = async (category: string) => {
	try {
		const result = await axios.get(`${baseURL}api/v2/shop/${category}`);
		return result;
	} catch (error) {
		console.error('🚨🚨에러 발생 에러 발생 🚨🚨', error);
		throw error;
	}
};

export const getProductDetail = async (id: string) => {
	try {
		const result = await axios.get(`${baseURL}api/v2/shop/item/${id}`);
		return result;
	} catch (error) {
		console.error('🚨🚨에러 발생 에러 발생 🚨🚨', error);
		throw error;
	}
};

export const buyItem = async (body: BuyData) => {
	// const accessToken = localStorage.getItem('access');
	const accessToken =
		'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzMTgwMTg3Mzc4IiwiYXV0aCI6IlJPTEVfVVNFUiIsImlhdCI6MTcwMDY2NjUyNSwiZXhwIjozMzIwNjY2NTI1fQ.puFN2Y6jGx4E1DUWoOyvqwm0IvwS0TlaGAuNCzuNSPmwfCRBhNN1E-16paJLadLKA6knzzPa3fbGhES9NLICug';
	try {
		const result = await axios.post(`${baseURL}api/v2/buy`, body, {
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		});
	} catch (error) {
		throw error;
	}
};

export const getBuyList = async () => {
	// const accessToken = localStorage.getItem('access');
	const accessToken =
		'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzMTgwMTg3Mzc4IiwiYXV0aCI6IlJPTEVfVVNFUiIsImlhdCI6MTcwMDY2NjUyNSwiZXhwIjozMzIwNjY2NTI1fQ.puFN2Y6jGx4E1DUWoOyvqwm0IvwS0TlaGAuNCzuNSPmwfCRBhNN1E-16paJLadLKA6knzzPa3fbGhES9NLICug';
	try {
		const result = await axios.get(`${baseURL}api/v2/buy`, {
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		});
		return result;
	} catch (error) {
		throw error;
	}
};

export const getBuyListDetail = async (id: string) => {
	const result = await axios.get(`${baseURL}api/v2/buy/${id}`);
	console.log(result.data);
	return result;
};
