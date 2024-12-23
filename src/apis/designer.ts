import axios from 'axios';
const baseURL = `https://arti-fashion.o-r.kr/`;

export const GetDesignerProduct = async (idx: string) => {
	try {
		const response = await axios.get(`${baseURL}api/v1/clothes/designer/${idx}`);
		return response;
	} catch (error) {
		console.log(error);
		return false;
	}
};

export const GetDesignerDetail = async (id: string) => {
	try {
		const response = await axios.get(`${baseURL}api/v1/designers/${id}`);
		return response;
	} catch (error) {
		console.log(error);
		return false;
	}
};
