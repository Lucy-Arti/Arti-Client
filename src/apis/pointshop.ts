import axios from 'axios';

const baseURL = `https://arti-fashion.shop/`;

interface BuyData {
	name: string;
	address: string;
	phoneNumber: string;
	delivery: boolean;
	itemId: number;
}

export const getProductList = async (category: string) => {
	try {
		const result = await axios.get(`${baseURL}api/v2/shop/item/${category}`);
		console.log(result.data);
	} catch (error) {
		throw error;
	}
};

export const getProductDetail = async (id: string) => {
	try {
		const result = await axios.get(`${baseURL}api/v2/shop/item/${id}`);
		console.log(result.data);
	} catch (error) {
		throw error;
	}
};

export const buyItem = async (body: BuyData) => {
	const accessToken = localStorage.getItem('access');
	try {
		const response = await axios.post(`${baseURL}api/v2/buy`, body, {
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		});
	} catch (error) {
		throw error;
	}
};
