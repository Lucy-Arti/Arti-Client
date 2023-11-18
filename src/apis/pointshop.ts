import axios from 'axios';

const baseURL = `https://arti-fashion.shop/`;

export const getProductList = async (category: string) => {
	try {
		const result = await axios.get(`${baseURL}api/v2/shop/${category}`);
		console.log(result.data);
	} catch (error) {
		return console.log(error);
	}
};
