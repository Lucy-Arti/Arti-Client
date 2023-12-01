import axios from 'axios';
const baseURL = `https://arti-fashion.shop/`;

export const GetDesignerProduct = async (idx: string) => {
	try {
		const response = await axios.get(`${baseURL}api/v1/clothes/designer/${idx}`);
		// console.log(response.data);
		// console.log('');
		return response;
	} catch (error) {
		console.log(error);
		return false;
	}
};

export const GetDesignerDetail = async (id: string) => {
	try {
		const response = await axios.get(`${baseURL}api/v1/designers/${id}`);
		// console.log(response.data);
		return response;
	} catch (error) {
		console.log(error);
		return false;
	}
};
