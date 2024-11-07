import axios from 'axios';
const baseURL = `http://arti-fashion.o-r.kr:8080/`;

export const GetSearchProductList = async (val: string) => {
	try {
		const response = await axios.get(`${baseURL}api/v1/clothes/search?query=${val}`);
		return response;
	} catch (error) {
		console.log(error);
		return false;
	}
};
